import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { CompanyEntity } from '../entities/company.entity';
import { CompanyRepository } from './company/company.repository';
import { UserRepository } from './user/user.repository';
import { UserEntity } from '../entities/user.entity';
import { CompanyRepositoryToken } from 'src/application/ports/outbound/company/company.repository';
import { UserRepositoryToken } from 'src/application/ports/outbound/user/user.repository';
import { BuildingRepositoryToken } from 'src/application/ports/outbound/building/building.repository';
import { BuildingRepository } from './building/building.repository';
import { BuildingEntity } from '../entities/building.entity';
import { ApartmentRepositoryToken } from 'src/application/ports/outbound/apartment/apartment.repository';
import { ApartmentRepository } from './apartment/apartment.repository';
import { ApartmentEntity } from '../entities/apartment.entity';

@Module({
  imports: [
    DatabaseModule,
    MikroOrmModule.forFeature({
      entities: [CompanyEntity, UserEntity, BuildingEntity, ApartmentEntity],
    }),
  ],
  providers: [
    { provide: CompanyRepositoryToken, useClass: CompanyRepository },
    { provide: UserRepositoryToken, useClass: UserRepository },
    { provide: BuildingRepositoryToken, useClass: BuildingRepository },
    { provide: ApartmentRepositoryToken, useClass: ApartmentRepository },
  ],
  exports: [
    CompanyRepositoryToken,
    UserRepositoryToken,
    BuildingRepositoryToken,
    ApartmentRepositoryToken,
  ],
})
export class RepositoriesModule {}
