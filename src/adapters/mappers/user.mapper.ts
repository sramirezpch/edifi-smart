import { wrap } from '@mikro-orm/core';
import { IUser } from 'src/application/interfaces';
import { User } from 'src/domain/entities/user.entity';
import { UserEntity } from 'src/infrastructure/persistence/postgres/user/user.entity';

export class UserMapper {
  static fromEntityToDomain(entity: UserEntity): User {
    return new User(entity);
  }

  static fromDomainToEntity(domain: User): UserEntity {
    return Object.assign(new UserEntity(), domain);
  }

  static fromInputToDomain(input: IUser): User {
    return new User(input);
  }
}
