import { Inject, Injectable } from '@nestjs/common';
import { IGetCompaniesUC } from 'src/application/ports/inbound/company/get-companies.usecase';
import { CompanyRepositoryToken, ICompanyRepository } from 'src/application/ports/outbound/company/company.repository';
import { CompanyDto } from 'src/application/ports/outbound/company/dto/company.dto';

@Injectable()
export class GetCompaniesUC implements IGetCompaniesUC {
  constructor(
    @Inject(CompanyRepositoryToken)
    private readonly companyRepository: ICompanyRepository,
  ) {}

  async execute(): Promise<Array<CompanyDto>> {
    return await this.companyRepository.findAll();
  }
}
