import {
  Entity,
  ManyToOne,
  PrimaryKey,
  Property,
  EntityIdentifier,
  Reference,
  Ref,
  OneToMany,
  Collection,
} from '@mikro-orm/core';
import { CompanyEntity } from '../company/company.entity';
import { ApartmentEntity } from '../apartment/apartment.entity';

@Entity({ tableName: 'building' })
export class BuildingEntity {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id: string;

  @Property({ type: 'text', nullable: false })
  name: string;

  @Property({ type: 'text', nullable: false, unique: true })
  address: string;

  @Property({ type: 'text', nullable: false })
  city: string;

  @Property({ type: 'text', nullable: false })
  district: string;

  @Property({ type: 'text', nullable: false })
  postalCode: string;

  @Property({ type: 'text', nullable: false })
  countryCode: string;

  @ManyToOne(() => CompanyEntity, { ref: true })
  company: Ref<CompanyEntity>;

  @OneToMany(() => ApartmentEntity, (a) => a.building)
  apartments = new Collection<ApartmentEntity>(this);
}
