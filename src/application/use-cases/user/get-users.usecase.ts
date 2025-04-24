import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserMapper } from 'src/application/mappers/user.mapper';
import { UpsertUserInput } from 'src/application/ports/inbound/user/dto/user.dto';
import { UserRepositoryToken } from 'src/application/ports/outbound/user/user.repository';
import { User } from 'src/domain/entities/user.entity';
import { UserRepository } from 'src/infrastructure/database/repositories/user/user.repository';

@Injectable()
export class GetUsersUC {
  constructor(
    @Inject(UserRepositoryToken)
    private readonly userRepository: UserRepository,
  ) {}
  async execute(): Promise<Array<User>> {
    try {
      const users = await this.userRepository.findAll();

      return users.map((user) => UserMapper.fromEntityToDomain(user));
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
