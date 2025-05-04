import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

import { ICreateBuildingUC } from 'src/application/ports/inbound/building/create-building.usecase';
import { CreateBuildingInput } from 'src/application/ports/inbound/building/dto/building.dto';
import { BuildingRepositoryToken } from 'src/application/ports/outbound/building/building.repository';
import { CompanyRepositoryToken } from 'src/application/ports/outbound/company/company.repository';
import { Building } from 'src/domain/entities/building.entity';
import { BuildingRepository } from 'src/infrastructure/database/repositories/building/building.repository';
import { CompanyRepository } from 'src/infrastructure/database/repositories/company/company.repository';
import { UniqueConstraintViolationException, wrap } from '@mikro-orm/core';
import { BuildingMapper } from 'src/application/mappers/building.mapper';

@Injectable()
export class CreateBuildingUC implements ICreateBuildingUC {
  constructor(
    @Inject(BuildingRepositoryToken)
    private readonly buildingRepository: BuildingRepository,
    @Inject(CompanyRepositoryToken)
    private readonly companyRepository: CompanyRepository,
  ) {}

  async execute(input: CreateBuildingInput): Promise<Building> {
    try {
      const building = await this.buildingRepository.insert(input);

      return BuildingMapper.fromEntityToDomain(building);
    } catch (error) {
      if (error instanceof UniqueConstraintViolationException) {
        console.error({
          code: error.code,
          cause: error.cause,
          name: error.name,
          message: error.message,
        });
        throw new BadRequestException();
      }
      throw new InternalServerErrorException('An error ocurred');
    }
  }
}
