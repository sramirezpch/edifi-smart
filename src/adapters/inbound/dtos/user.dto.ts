import { UserRole } from 'src/domain/enum';

export type CreateUserDto = {
  name: string;
  lastName: string;
  email: string;
  identificationNumber: string;
  role?: UserRole;
  password: string;
  confirmPassword: string;
};

export type GetUsersQueryDto = {
  role?: UserRole;
};

export type UpdateUserDto = Omit<Partial<CreateUserDto>, 'confirmPassword'>;
