import { CreateUserUseCase } from 'src/application/use-cases/user/create-user.usecase';
import { GetUserUseCase } from 'src/application/use-cases/user/get-user.usecase';
import { GetUsersUseCase } from 'src/application/use-cases/user/get-users.usecase';
import { UpdateUserUseCase } from 'src/application/use-cases/user/update-user.usecase';

export default [
  CreateUserUseCase,
  GetUsersUseCase,
  UpdateUserUseCase,
  GetUserUseCase,
];
