import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, wrap } from '@mikro-orm/postgresql';
import {
  CreateApartmentInput,
  UpdateApartmentInput,
} from 'src/application/ports/inbound/apartment/dto/apartment.dto';
import { IApartmentRepository } from 'src/application/ports/outbound/apartment/apartment.repository';
import { ApartmentEntity } from '../../entities/apartment.entity';

@Injectable()
export class ApartmentRepository implements IApartmentRepository {
  constructor(
    @InjectRepository(ApartmentEntity)
    private readonly apartmentRepository: EntityRepository<ApartmentEntity>,
  ) {}

  async create(input: CreateApartmentInput): Promise<boolean> {
    const { userId, buildingId, ...rest } = input;

    const entity = this.apartmentRepository.create({
      ...rest,
      user: userId,
      building: buildingId,
    });

    await this.apartmentRepository.getEntityManager().persistAndFlush(entity);

    return !!entity;
  }

  async findAll() {
    const apartments = await this.apartmentRepository.findAll();

    return apartments;
  }

  async findById(id: string) {
    const apartment = await this.apartmentRepository.findOneOrFail(
      { id },
      { populate: ['user', 'building'] },
    );

    return apartment;
  }

  async update(input: UpdateApartmentInput) {
    const { id, ...rest } = input;

    const entity = await this.apartmentRepository.findOneOrFail({ id });

    wrap(entity).assign({
      ...rest,
      ...(rest.userId && { user: rest.userId }),
      ...(rest.buildingId && { building: rest.buildingId }),
    });

    await this.apartmentRepository.getEntityManager().flush();

    return true;
  }
}
