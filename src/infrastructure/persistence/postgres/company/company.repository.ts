import { InjectRepository } from '@mikro-orm/nestjs';
import { Company } from 'src/domain/entities/company.entity';
import { ICompanyRepository } from 'src/domain/repositories/company.repository';
import { CompanyEntity } from './company.entity';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CompanyMapper } from 'src/adapters/mappers/company.mapper';
import { GetCompanyParams } from 'src/domain/repositories/interfaces';

@Injectable()
export class CompanyRepository implements ICompanyRepository {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: EntityRepository<CompanyEntity>,
  ) {}

  async insert(domain: Company): Promise<{ id: string }> {
    const entity = CompanyMapper.fromDomainToEntity(domain);

    const insertedId = await this.companyRepository.insert(entity);

    return { id: insertedId };
  }

  async update() {
    return await this.companyRepository.getEntityManager().flush();
  }

  async findById(id: string): Promise<CompanyEntity> {
    const tenant = await this.companyRepository.findOne({ id });

    if (!tenant) throw new NotFoundException('No tenant found');

    return tenant;
  }

  async findAll(filters: GetCompanyParams): Promise<Array<CompanyEntity>> {
    return this.companyRepository.findAll({ where: filters });
  }
}
