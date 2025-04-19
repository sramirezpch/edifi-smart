import { wrap } from '@mikro-orm/core';
import { Inject, Injectable } from '@nestjs/common';
import { UpdateCompanyDto } from 'src/adapters/inbound/dtos/company.dto';
import { CompanyRepositoryToken } from 'src/domain/repositories/company.repository';
import { CompanyRepository } from 'src/infrastructure/persistence/postgres/company/company.repository';

@Injectable()
export class UpdateCompanyUseCase {
  constructor(
    @Inject(CompanyRepositoryToken)
    private readonly tenantRepository: CompanyRepository,
  ) {}

  async execute(id: string, dto: UpdateCompanyDto) {
    const entity = await this.tenantRepository.findById(id);

    wrap(entity).assign(dto);

    this.tenantRepository.update();
  }
}
