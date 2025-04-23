import { ApartmentEntity } from 'src/infrastructure/persistence/postgres/apartment/apartment.entity';
import { Apartment } from '../entities/apartment.entity';

export interface IApartmentRepository {
  insert(domain: Apartment): Promise<{ id: string }>;
  findById(id: string): Promise<ApartmentEntity>;
  findAll(): Promise<Array<Omit<ApartmentEntity, 'building' | 'user'>>>;
  update(): Promise<void>;
}

export const ApartmentRepositoryToken = 'ApartmentRepository';
