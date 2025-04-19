import { Module } from '@nestjs/common';
import { BuildingController } from 'src/adapters/inbound/controllers/building.controller';
import buildingProviders from './providers/building.providers';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { BuildingEntity } from 'src/infrastructure/persistence/postgres/building/building.entity';
import { CompanyRepository } from 'src/infrastructure/persistence/postgres/company/company.repository';
import { CompanyModule } from '../company/company.module';
import { CompanyEntity } from 'src/infrastructure/persistence/postgres/company/company.entity';

@Module({
  controllers: [BuildingController],
  imports: [
    MikroOrmModule.forFeature([BuildingEntity, CompanyEntity]),
    CompanyModule,
  ],
  providers: [...buildingProviders, CompanyRepository],
})
export class BuildingModule {}
