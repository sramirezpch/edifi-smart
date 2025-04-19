import { Inject, Injectable } from '@nestjs/common';
import { CompanyRepositoryToken } from 'src/domain/repositories/company.repository';
import { CompanyRepository } from 'src/infrastructure/persistence/postgres/company/company.repository';

@Injectable()
export class GetCompanyByIdUseCase {
  constructor(
    @Inject(CompanyRepositoryToken)
    private readonly companyRepository: CompanyRepository,
  ) {}

  async execute(id: string) {
    return await this.companyRepository.findById(id);
  }
}
