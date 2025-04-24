import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ApartmentMapper } from 'src/application/mappers/apartment.mapper';
import { ApartmentRepositoryToken } from 'src/application/ports/outbound/apartment/apartment.repository';
import { Apartment } from 'src/domain/entities/apartment.entity';
import { ApartmentRepository } from 'src/infrastructure/database/repositories/apartment/apartment.repository';

@Injectable()
export class GetApartmentsUC {
  constructor(
    @Inject(ApartmentRepositoryToken)
    private readonly apartmentRepository: ApartmentRepository,
  ) {}

  async execute() {
    try {
      const apartments = await this.apartmentRepository.findAll();

      return apartments.map((apartment) => {
        return ApartmentMapper.fromEntityToDomain(apartment);
      });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
