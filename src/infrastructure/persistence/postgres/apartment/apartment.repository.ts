import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IApartmentRepository } from 'src/domain/repositories/apartment.repository';
import { ApartmentEntity } from './apartment.entity';
import { EntityRepository, ref } from '@mikro-orm/postgresql';
import { Apartment } from 'src/domain/entities/apartment.entity';
import { ApartmentMapper } from 'src/adapters/mappers/apartment.mapper';
import { BuildingEntity } from '../building/building.entity';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class ApartmentRepository implements IApartmentRepository {
  constructor(
    @InjectRepository(ApartmentEntity)
    private readonly apartmentRepository: EntityRepository<ApartmentEntity>,
  ) {}

  async insert(domain: Apartment): Promise<{ id: string }> {
    const entity = ApartmentMapper.fromDomainToEntity(domain);

    entity.building = ref(BuildingEntity, domain.buildingId);
    entity.user = ref(UserEntity, domain.userId);

    await this.apartmentRepository.getEntityManager().persistAndFlush(entity);

    return { id: entity.id };
  }

  async findById(id: string): Promise<ApartmentEntity> {
    const entity = await this.apartmentRepository.findOne(id);

    if (!entity) throw new NotFoundException('No apartment found');

    return entity;
  }

  async findAll(): Promise<Array<Omit<ApartmentEntity, 'building' | 'user'>>> {
    return await this.apartmentRepository.findAll({
    });
  }

  async update(): Promise<void> {
    return await this.apartmentRepository.getEntityManager().flush();
  }
}
