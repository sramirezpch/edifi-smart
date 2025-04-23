import { BuildingEntity } from 'src/infrastructure/persistence/postgres/building/building.entity';
import { Building } from '../../entities/building.entity';
import { BuildingGetAllReturnType, BuildingGetByIdReturnType } from './types';

export interface IBuildingRepository {
  insert(domain: Building): Promise<{ id: string }>;
  findById(id: string): Promise<BuildingGetByIdReturnType>;
  findAll(): Promise<Array<BuildingGetAllReturnType>>;
  update(domain: Partial<Building>): void;
}

export const BuildingRepositoryToken = 'BuildingRepository';
