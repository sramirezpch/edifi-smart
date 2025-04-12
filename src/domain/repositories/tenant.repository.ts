import { TenantEntity } from 'src/infrastructure/persistence/postgres/tenant/tenant.entity';
import { Tenant } from '../entities/tenant.entity';
import { QueryResult } from '@mikro-orm/core';
import { GetTenantsParams } from './interfaces';

export interface ITenantRepository {
  insert(domain: Tenant): Promise<{ id: string }>;
  findById(id: string): Promise<TenantEntity>;
  findAll(filters: GetTenantsParams): Promise<Array<TenantEntity>>;
  update(domain: Partial<Tenant>): any;
}

export const TenantRepositoryToken = 'TenantRepository';
