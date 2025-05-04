import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CompanyEntity } from './entities/company.entity';
import { ConfigService } from '@nestjs/config';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

@Module({
  imports: [
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
  ],
})
export class DatabaseModule {}
