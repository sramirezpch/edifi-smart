import { Building } from 'src/domain/entities/building.entity';
import { BaseMapper } from './base.mapper';
import { BuildingEntity } from 'src/infrastructure/persistence/postgres/building/building.entity';
import { IBuilding } from 'src/application/interfaces';

export class BuildingMapper extends BaseMapper<Building, BuildingEntity> {
  static fromDomainToEntity(domain: Building): BuildingEntity {
    return Object.assign(new BuildingEntity(), domain.toObject());
  }

  fromEntityToDomain(entity: BuildingEntity): Building {
    return new Building({
      id: entity.id,
      name: entity.name,
      address: entity.address,
      city: entity.city,
      district: entity.district,
      postalCode: entity.postalCode,
      countryCode: entity.countryCode,
      company: entity.company.id,
    });
  }
}
