import { UpsertCompanyInput } from './dto/company.dto';

export interface IUpdateCompanyUC {
  execute(company: UpsertCompanyInput): Promise<boolean>;
}
