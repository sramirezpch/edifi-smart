import { Inject, Injectable } from '@nestjs/common';
import { GetTenantByIdInput } from 'src/application/interfaces/tenant/get-tenant-by-id.input';
import { TenantRepositoryToken } from 'src/domain/repositories/tenant.repository';
import { TenantRepository } from 'src/infrastructure/persistence/postgres/tenant/tenant.repository';

@Injectable()
export class GetTenantByIdUseCase {
  constructor(
    @Inject(TenantRepositoryToken)
    private readonly tenantRepository: TenantRepository,
  ) {}

  async execute(input: GetTenantByIdInput) {
    return await this.tenantRepository.findOne(input.id);
  }
}
