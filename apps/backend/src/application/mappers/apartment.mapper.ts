import { Apartment } from 'src/domain/entities/apartment.entity';
import { ApartmentEntity } from 'src/infrastructure/database/entities/apartment.entity';
import { BuildingMapper } from './building.mapper';
import { UserMapper } from './user.mapper';

export class ApartmentMapper {
  static fromEntityToDomain(apartment: ApartmentEntity) {
    const { user, building, ...rest } = apartment;

    const userPopulated = user?.isInitialized() && user.getEntity();
    const buildingPopulated = building?.isInitialized() && building.getEntity();

    return new Apartment({
      ...rest,
      ...(userPopulated && {
        user: UserMapper.fromEntityToDomain(userPopulated),
      }),
      ...(buildingPopulated && {
        building: BuildingMapper.fromEntityToDomain(buildingPopulated),
      }),
    });
  }
}
