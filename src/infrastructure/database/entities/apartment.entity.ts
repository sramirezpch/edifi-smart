import { Entity, ManyToOne, PrimaryKey, Property, Ref } from '@mikro-orm/core';
import { UserEntity } from './user.entity';
import { BuildingEntity } from './building.entity';

@Entity({ tableName: 'apartment' })
export class ApartmentEntity {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id: string;

  @Property({ type: 'text', nullable: false })
  apartmentNumber: string;

  @Property({ type: 'text', nullable: false })
  towerNumber: string;

  @ManyToOne(() => UserEntity, { ref: true, nullable: true })
  user?: Ref<UserEntity>;

  @ManyToOne(() => BuildingEntity, { ref: true })
  building?: Ref<BuildingEntity>;
}
