import { Resolver, Query, Args, Mutation, ID } from '@nestjs/graphql';
import { Company, MinimalCompany } from '../models/company';
import { GetCompaniesUC } from 'src/application/use-cases/company/get-companies.usecase';
import { Inject } from '@nestjs/common';
import { GetCompanyUC } from 'src/application/use-cases/company/get-company.usecase';
import { CreateCompanyUC } from 'src/application/use-cases/company/create-company.usecase';
import { UpsertCompanyInput } from '../inputs/company/create-company.input';

@Resolver()
export class CompanyResolver {
  constructor(
    @Inject() private readonly getCompaniesUseCase: GetCompaniesUC,
    @Inject() private readonly getCompanyUseCase: GetCompanyUC,
    @Inject() private readonly createCompanyUseCase: CreateCompanyUC,
  ) {}

  @Query(() => [MinimalCompany], { name: 'companies' })
  async companies(): Promise<MinimalCompany[]> {
    const companies = await this.getCompaniesUseCase.execute();

    return companies;
  }

  @Query(() => Company, { name: 'companyById' })
  async companyById(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Company> {
    const company = await this.getCompanyUseCase.execute(id);

    return company;
  }

  @Mutation(() => Boolean, { name: 'createCompany' })
  async createCompany(
    @Args('input', { type: () => UpsertCompanyInput })
    input: UpsertCompanyInput,
  ): Promise<Boolean> {
    return await this.createCompanyUseCase.execute(input);
  }
}
