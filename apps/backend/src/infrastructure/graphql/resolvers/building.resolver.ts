import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

import { CreateBuildingUC } from 'src/application/use-cases/building/create-building.usecase';

import { Building, MinimalBuilding } from '../models/building';
import { CreateBuildingInput } from '../inputs/building/create-building.input';
import { GetBuildingsUC } from 'src/application/use-cases/building/get-buildings.usecase';
import { GetBuildingUC } from 'src/application/use-cases/building/get-building.usecase';
import { UpdateBuildingInput } from '../inputs/building/update-building.input';
import { UpdateBuildingUC } from 'src/application/use-cases/building/update-building.usecase';

@Resolver()
export class BuildingResolver {
  constructor(
    @Inject() private readonly upsertBuildingUseCase: CreateBuildingUC,
    @Inject() private readonly getBuildingsUseCase: GetBuildingsUC,
    @Inject() private readonly getBuildingUseCase: GetBuildingUC,
    @Inject() private readonly updateBuildingUseCase: UpdateBuildingUC,
  ) {}

  @Mutation(() => Boolean, { name: 'createBuilding' })
  async createBuilding(@Args('input') input: CreateBuildingInput) {
    const building = await this.upsertBuildingUseCase.execute(input);

    return !!building;
  }

  @Mutation(() => Boolean, { name: 'updateBuilding' })
  async updateBuilding(@Args('input') input: UpdateBuildingInput) {
    const building = await this.updateBuildingUseCase.execute(input);

    return !!building;
  }

  @Query(() => [MinimalBuilding], { name: 'buildings' })
  async getBuildings() {
    const buildings = await this.getBuildingsUseCase.execute();

    return buildings;
  }

  @Query(() => Building, { name: 'building' })
  async getBuilding(@Args('id') id: string): Promise<Building> {
    const building = await this.getBuildingUseCase.execute(id);

    return building;
  }
}
