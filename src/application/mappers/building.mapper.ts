import { EntityDTO } from '@mikro-orm/core';
import { Building } from 'src/domain/entities/building.entity';
import { Company } from 'src/domain/entities/company.entity';
import { BuildingEntity } from 'src/infrastructure/database/entities/building.entity';
import { CompanyMapper } from './company.mapper';

export abstract class BuildingMapper {
  static toDomain(input: {
    id: string;
    name: string;
    address: string;
    district: string;
    city: string;
    countryCode: string;
    postalCode: string;
  }) {
    return new Building(input);
  }

  static fromEntityToDomain(entity: BuildingEntity) {
    const { company, ...rest } = entity;
    const companyDomain =
      company.isInitialized() &&
      CompanyMapper.fromEntityToDomain(company.getEntity());

    return new Building({ ...rest, company: companyDomain || undefined });
  }
}
