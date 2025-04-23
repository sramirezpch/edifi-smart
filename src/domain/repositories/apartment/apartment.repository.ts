import { ApartmentDetail, Apartment } from './types';
import { Apartment as Domain } from 'src/domain/entities/apartment.entity';


export interface IApartmentRepository {
  insert(domain: Domain): Promise<{ id: string }>;
  findById(id: string): Promise<ApartmentDetail>;
  findAll(): Promise<Array<Apartment>>;
  update(): Promise<void>;
}

export const ApartmentRepositoryToken = 'ApartmentRepository';
