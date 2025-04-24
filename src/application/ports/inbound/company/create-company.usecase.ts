import { UpsertCompanyInput } from './dto/company.dto';

export interface ICreateCompanyUC {
  execute(company: UpsertCompanyInput): Promise<boolean>;
}
