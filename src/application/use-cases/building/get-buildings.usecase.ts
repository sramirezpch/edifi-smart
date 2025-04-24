import { Inject, Injectable } from '@nestjs/common';
import { BuildingMapper } from 'src/application/mappers/building.mapper';
import { IGetBuildingsUC } from 'src/application/ports/inbound/building/get-buildings.usecase';
import { BuildingRepositoryToken } from 'src/application/ports/outbound/building/building.repository';
import { Building } from 'src/domain/entities/building.entity';
import { BuildingRepository } from 'src/infrastructure/database/repositories/building/building.repository';

@Injectable()
export class GetBuildingsUC implements IGetBuildingsUC {
  constructor(
    @Inject(BuildingRepositoryToken)
    private readonly buildingRepository: BuildingRepository,
  ) {}

  async execute(): Promise<Building[]> {
    const buildings = await this.buildingRepository.findAll();

    return buildings.map((building) => {
      return BuildingMapper.fromEntityToDomain(building);
    });
  }
}
