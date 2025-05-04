import { Inject, Injectable } from '@nestjs/common';
import { UpdateApartmentInput } from 'src/application/ports/inbound/apartment/dto/apartment.dto';
import { ApartmentRepositoryToken } from 'src/application/ports/outbound/apartment/apartment.repository';
import { ApartmentRepository } from 'src/infrastructure/database/repositories/apartment/apartment.repository';

@Injectable()
export class UpdateApartmentUC {
  constructor(
    @Inject(ApartmentRepositoryToken)
    private readonly apartmentRepository: ApartmentRepository,
  ) {}

  async execute(input: UpdateApartmentInput) {
    return await this.apartmentRepository.update(input);
  }
}
