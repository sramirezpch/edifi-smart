import { TenantEntity } from 'src/infrastructure/persistence/postgres/tenant/tenant.entity';
import { Tenant } from '../entities/tenant.entity';

export interface ITenantRepository {
  upsert(tenant: Tenant): Promise<TenantEntity>;
  findOne(id: string): Promise<TenantEntity | boolean>;
}

export const TenantRepositoryToken = 'TenantRepository';
