import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import tenantProviders from './providers/company.providers';
import tenantUsecase from './usecase/tenant.usecase';
import { CompanyController } from 'src/adapters/inbound/controllers/company.controller';
import { CompanyEntity } from 'src/infrastructure/persistence/postgres/company/company.entity';

@Module({
  controllers: [CompanyController],
  imports: [MikroOrmModule.forFeature([CompanyEntity])],
  providers: [...tenantProviders, ...tenantUsecase],
})
export class TenantModule {}
