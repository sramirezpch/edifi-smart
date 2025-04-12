import { Inject, Injectable } from '@nestjs/common';
import { CreateTenantDto } from 'src/adapters/inbound/dtos/tenant.dto';
import { Tenant } from 'src/domain/entities/tenant.entity';
import { TenantRepositoryToken } from 'src/domain/repositories/tenant.repository';
import { TenantRepository } from 'src/infrastructure/persistence/postgres/tenant/tenant.repository';

@Injectable()
export class CreateTenantUseCase {
  constructor(
    @Inject(TenantRepositoryToken)
    private readonly tenantRepository: TenantRepository,
  ) {}

  async execute(dto: CreateTenantDto) {
    try {
      const domain = new Tenant({
        ...dto,
        enabled: dto.enabled ?? true,
      });

      return await this.tenantRepository.insert(domain);
    } catch (error) {
      console.log(error);
    }
  }
}
