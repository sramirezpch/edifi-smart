import { Inject, Injectable } from '@nestjs/common';
import { CreateApartmentDto } from 'src/adapters/inbound/dtos/apartment.dto';
import { Apartment } from 'src/domain/entities/apartment.entity';
import { ApartmentRepositoryToken } from 'src/domain/repositories/apartment.repository';
import { ApartmentRepository } from 'src/infrastructure/persistence/postgres/apartment/apartment.repository';

@Injectable()
export class CreateApartmentUseCase {
  constructor(
    @Inject(ApartmentRepositoryToken)
    private readonly apartmentRepository: ApartmentRepository,
  ) {}

  async execute(dto: CreateApartmentDto) {
    const domain = new Apartment(dto);

    return await this.apartmentRepository.insert(domain);
  }
}
