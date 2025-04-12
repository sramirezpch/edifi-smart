import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ITenant } from 'src/application/interfaces';

/**
 * Entity adapter for PostgreSQL
 */
@Entity({ tableName: 'tenant' })
export class TenantEntity {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id: string;

  @Property({ type: 'string', nullable: false, unique: true })
  address: string;

  @Property({ type: 'string', nullable: true })
  secondaryAddress?: string;

  @Property({ type: 'string', nullable: false })
  locality: string;

  @Property({ type: 'string', nullable: false })
  adminAreaLevel1: string;

  @Property({ type: 'string', nullable: true })
  adminAreaLevel2: string;

  @Property({ type: 'string', nullable: false, length: 2 })
  countryCode: string;

  @Property({ type: 'string', nullable: true })
  postalCode?: string;

  @Property({ type: 'boolean', default: true })
  enabled: boolean;
}
