import { UserRole } from 'src/domain/enum';

export interface IUser {
  id?: string;
  name: string;
  lastName: string;
  email: string;
  identificationNumber: string;
  role: UserRole;
  password?: string;
  apartmentIds?: Array<string>;
}

export interface ICompany {
  id?: string;
  name: string;
  phone: string;
  email: string;
  enabled?: boolean;
}

export interface IBuilding {
  id?: string;
  name: string;
  address: string;
  district: string;
  city: string;
  countryCode: string;
  postalCode: string;
  company: string;
}

export interface IApartment {
  id?: string;
  userId: string;
  apartmentNumber: string;
  towerNumber: string;
  buildingId: string;
}

export interface ICommonArea { 
  id?: string;
  name: string;
  capacity: string;
  enabled: boolean;
  buildingId: string;
}