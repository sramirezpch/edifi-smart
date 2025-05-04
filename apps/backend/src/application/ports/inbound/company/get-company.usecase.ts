import { CompanyDetailDto } from '../../outbound/company/dto/company.dto';

export interface IGetCompanyUC {
  execute(id: string): Promise<CompanyDetailDto>;
}
