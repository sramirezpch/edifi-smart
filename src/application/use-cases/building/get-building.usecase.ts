import { Inject, Injectable } from '@nestjs/common';
import { BuildingMapper } from 'src/application/mappers/building.mapper';
import { IGetBuildingUC } from 'src/application/ports/inbound/building/get-building.usecase';
import { BuildingRepositoryToken } from 'src/application/ports/outbound/building/building.repository';
import { Building, BuildingProps } from 'src/domain/entities/building.entity';
import { BuildingRepository } from 'src/infrastructure/database/repositories/building/building.repository';

@Injectable()
export class GetBuildingUC implements IGetBuildingUC {
  constructor(
    @Inject(BuildingRepositoryToken)
    private readonly buildingRepository: BuildingRepository,
  ) {}

  async execute(id: string): Promise<Building> {
    const building = await this.buildingRepository.findById(id);

    return BuildingMapper.fromEntityToDomain(building);
  }
}
