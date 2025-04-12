import { CreateTenantUseCase } from 'src/application/use-cases/tenant/create-tenant.usecase';
import { GetTenantByIdUseCase } from 'src/application/use-cases/tenant/get-tenant-by-id.usecase';
import { GetTenantsUseCase } from 'src/application/use-cases/tenant/get-tenants.usecase';
import { UpdateTenantUseCase } from 'src/application/use-cases/tenant/update-tenant.usecase';

export default [
  CreateTenantUseCase,
  GetTenantByIdUseCase,
  GetTenantsUseCase,
  UpdateTenantUseCase,
];
