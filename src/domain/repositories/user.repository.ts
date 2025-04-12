import { UserEntity } from 'src/infrastructure/persistence/postgres/user/user.entity';
import { User } from '../entities/user.entity';
import { GetUsersParams } from './interfaces';
import { QueryResult } from '@mikro-orm/core';

export interface IUserRepository {
  insert(domain: User): Promise<{ id: string }>;
  findAll(filters: GetUsersParams): Promise<Array<UserEntity>>;
  update(domain: Partial<User>): Promise<void>;
}

export const UserRepositoryToken = 'UserRepository';
