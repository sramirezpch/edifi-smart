import { wrap } from '@mikro-orm/core';
import { Inject, Injectable } from '@nestjs/common';
import { UpdateApartmentDto } from 'src/adapters/inbound/dtos/apartment.dto';
import { ApartmentRepositoryToken } from 'src/domain/repositories/apartment.repository';
import { ApartmentRepository } from 'src/infrastructure/persistence/postgres/apartment/apartment.repository';

@Injectable()
export class UpdateApartmentUseCase {
  constructor(
    @Inject(ApartmentRepositoryToken)
    private readonly apartmentRepository: ApartmentRepository,
  ) {}

  async execute(id: string, dto: UpdateApartmentDto) {
    const entity = await this.apartmentRepository.findById(id);

    wrap(entity).assign(
      {
        apartmentNumber: dto.apartmentNumber,
        building: dto.buildingId,
        user: dto.userId,
        towerNumber: dto.towerNumber,
      },
      { merge: true },
    );

    await this.apartmentRepository.update();
  }
}
