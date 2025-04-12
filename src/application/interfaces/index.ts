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

export interface ITenant {
  id?: string;
  address: string;
  secondaryAddress?: string;
  locality: string;
  adminAreaLevel1: string;
  adminAreaLevel2?: string;
  countryCode: string;
  postalCode?: string;
  enabled?: boolean;
}
