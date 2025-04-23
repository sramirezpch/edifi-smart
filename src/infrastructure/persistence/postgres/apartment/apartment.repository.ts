import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IApartmentRepository } from 'src/domain/repositories/apartment/apartment.repository';
import { ApartmentEntity } from './apartment.entity';
import { EntityRepository, ref } from '@mikro-orm/postgresql';
import { Apartment as Domain } from 'src/domain/entities/apartment.entity';
import { ApartmentMapper } from 'src/adapters/mappers/apartment.mapper';
import { BuildingEntity } from '../building/building.entity';
import { UserEntity } from '../user/user.entity';
import {
  ApartmentDetail,
  ApartmentDetailFields,
  ApartmentFields,
  Apartment,
} from 'src/domain/repositories/apartment/types';

@Injectable()
export class ApartmentRepository implements IApartmentRepository {
  constructor(
    @InjectRepository(ApartmentEntity)
    private readonly apartmentRepository: EntityRepository<ApartmentEntity>,
  ) {}

  async insert(domain: Domain): Promise<{ id: string }> {
    const entity = ApartmentMapper.fromDomainToEntity(domain);

    entity.building = ref(BuildingEntity, domain.buildingId);
    entity.user = ref(UserEntity, domain.userId);

    await this.apartmentRepository.getEntityManager().persistAndFlush(entity);

    return { id: entity.id };
  }

  async findById(id: string): Promise<ApartmentDetail> {
    const entity = await this.apartmentRepository.findOne<
      'apartment',
      ApartmentDetailFields,
      ApartmentDetailFields
    >(id, {
      populate: ['building', 'user'],
      fields: ['*', 'user.*', 'building.*', 'building.company.*'],
      exclude: [
        'user.apartments',
        'user.password',
        'user.role',
        'building.apartments',
        'building.commonAreas',
        'building.company.enabled',
      ],
    });

    if (!entity) throw new NotFoundException('No apartment found');

    const building = entity.building.get();
    const company = building.company.get();
    const user = entity.user.get();

    return {
      ...entity,
      user,
      building: {
        ...building,
        company,
      },
    };
  }

  async findAll(): Promise<Apartment[]> {
    const apartments = await this.apartmentRepository.findAll<
      'apartment',
      ApartmentFields,
      ApartmentFields
    >({
      populate: ['user'],
      fields: ['*', 'user.*'],
      exclude: ['user.password', 'user.role'],
    });

    return apartments.map((apartment) => {
      const user = apartment.user.get();

      return { ...apartment, user };
    });
  }

  async update(): Promise<void> {
    return await this.apartmentRepository.getEntityManager().flush();
  }
}
