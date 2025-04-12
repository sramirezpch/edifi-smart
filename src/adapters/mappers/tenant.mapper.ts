import { ITenant } from 'src/application/interfaces';
import { Tenant } from 'src/domain/entities/tenant.entity';
import { TenantEntity } from 'src/infrastructure/persistence/postgres/tenant/tenant.entity';

export class TenantMapper {
  static fromEntityToDomain(entity: TenantEntity): Tenant {
    return new Tenant(entity);
  }

  static fromDomainToEntity(domain: Tenant): TenantEntity {
    return Object.assign(new TenantEntity(), domain.toObject());
  }

  static fromInputToDomain(input: ITenant): Tenant {
    return new Tenant(input);
  }
}
