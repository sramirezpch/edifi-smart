import { Building } from 'src/domain/entities/building.entity';
import { UpdateBuildingInput } from './dto/building.dto';

export interface IUpdateBuildingUC {
  execute(input: UpdateBuildingInput): Promise<Building>;
}
