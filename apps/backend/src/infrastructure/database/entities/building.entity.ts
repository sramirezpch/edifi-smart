import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
  Ref,
} from '@mikro-orm/core';
import { CompanyEntity } from './company.entity';
import { ApartmentEntity } from './apartment.entity';

@Entity({ tableName: 'building' })
export class BuildingEntity {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id: string;

  @Property({ type: 'text', nullable: false })
  name: string;

  @Property({ type: 'text', nullable: false, unique: true })
  address: string;

  @Property({ type: 'text', nullable: false })
  district: string;

  @Property({ type: 'text', nullable: false })
  city: string;

  @Property({ type: 'text', nullable: false })
  countryCode: string;

  @Property({ type: 'text', nullable: false })
  postalCode: string;

  @ManyToOne(() => CompanyEntity, { ref: true })
  company: Ref<CompanyEntity>;

  @OneToMany(() => ApartmentEntity, 'building')
  apartments = new Collection<ApartmentEntity>(this);
}
