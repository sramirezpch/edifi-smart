import { Building } from 'src/domain/entities/building.entity';

export interface IGetBuildingUC {
  execute(id: string): Promise<Building>;
}
