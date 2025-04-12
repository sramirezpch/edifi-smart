import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import tenantProviders from './providers/tenant.providers';
import tenantUsecase from './usecase/tenant.usecase';
import { TenantController } from 'src/adapters/inbound/controllers/tenant.controller';
import { TenantEntity } from 'src/infrastructure/persistence/postgres/tenant/tenant.entity';

@Module({
  controllers: [TenantController],
  imports: [MikroOrmModule.forFeature([TenantEntity])],
  providers: [...tenantProviders, ...tenantUsecase],
})
export class TenantModule {}
