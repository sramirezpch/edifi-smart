import { InjectRepository } from '@mikro-orm/nestjs';
import { Tenant } from 'src/domain/entities/tenant.entity';
import { ITenantRepository } from 'src/domain/repositories/tenant.repository';
import { TenantEntity } from './tenant.entity';
import { EntityRepository, QueryResult } from '@mikro-orm/postgresql';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TenantMapper } from 'src/adapters/mappers/tenant.mapper';
import { GetTenantByIdDto } from 'src/adapters/inbound/dtos/tenant.dto';
import { GetTenantsParams } from 'src/domain/repositories/interfaces';

@Injectable()
export class TenantRepository implements ITenantRepository {
  constructor(
    @InjectRepository(TenantEntity)
    private readonly tenantRepository: EntityRepository<TenantEntity>,
  ) {}

  async insert(domain: Tenant): Promise<{ id: string }> {
    const entity = TenantMapper.fromDomainToEntity(domain);

    const insertedId = await this.tenantRepository.insert(entity);

    return { id: insertedId };
  }

  async update() {
    return await this.tenantRepository.getEntityManager().flush();
  }

  async findById(id: string): Promise<TenantEntity> {
    const tenant = await this.tenantRepository.findOne({ id });

    if (!tenant) throw new NotFoundException('No tenant found');

    return tenant;
  }

  async findAll(filters: GetTenantsParams): Promise<Array<TenantEntity>> {
    return this.tenantRepository.findAll({ where: filters });
  }
}
