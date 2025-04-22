import { Apartment } from 'src/domain/entities/apartment.entity';
import { BaseMapper } from './base.mapper';
import { ApartmentEntity } from 'src/infrastructure/persistence/postgres/apartment/apartment.entity';

export class ApartmentMapper {
  static fromDomainToEntity(domain: Apartment): ApartmentEntity {
    return Object.assign(new ApartmentEntity(), domain.toObject());
  }

  static fromEntityToDomain(entity: ApartmentEntity): Apartment {
    return new Apartment({
      id: entity.id,
      apartmentNumber: entity.apartmentNumber,
      buildingId: entity.building.id,
      towerNumber: entity.towerNumber,
      userId: entity.user.id,
    });
  }
}
