import { CreateApartmentUC } from './create-apartments.usecase';
import { GetApartmentUC } from './get-apartment.usecase';
import { GetApartmentsUC } from './get-apartments.usecase';
import { UpdateApartmentUC } from './update-apartment.usecase';

export default [
  CreateApartmentUC,
  UpdateApartmentUC,
  GetApartmentUC,
  GetApartmentsUC,
];
