import { Inject, Injectable } from '@nestjs/common';
import { BuildingRepositoryToken } from 'src/domain/repositories/building/building.repository';
import { BuildingRepository } from 'src/infrastructure/persistence/postgres/building/building.repository';

@Injectable()
export class GetBuildingByIdUseCase {
  constructor(
    @Inject(BuildingRepositoryToken)
    private readonly buildingRepository: BuildingRepository,
  ) {}

  async execute(id: string) {
    return await this.buildingRepository.findById(id);
  }
}
