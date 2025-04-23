import {
  Entity,
  ManyToOne,
  PrimaryKey,
  Property,
  Ref,
} from '@mikro-orm/core';
import { UserEntity } from '../user/user.entity';
import { BuildingEntity } from '../building/building.entity';

@Entity({ tableName: 'apartment' })
export class ApartmentEntity {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id: string;

  @ManyToOne(() => UserEntity, { ref: true })
  user: Ref<UserEntity>;

  @Property({ type: 'string', nullable: false })
  apartmentNumber: string;

  @Property({ type: 'string', nullable: false })
  towerNumber: string;

  @ManyToOne(() => BuildingEntity, { ref: true })
  building: Ref<BuildingEntity>;
}
