import { Inject, Injectable } from '@nestjs/common';
import { GetApartmentsVO } from 'src/adapters/outbound/value-objects/apartment.vo';
import { ApartmentRepositoryToken } from 'src/domain/repositories/apartment.repository';
import { ApartmentRepository } from 'src/infrastructure/persistence/postgres/apartment/apartment.repository';

@Injectable()
export class GetApartmentsUseCase {
  constructor(
    @Inject(ApartmentRepositoryToken)
    private readonly apartmentRepository: ApartmentRepository,
  ) {}

  async execute(): Promise<Array<GetApartmentsVO>> {
    const apartments = await this.apartmentRepository.findAll();

    return apartments.map(apartment => apartment.)
  }
}
