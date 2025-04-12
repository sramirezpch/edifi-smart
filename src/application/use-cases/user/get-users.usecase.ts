import { wrap } from '@mikro-orm/core';
import { Inject, Injectable } from '@nestjs/common';
import { GetUsersQueryDto } from 'src/adapters/inbound/dtos/user.dto';
import { UserMapper } from 'src/adapters/mappers/user.mapper';
import { UserRepositoryToken } from 'src/domain/repositories/user.repository';
import { UserEntity } from 'src/infrastructure/persistence/postgres/user/user.entity';
import { UserRepository } from 'src/infrastructure/persistence/postgres/user/user.repository';

@Injectable()
export class GetUsersUseCase {
  constructor(
    @Inject(UserRepositoryToken)
    private readonly userRepository: UserRepository,
  ) {}

  async execute(input: GetUsersQueryDto) {
    try {
      const users = await this.userRepository.findAll(input);

      return users.map((user: UserEntity) => {
        const serialized = wrap(user).toJSON();

        return UserMapper.fromEntityToDomain(serialized);
      });
    } catch (error) {
      console.error(error.name);
      throw error;
    }
  }
}
