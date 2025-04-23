import { wrap } from '@mikro-orm/core';
import { Inject, Injectable } from '@nestjs/common';
import { GetUsersQueryDto } from 'src/adapters/inbound/dtos/user.dto';
import { UserMapper } from 'src/adapters/mappers/user.mapper';
import { GetUsersVO } from 'src/adapters/outbound/value-objects/user.vo';
import { UserRepositoryToken } from 'src/domain/repositories/user.repository';
import { UserRepository } from 'src/infrastructure/persistence/postgres/user/user.repository';

@Injectable()
export class GetUsersUseCase {
  constructor(
    @Inject(UserRepositoryToken)
    private readonly userRepository: UserRepository,
  ) {}

  async execute(input: GetUsersQueryDto): Promise<Array<GetUsersVO>> {
    try {
      const users = await this.userRepository.findAll(input);

      return users.map((user) => ({
        email: user.email,
        id: user.id,
        lastName: user.lastName,
        name: user.name,
        role: user.role,
      }));
    } catch (error) {
      console.error(error.name);
      throw error;
    }
  }
}
