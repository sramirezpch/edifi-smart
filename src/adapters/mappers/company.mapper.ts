import { ICompany } from 'src/application/interfaces';
import { Company } from 'src/domain/entities/company.entity';
import { CompanyEntity } from 'src/infrastructure/persistence/postgres/company/company.entity';

export class CompanyMapper {
  static fromEntityToDomain(entity: CompanyEntity): Company {
    return new Company(entity);
  }

  static fromDomainToEntity(domain: Company): CompanyEntity {
    return Object.assign(new CompanyEntity(), domain.toObject());
  }
}
