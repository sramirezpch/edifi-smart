import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { TenantEntity } from 'src/infrastructure/persistence/postgres/tenant/tenant.entity';
import tenantProviders from './providers/tenant.providers';
import tenantUsecase from './usecase/tenant.usecase';
import { TenantController } from 'src/adapters/inbound/controllers/tenant.controller';

@Module({
  controllers: [TenantController],
  imports: [MikroOrmModule.forFeature([TenantEntity])],
  providers: [...tenantProviders, ...tenantUsecase],
})
export class TenantModule {}
