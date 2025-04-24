import { UpsertUserInput } from './dto/user.dto';

export interface ICreateUserUC {
  execute(input: UpsertUserInput): Promise<boolean>;
}
