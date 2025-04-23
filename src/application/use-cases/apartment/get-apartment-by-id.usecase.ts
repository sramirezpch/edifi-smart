import { Inject, Injectable } from '@nestjs/common';
import { ApartmentRepositoryToken } from 'src/domain/repositories/apartment/apartment.repository';
import { ApartmentRepository } from 'src/infrastructure/persistence/postgres/apartment/apartment.repository';

@Injectable()
export class GetApartmentByIdUseCase {
  constructor(
    @Inject(ApartmentRepositoryToken)
    private readonly apartmentRepository: ApartmentRepository,
  ) {}

  async execute(id: string) {
    return await this.apartmentRepository.findById(id);
  }
}
