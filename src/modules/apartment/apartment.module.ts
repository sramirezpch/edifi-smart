import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ApartmentController } from 'src/adapters/inbound/controllers/apartment.controller';
import { ApartmentEntity } from 'src/infrastructure/persistence/postgres/apartment/apartment.entity';
import apartmentProviders from './providers/apartment.providers';

@Module({
  controllers: [ApartmentController],
  imports: [MikroOrmModule.forFeature([ApartmentEntity])],
  providers: [...apartmentProviders],
})
export class ApartmentModule {}
