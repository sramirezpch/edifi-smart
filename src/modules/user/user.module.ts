import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { UserEntity } from 'src/infrastructure/persistence/postgres/user/user.entity';
import userProviders from './providers/user.providers';
import userUsecase from './usecase/user.usecase';
import { UserController } from 'src/adapters/inbound/controllers/user.controller';

@Module({
  controllers: [UserController],
  imports: [MikroOrmModule.forFeature([UserEntity])],
  providers: [...userProviders, ...userUsecase]
})
export class UserModule {}
