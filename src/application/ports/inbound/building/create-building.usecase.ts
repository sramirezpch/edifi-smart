import { CreateBuildingInput } from './dto/building.dto';
import { Building } from 'src/domain/entities/building.entity';

export interface ICreateBuildingUC {
  execute(input: CreateBuildingInput): Promise<Building>;
}
