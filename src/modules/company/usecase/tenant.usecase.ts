import { CreateCompanyUseCase } from 'src/application/use-cases/company/create-company.usecase';
import { GetCompanyByIdUseCase } from 'src/application/use-cases/company/get-company-by-id.usecase';
import { GetCompaniesUseCase } from 'src/application/use-cases/company/get-companies.usecase';
import { UpdateCompanyUseCase } from 'src/application/use-cases/company/update-company.usecase';

export default [
  CreateCompanyUseCase,
  GetCompanyByIdUseCase,
  GetCompaniesUseCase,
  UpdateCompanyUseCase,
];
