import { Provider } from "@nestjs/common";
import { CompanyRepositoryToken } from "src/domain/repositories/company.repository";
import { CompanyRepository } from "src/infrastructure/persistence/postgres/company/company.repository";

export const tenantRepositoryProvider: Provider = { 
    provide: CompanyRepositoryToken,
    useClass: CompanyRepository
}

export default [tenantRepositoryProvider];