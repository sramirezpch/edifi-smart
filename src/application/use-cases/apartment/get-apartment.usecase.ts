import { Inject, Injectable } from '@nestjs/common';
import { ApartmentMapper } from 'src/application/mappers/apartment.mapper';
import { ApartmentRepositoryToken } from 'src/application/ports/outbound/apartment/apartment.repository';
import { ApartmentRepository } from 'src/infrastructure/database/repositories/apartment/apartment.repository';

@Injectable()
export class GetApartmentUC {
  constructor(
    @Inject(ApartmentRepositoryToken)
    private readonly apartmentRepository: ApartmentRepository,
  ) {}

  async execute(id: string) {
    const apartment = await this.apartmentRepository.findById(id);

    return ApartmentMapper.fromEntityToDomain(apartment);
  }
}
