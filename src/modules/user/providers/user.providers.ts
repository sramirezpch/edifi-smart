import { Provider } from '@nestjs/common';
import { PasswordHasherToken } from 'src/application/ports/password-hasher.port';
import { UserRepositoryToken } from 'src/domain/repositories/user.repository';
import { UserRepository } from 'src/infrastructure/persistence/postgres/user/user.repository';
import { HasherService } from 'src/infrastructure/providers/hasher.service';

export const userRepositoryProvider: Provider = {
  provide: UserRepositoryToken,
  useClass: UserRepository,
};

export const hasherServiceProvider: Provider = {
  provide: PasswordHasherToken,
  useClass: HasherService,
};

export default [userRepositoryProvider, hasherServiceProvider];
