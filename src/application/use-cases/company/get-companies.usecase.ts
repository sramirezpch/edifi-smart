import { Inject, Injectable } from '@nestjs/common';
import { GetCompaniesQueryDto } from 'src/adapters/inbound/dtos/company.dto';
import { CompanyRepositoryToken } from 'src/domain/repositories/company.repository';
import { CompanyRepository } from 'src/infrastructure/persistence/postgres/company/company.repository';

@Injectable()
export class GetCompaniesUseCase {
  constructor(
    @Inject(CompanyRepositoryToken)
    private readonly tenantRepository: CompanyRepository,
  ) {}

  async execute(filters: GetCompaniesQueryDto) {
    return this.tenantRepository.findAll(filters);
  }
}
