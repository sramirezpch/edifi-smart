import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Module } from '@nestjs/common';
import { TenantModule } from './modules/tenant/tenant.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MikroOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        user: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        port: 5432,
        dbName: config.get<string>('DB_NAME'),
        host: config.get<string>('DB_HOST'),
        driver: PostgreSqlDriver,
        autoLoadEntities: true,
      }),
      driver: PostgreSqlDriver,
    }),
    TenantModule,
    UserModule,
  ],
})
export class AppModule {}
