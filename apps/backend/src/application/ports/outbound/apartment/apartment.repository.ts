import {
  CreateApartmentInput,
  UpdateApartmentInput,
} from '../../inbound/apartment/dto/apartment.dto';

export interface IApartmentRepository {
  create(input: CreateApartmentInput): Promise<boolean>;
  update(input: UpdateApartmentInput): Promise<boolean>;
  findAll(): Promise<Array<any>>;
  findById(id: string): Promise<any>;
}

export const ApartmentRepositoryToken = 'ApartmentRepository';
