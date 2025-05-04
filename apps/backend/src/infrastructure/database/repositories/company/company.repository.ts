import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ICompanyRepository } from 'src/application/ports/outbound/company/company.repository';
import { CompanyEntity } from '../../entities/company.entity';
import { EntityRepository } from '@mikro-orm/postgresql';
import { UpsertCompanyInput } from 'src/application/ports/inbound/company/dto/company.dto';
import {
  CompanyDetailDto,
  CompanyDto,
} from 'src/application/ports/outbound/company/dto/company.dto';

@Injectable()
export class CompanyRepository implements ICompanyRepository {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: EntityRepository<CompanyEntity>,
  ) {}

  async upsert(input: UpsertCompanyInput): Promise<boolean> {
    try {
      const entity = await this.companyRepository.upsert(input, {
        onConflictAction: 'merge',
      });

      return !!entity;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  async findAll(): Promise<Array<CompanyDto>> {
    return await this.companyRepository.findAll({
      populate: ['id', 'name', 'phone'],
    });
  }

  async findById(id: string): Promise<CompanyDetailDto> {
    const company = await this.companyRepository.findOneOrFail(
      { id },
      { populate: ['email', 'id', 'name', 'phone'] },
    );

    return company;
  }
}
