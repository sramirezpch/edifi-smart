import { Fields } from 'src/infrastructure/persistence/postgres/types';

export type BuildingGetAllReturnType = {
  id: string;
  name: string;
  city: string;
  address: string;
  district: string;
  countryCode: string;
  company: {
    id: string;
    name: string;
    phone: string;
  };
};

export type BuildingGetAllReturnTypeFields = Fields<BuildingGetAllReturnType>;

export type BuildingGetByIdReturnType = {
  id: string;
  name: string;
  city: string;
  district: string;
  countryCode: string;
  postalCode: string;
  company: {
    id: string;
    name: string;
    phone: string;
    email: string;
  };
};

export type BuildingGetByIdReturnTypeFields = Fields<BuildingGetByIdReturnType>;
