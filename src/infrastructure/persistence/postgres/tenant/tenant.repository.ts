import { InjectRepository } from '@mikro-orm/nestjs';
import { Tenant } from 'src/domain/entities/tenant.entity';
import { ITenantRepository } from 'src/domain/repositories/tenant.repository';
import { TenantEntity } from './tenant.entity';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { TenantMapper } from 'src/adapters/mappers/tenant.mapper';

@Injectable()
export class TenantRepository implements ITenantRepository {
  constructor(
    @InjectRepository(TenantEntity)
    private readonly tenantRepository: EntityRepository<TenantEntity>,
  ) {}

  async upsert(domain: Tenant): Promise<TenantEntity> {
    const entity = TenantMapper.fromDomainToEntity(domain);

    return await this.tenantRepository.upsert(entity);
  }

  async findOne(id: string): Promise<TenantEntity | boolean> {
    const tenant = await this.tenantRepository.findOne({ id });

    if (!tenant) return false;

    return tenant;
  }
}
