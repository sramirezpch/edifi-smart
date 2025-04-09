import { Inject, Injectable } from '@nestjs/common';
import { CreateTenantInput } from 'src/application/interfaces/tenant/create-tenant.input';
import { Tenant } from 'src/domain/entities/tenant.entity';
import { TenantRepositoryToken } from 'src/domain/repositories/tenant.repository';
import { TenantRepository } from 'src/infrastructure/persistence/postgres/tenant/tenant.repository';

@Injectable()
export class CreateTenantUseCase {
  constructor(
    @Inject(TenantRepositoryToken)
    private readonly tenantRepository: TenantRepository,
  ) {}

  async execute(input: CreateTenantInput) {
    const domain = new Tenant({ ...input, enabled: input.enabled ?? true });

    return await this.tenantRepository.upsert(domain);
  }
}
