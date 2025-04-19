import { UserRole } from 'src/domain/enum';

export interface IUser {
  id?: string;
  name: string;
  lastName: string;
  email: string;
  identificationNumber: string;
  role: UserRole;
  password: string;
}

export interface ICompany {
  id?: string;
  name: string;
  phone: string;
  email: string;
  enabled?: boolean;
}
