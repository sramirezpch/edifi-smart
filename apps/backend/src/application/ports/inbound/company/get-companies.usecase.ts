import { CompanyDto } from '../../outbound/company/dto/company.dto';

export interface IGetCompaniesUC {
  execute(): Promise<Array<CompanyDto>>;
}
