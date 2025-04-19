import { wrap } from '@mikro-orm/core';
import { Inject, Injectable } from '@nestjs/common';
import { UpdateBuildingDto } from 'src/adapters/inbound/dtos/building.dto';
import { BuildingRepositoryToken } from 'src/domain/repositories/building.repository';
import { BuildingRepository } from 'src/infrastructure/persistence/postgres/building/building.repository';

@Injectable()
export class UpdateBuildingUseCase {
  constructor(
    @Inject(BuildingRepositoryToken)
    private readonly buildingRepository: BuildingRepository,
  ) {}

  async execute(id: string, dto: UpdateBuildingDto) {
    const entity = await this.buildingRepository.findById(id);

    wrap(entity).assign(dto, { merge: true });

    return await this.buildingRepository.update();
  }
}
