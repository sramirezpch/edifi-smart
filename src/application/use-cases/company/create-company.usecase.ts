import { Inject, Injectable } from '@nestjs/common';
import { ICreateCompanyUC } from 'src/application/ports/inbound/company/create-company.usecase';
import { UpsertCompanyInput } from 'src/application/ports/inbound/company/dto/company.dto';
import { CompanyRepositoryToken, ICompanyRepository } from 'src/application/ports/outbound/company/company.repository';

@Injectable()
export class CreateCompanyUC implements ICreateCompanyUC {
  constructor(
    @Inject(CompanyRepositoryToken)
    private readonly companyRepository: ICompanyRepository,
  ) {}

  async execute(input: UpsertCompanyInput): Promise<boolean> {
    return await this.companyRepository.upsert(input);
  }
}
