import { UserEntity } from 'src/infrastructure/persistence/postgres/user/user.entity';
import { User } from '../entities/user.entity';
import { GetUsersQueryDto } from 'src/adapters/inbound/dtos/user.dto';

export interface IUserRepository {
  insert(domain: User): Promise<{ id: string }>;
  findAll(
    input: GetUsersQueryDto,
  ): Promise<Array<Omit<UserEntity, 'password' | 'apartments'>>>;
  update(domain: Partial<User>): Promise<void>;
}

export const UserRepositoryToken = 'UserRepository';
