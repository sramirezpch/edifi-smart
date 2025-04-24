import { Building } from 'src/domain/entities/building.entity';

export interface IGetBuildingsUC {
  execute(): Promise<Building[]>;
}
