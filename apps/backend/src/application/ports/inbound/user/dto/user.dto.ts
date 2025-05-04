import { UserRole } from 'src/domain/enum';

export type UpsertUserInput = Partial<{
  id?: string;
  name: string;
  lastname: string;
  email: string;
  idNumber: string;
  idType: string;
  role: UserRole;
}>;
