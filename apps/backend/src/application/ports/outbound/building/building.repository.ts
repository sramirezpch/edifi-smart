import { BuildingEntity } from 'src/infrastructure/database/entities/building.entity';
import {
  CreateBuildingInput,
  UpdateBuildingInput,
} from '../../inbound/building/dto/building.dto';

export interface IBuildingRepository {
  insert(input: CreateBuildingInput): Promise<BuildingEntity>;
  findAll(): Promise<Array<BuildingEntity>>;
  findById(id: string): Promise<Omit<BuildingEntity, 'apartments'>>;
  update(input: UpdateBuildingInput): Promise<BuildingEntity>;
}

export const BuildingRepositoryToken = 'BuildingRepository';
