import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Building } from 'src/domain/entities/building.entity';
import { IBuildingRepository } from 'src/domain/repositories/building.repository';
import { BuildingEntity } from './building.entity';
import {
  EntityRepository,
  ref,
  Reference,
  rel,
  wrap,
} from '@mikro-orm/postgresql';
import { BuildingMapper } from 'src/adapters/mappers/building.mapper';
import { CompanyEntity } from '../company/company.entity';

@Injectable()
export class BuildingRepository implements IBuildingRepository {
  constructor(
    @InjectRepository(BuildingEntity)
    private readonly buildingRepository: EntityRepository<BuildingEntity>,
  ) {}

  async insert(domain: Building): Promise<{ id: string }> {
    const entity = BuildingMapper.fromDomainToEntity(domain);

    entity.company = ref(CompanyEntity, domain.company);

    await this.buildingRepository.getEntityManager().persistAndFlush(entity);

    return { id: entity.id };
  }

  async findAll(): Promise<Array<Omit<BuildingEntity, 'company'>>> {
    const entities = await this.buildingRepository.findAll();

    return entities.map((entity) =>
      wrap(entity).serialize({ exclude: ['company'] }),
    );
  }

  async findById(id: string): Promise<BuildingEntity> {
    const building = await this.buildingRepository.findOne(
      { id },
      { populate: ['company'] },
    );

    if (!building) throw new NotFoundException('No building found');

    return building;
  }

  async update(): Promise<void> {
    return await this.buildingRepository.getEntityManager().flush();
  }
}
