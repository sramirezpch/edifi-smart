import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import {
  CreateBuildingInput,
  UpdateBuildingInput,
} from 'src/application/ports/inbound/building/dto/building.dto';
import { IBuildingRepository } from 'src/application/ports/outbound/building/building.repository';
import { BuildingEntity } from '../../entities/building.entity';
import { EntityRepository, wrap } from '@mikro-orm/postgresql';

@Injectable()
export class BuildingRepository implements IBuildingRepository {
  constructor(
    @InjectRepository(BuildingEntity)
    private readonly buildingRepository: EntityRepository<BuildingEntity>,
  ) {}

  async insert(input: CreateBuildingInput): Promise<BuildingEntity> {
    const { companyId, ...rest } = input;
    const entity = this.buildingRepository.create({
      ...rest,
      company: companyId,
    });

    await this.buildingRepository.getEntityManager().persistAndFlush(entity);

    return entity;
  }

  async findAll(): Promise<Array<BuildingEntity>> {
    const buildings = await this.buildingRepository.findAll();

    return buildings;
  }

  async findById(id: string): Promise<BuildingEntity> {
    const building = await this.buildingRepository.findOneOrFail(
      { id },
      {
        populate: ['company'],
      },
    );

    return building;
  }

  async update({ id, ...rest }: UpdateBuildingInput): Promise<BuildingEntity> {
    const entity = await this.buildingRepository.findOneOrFail({ id });

    wrap(entity).assign({
      ...rest,
      ...(rest.companyId && { company: rest.companyId }),
    });

    await this.buildingRepository.getEntityManager().flush();

    return entity;
  }
}
