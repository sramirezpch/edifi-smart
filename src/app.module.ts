import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Module } from '@nestjs/common';
import { CompanyModule } from './modules/company/company.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BuildingModule } from './modules/building/building.module';
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
    CompanyModule,
    UserModule,
    BuildingModule,
  ],
})
export class AppModule {}
