import { Inject, Injectable, NotImplementedException } from '@nestjs/common';
import { IGetCompanyUC } from 'src/application/ports/inbound/company/get-company.usecase';
import { CompanyRepositoryToken, ICompanyRepository } from 'src/application/ports/outbound/company/company.repository';
import {
  CompanyDetailDto,
  CompanyDto,
} from 'src/application/ports/outbound/company/dto/company.dto';

@Injectable()
export class GetCompanyUC implements IGetCompanyUC {
  constructor(
    @Inject(CompanyRepositoryToken)
    private readonly companyRepository: ICompanyRepository,
  ) {}

  async execute(id: string): Promise<CompanyDetailDto> {
    return await this.companyRepository.findById(id);
  }
}
