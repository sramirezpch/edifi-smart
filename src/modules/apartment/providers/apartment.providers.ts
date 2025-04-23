import { Provider } from '@nestjs/common';
import { CreateApartmentUseCase } from 'src/application/use-cases/apartment/create-apartment.usecase';
import { GetApartmentByIdUseCase } from 'src/application/use-cases/apartment/get-apartment-by-id.usecase';
import { GetApartmentsUseCase } from 'src/application/use-cases/apartment/get-apartments.usecase';
import { UpdateApartmentUseCase } from 'src/application/use-cases/apartment/update-apartment.usecase';
import { ApartmentRepositoryToken } from 'src/domain/repositories/apartment/apartment.repository';
import { ApartmentRepository } from 'src/infrastructure/persistence/postgres/apartment/apartment.repository';

const apartmentRepositoryProvider: Provider = {
  provide: ApartmentRepositoryToken,
  useClass: ApartmentRepository,
};

export default [
  apartmentRepositoryProvider,
  CreateApartmentUseCase,
  GetApartmentsUseCase,
  UpdateApartmentUseCase,
  GetApartmentByIdUseCase,
];
