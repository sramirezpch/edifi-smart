import { Company } from 'src/domain/entities/company.entity';
import { CompanyEntity } from 'src/infrastructure/database/entities/company.entity';

export class CompanyMapper {
  static fromEntityToDomain(entity: CompanyEntity) {
    return new Company(entity);
  }
}
