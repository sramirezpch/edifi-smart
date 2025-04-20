import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateBuildingUseCase } from 'src/application/use-cases/building/create-building.usecase';
import { CreateBuildingDto, UpdateBuildingDto } from '../dtos/building.dto';
import { GetBuildingByIdUseCase } from 'src/application/use-cases/building/get-building-by-id.usecase';
import { GetBuildingsUseCase } from 'src/application/use-cases/building/get-buildings.usecase';
import { UpdateBuildingUseCase } from 'src/application/use-cases/building/update-building.usecase';

@Controller('building')
export class BuildingController {
  constructor(
    @Inject() private readonly createBuildingUseCase: CreateBuildingUseCase,
    @Inject() private readonly getBuildingByIdUseCase: GetBuildingByIdUseCase,
    @Inject() private readonly getBuildingsUseCase: GetBuildingsUseCase,
    @Inject() private readonly updateBuildingUseCase: UpdateBuildingUseCase,
  ) {}

  @Post('')
  async create(@Body() dto: CreateBuildingDto) {
    return await this.createBuildingUseCase.execute(dto);
  }

  @Get('/:buildingId')
  async getBuilding(@Param('buildingId') id: string) {
    return await this.getBuildingByIdUseCase.execute(id);
  }

  @Get('')
  async getBuildings() {
    return await this.getBuildingsUseCase.execute();
  }

  @Patch('/:buildingId')
  async updateBuilding(
    @Param('buildingId') id: string,
    @Body() dto: UpdateBuildingDto,
  ) {
    return await this.updateBuildingUseCase.execute(id, dto);
  }
}
