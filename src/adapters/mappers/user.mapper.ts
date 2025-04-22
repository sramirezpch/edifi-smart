import { wrap } from '@mikro-orm/core';
import { IUser } from 'src/application/interfaces';
import { User } from 'src/domain/entities/user.entity';
import { UserEntity } from 'src/infrastructure/persistence/postgres/user/user.entity';

export class UserMapper {
  static fromEntityToDomain(entity: UserEntity): User {
    const { apartments, ...rest } = entity;

    return new User({ ...rest, apartmentIds: apartments.map((a) => a.id) });
  }

  static fromDomainToEntity(domain: User): UserEntity {
    return Object.assign(new UserEntity(), domain);
  }

  static toDomain(input: IUser): User {
    return new User(input);
  }
}
