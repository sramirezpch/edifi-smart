import { Provider } from '@nestjs/common';
import { CreateBuildingUseCase } from 'src/application/use-cases/building/create-building.usecase';
import { GetBuildingByIdUseCase } from 'src/application/use-cases/building/get-building-by-id.usecase';
import { GetBuildingsUseCase } from 'src/application/use-cases/building/get-buildings.usecase';
import { UpdateBuildingUseCase } from 'src/application/use-cases/building/update-building.usecase';
import { BuildingRepositoryToken } from 'src/domain/repositories/building/building.repository';
import { BuildingRepository } from 'src/infrastructure/persistence/postgres/building/building.repository';

export const buildingRepositoryProvider: Provider = {
  provide: BuildingRepositoryToken,
  useClass: BuildingRepository,
};

export default [
  buildingRepositoryProvider,
  CreateBuildingUseCase,
  GetBuildingByIdUseCase,
  GetBuildingsUseCase,
  UpdateBuildingUseCase,
];
