import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ITenant } from 'src/application/interfaces/tenant';

/**
 * Entity adapter for PostgreSQL
 */
@Entity({ tableName: 'tenant' })
export class TenantEntity {
  @PrimaryKey({ type: 'uuid' })
  id: string;

  @Property({ type: 'string', nullable: false, unique: true })
  address: string;

  @Property({ type: 'string', nullable: false, unique: true })
  phone: string;

  @Property({ type: 'string', nullable: false, unique: true })
  email: string;

  @Property({ type: 'boolean', default: true })
  enabled: boolean;

  constructor(private readonly props: ITenant) {}
}
