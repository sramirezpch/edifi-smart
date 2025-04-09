import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Module } from '@nestjs/common';
import { TenantEntity } from './infrastructure/persistence/postgres/tenant/tenant.entity';
import { TenantModule } from './modules/tenant/tenant.module';
@Module({
  imports: [MikroOrmModule.forRoot({
    user: 'postgres',
    password: 'postgres',
    port: 5432,
    dbName: 'edifismart',
    host: 'db',
    driver: PostgreSqlDriver,
    autoLoadEntities: true,
  }), TenantModule],
})
export class AppModule {}
