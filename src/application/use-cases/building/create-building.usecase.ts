import { Inject, Injectable } from '@nestjs/common';
import { CreateBuildingDto } from 'src/adapters/inbound/dtos/building.dto';
import { Building } from 'src/domain/entities/building.entity';
import { BuildingRepositoryToken } from 'src/domain/repositories/building.repository';
import { CompanyRepositoryToken } from 'src/domain/repositories/company.repository';
import { BuildingRepository } from 'src/infrastructure/persistence/postgres/building/building.repository';
import { CompanyRepository } from 'src/infrastructure/persistence/postgres/company/company.repository';

@Injectable()
export class CreateBuildingUseCase {
  constructor(
    @Inject(BuildingRepositoryToken)
    private readonly buildingRepository: BuildingRepository,
    @Inject(CompanyRepositoryToken)
    private readonly companyRepository: CompanyRepository,
  ) {}

  async execute(dto: CreateBuildingDto) {
    try {
      const domain = new Building(dto);

      console.log(domain.toObject());
      return await this.buildingRepository.insert(domain);
    } catch (error) {
      throw error;
    }
  }
}
