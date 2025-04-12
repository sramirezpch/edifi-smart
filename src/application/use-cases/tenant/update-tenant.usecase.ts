import { wrap } from '@mikro-orm/core';
import { Inject, Injectable } from '@nestjs/common';
import { UpdateTenantDto } from 'src/adapters/inbound/dtos/tenant.dto';
import { TenantRepositoryToken } from 'src/domain/repositories/tenant.repository';
import { TenantRepository } from 'src/infrastructure/persistence/postgres/tenant/tenant.repository';

@Injectable()
export class UpdateTenantUseCase {
  constructor(
    @Inject(TenantRepositoryToken)
    private readonly tenantRepository: TenantRepository,
  ) {}

  async execute(id: string, dto: UpdateTenantDto) {
    const entity = await this.tenantRepository.findById(id);

    wrap(entity).assign(dto);

    this.tenantRepository.update();
  }
}
