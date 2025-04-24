import { UpsertCompanyInput } from '../../inbound/company/dto/company.dto';
import { CompanyDetailDto, CompanyDto } from './dto/company.dto';

export interface ICompanyRepository {
  upsert(input: UpsertCompanyInput): Promise<boolean>;
  findAll(): Promise<Array<CompanyDto>>;
  findById(id: string): Promise<CompanyDetailDto>;
}

export const CompanyRepositoryToken = 'CompanyRepository';
