import { QueryResult } from '@mikro-orm/core';
import { CompanyEntity } from 'src/infrastructure/persistence/postgres/company/company.entity';
import { Company } from '../entities/company.entity';
import { GetCompanyParams } from './interfaces';

export interface ICompanyRepository {
  insert(domain: Company): Promise<{ id: string }>;
  findById(id: string): Promise<CompanyEntity>;
  findAll(filters: GetCompanyParams): Promise<Array<CompanyEntity>>;
  update(domain: Partial<Company>): any;
}

export const CompanyRepositoryToken = 'CompanyRepository';
