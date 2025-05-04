/**
 *   id uuid [primary key]
  name text
  lastname text
  email text [unique]
  id_type text
  id_number text
  role text
 */

import { Entity, Enum, PrimaryKey, Property } from '@mikro-orm/core';
import { UserRole } from 'src/domain/enum';

@Entity({ tableName: 'user' })
export class UserEntity {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id: string;

  @Property({ type: 'text', nullable: false })
  name: string;

  @Property({ type: 'text', nullable: false })
  lastname: string;

  @Property({ type: 'text', nullable: false, unique: true })
  email: string;

  @Property({ type: 'text', nullable: false, unique: true })
  idNumber: string;

  @Property({ type: 'text', nullable: false })
  idType: string;

  @Property({ type: 'text', nullable: false })
  password: string;

  @Enum({ items: () => UserRole, nativeEnumName: 'user_role' })
  role: UserRole;
}
