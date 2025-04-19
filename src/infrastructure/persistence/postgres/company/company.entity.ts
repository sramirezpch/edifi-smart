import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ICompany } from 'src/application/interfaces';

/**
 * Entity adapter for PostgreSQL
 */
@Entity({ tableName: 'company' })
export class CompanyEntity {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id: string;

  @Property({ type: 'text', nullable: false, unique: true })
  name: string;

  @Property({ type: 'text', nullable: false, unique: true })
  phone: string;

  @Property({ type: 'text', nullable: false, unique: true })
  email: string;

  @Property({ type: 'boolean', default: true })
  enabled: boolean;
}
