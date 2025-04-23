import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Building } from 'src/domain/entities/building.entity';
import { IBuildingRepository } from 'src/domain/repositories/building/building.repository';
import { BuildingEntity } from './building.entity';
import {
  EntityRepository,
  ref,
  Reference,
  rel,
  wrap,
} from '@mikro-orm/postgresql';
import { BuildingMapper } from 'src/adapters/mappers/building.mapper';
import { CompanyEntity } from '../company/company.entity';
import {
  BuildingGetAllReturnType,
  BuildingGetAllReturnTypeFields,
  BuildingGetByIdReturnType,
  BuildingGetByIdReturnTypeFields,
} from 'src/domain/repositories/building/types';

@Injectable()
export class BuildingRepository implements IBuildingRepository {
  constructor(
    @InjectRepository(BuildingEntity)
    private readonly buildingRepository: EntityRepository<BuildingEntity>,
  ) {}

  async insert(domain: Building): Promise<{ id: string }> {
    const entity = BuildingMapper.fromDomainToEntity(domain);

    entity.company = ref(CompanyEntity, domain.company);

    await this.buildingRepository.getEntityManager().persistAndFlush(entity);

    return { id: entity.id };
  }

  async findAll(): Promise<Array<BuildingGetAllReturnType>> {
    const entities = await this.buildingRepository.findAll<
      'building',
      BuildingGetAllReturnTypeFields,
      BuildingGetAllReturnTypeFields
    >({
      populate: ['company'],
      exclude: ['company.enabled', 'company.email'],
    });

    console.log(entities);

    return entities.map((building) => {
      const company = building.company.get();

      return {
        id: building.id,
        city: building.city,
        address: building.address,
        countryCode: building.countryCode,
        district: building.district,
        name: building.name,
        company,
      };
    });
  }

  async findById(id: string): Promise<BuildingGetByIdReturnType> {
    const building = await this.buildingRepository.findOne(
      { id },
      { populate: ['company'] },
    );

    if (!building) throw new NotFoundException('No building found');

    const company = building.company.get();

    return {
      city: building.city,
      id: building.id,
      countryCode: building.countryCode,
      district: building.district,
      name: building.name,
      postalCode: building.postalCode,
      company,
    };
  }

  async update(): Promise<void> {
    return await this.buildingRepository.getEntityManager().flush();
  }
}
