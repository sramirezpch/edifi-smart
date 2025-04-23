import { UserRole } from 'src/domain/enum';

export type GetUsersVO = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  role: UserRole;
};
