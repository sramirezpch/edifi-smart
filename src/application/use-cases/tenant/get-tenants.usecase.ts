import { Inject, Injectable } from '@nestjs/common';
import { GetTenantsQueryDto } from 'src/adapters/inbound/dtos/tenant.dto';
import { TenantRepositoryToken } from 'src/domain/repositories/tenant.repository';
import { TenantRepository } from 'src/infrastructure/persistence/postgres/tenant/tenant.repository';

@Injectable()
export class GetTenantsUseCase {
  constructor(
    @Inject(TenantRepositoryToken)
    private readonly tenantRepository: TenantRepository,
  ) {}

  async execute(filters: GetTenantsQueryDto) {
    return this.tenantRepository.findAll(filters);
  }
}
