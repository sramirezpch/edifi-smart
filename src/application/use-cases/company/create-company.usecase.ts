import { Inject, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from 'src/adapters/inbound/dtos/company.dto';
import { Company } from 'src/domain/entities/company.entity';
import { CompanyRepositoryToken } from 'src/domain/repositories/company.repository';
import { CompanyRepository } from 'src/infrastructure/persistence/postgres/company/company.repository';

@Injectable()
export class CreateCompanyUseCase {
  constructor(
    @Inject(CompanyRepositoryToken)
    private readonly companyRepository: CompanyRepository,
  ) {}

  async execute(dto: CreateCompanyDto) {
    try {
      const domain = new Company({
        ...dto,
        enabled: dto.enabled ?? true,
      });

      return await this.companyRepository.insert(domain);
    } catch (error) {
      console.log(error);
    }
  }
}
