import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { BuildingEntity } from './building.entity';

@Entity({ tableName: 'company' })
export class CompanyEntity {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id: string;

  @Property({ type: 'text', nullable: false })
  name: string;

  @Property({ type: 'text', nullable: false })
  phone: string;

  @Property({ type: 'text', nullable: false, unique: true })
  email: string;

  @Property({ type: 'boolean', default: true })
  enabled: boolean;

  @OneToMany(() => BuildingEntity, 'company')
  buildings = new Collection<BuildingEntity>(this);
}
