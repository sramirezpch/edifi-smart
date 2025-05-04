import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { BuildingMapper } from 'src/application/mappers/building.mapper';
import { UpdateBuildingInput } from 'src/application/ports/inbound/building/dto/building.dto';
import { IUpdateBuildingUC } from 'src/application/ports/inbound/building/update-building.usecase';
import { BuildingRepositoryToken } from 'src/application/ports/outbound/building/building.repository';
import { Building } from 'src/domain/entities/building.entity';
import { BuildingRepository } from 'src/infrastructure/database/repositories/building/building.repository';

@Injectable()
export class UpdateBuildingUC implements IUpdateBuildingUC {
  constructor(
    @Inject(BuildingRepositoryToken)
    private readonly buildingRepository: BuildingRepository,
  ) {}

  async execute(input: UpdateBuildingInput): Promise<Building> {
    try {
      const building = await this.buildingRepository.update(input);

      return BuildingMapper.fromEntityToDomain(building);
    } catch (error) {
      console.error({ error });
      throw new InternalServerErrorException();
    }
  }
}
