import { UpsertUserInput } from '../../inbound/user/dto/user.dto';

export interface IUserRepository {
  upsert(input: UpsertUserInput): Promise<boolean>;
}

export const UserRepositoryToken = 'UserRepository';
