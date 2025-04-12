import { Entity, Enum, PrimaryKey, Property } from '@mikro-orm/core';
import { UserRole } from 'src/domain/enum';

@Entity({ tableName: 'user' })
export class UserEntity {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id: string;

  @Property({ type: 'text', nullable: false })
  name: string;

  @Property({ type: 'text', nullable: false })
  lastName: string;

  @Property({ type: 'text', nullable: false, unique: true })
  email: string;

  @Property({ type: 'text', nullable: false, unique: true })
  identificationNumber: string;

  @Enum(() => UserRole)
  role: UserRole;

  @Property({ type: 'text', nullable: false, hidden: true })
  password: string;
}
