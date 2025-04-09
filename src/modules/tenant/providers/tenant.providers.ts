import { Provider } from "@nestjs/common";
import { TenantRepositoryToken } from "src/domain/repositories/tenant.repository";
import { TenantRepository } from "src/infrastructure/persistence/postgres/tenant/tenant.repository";

export const tenantRepositoryProvider: Provider = { 
    provide: TenantRepositoryToken,
    useClass: TenantRepository
}

export default [tenantRepositoryProvider];