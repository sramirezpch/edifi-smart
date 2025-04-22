import { BuildingEntity } from 'src/infrastructure/persistence/postgres/building/building.entity';
import { Building } from '../entities/building.entity';
import { CompanyEntity } from 'src/infrastructure/persistence/postgres/company/company.entity';

export interface IBuildingRepository {
  insert(domain: Building): Promise<{ id: string }>;
  findById(id: string): Promise<BuildingEntity>;
  findAll(): Promise<Array<Omit<BuildingEntity, 'company' | 'apartments'>>>;
  update(domain: Partial<Building>): any;
}

export const BuildingRepositoryToken = 'BuildingRepository';
