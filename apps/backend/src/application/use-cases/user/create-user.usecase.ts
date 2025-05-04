import { Inject, Injectable } from '@nestjs/common';
import { ICreateUserUC } from 'src/application/ports/inbound/user/create-user.usecase';
import { UpsertUserInput } from 'src/application/ports/inbound/user/dto/user.dto';
import { UserRepositoryToken } from 'src/application/ports/outbound/user/user.repository';
import { UserRepository } from 'src/infrastructure/database/repositories/user/user.repository';

@Injectable()
export class CreateUserUC implements ICreateUserUC {
  constructor(
    @Inject(UserRepositoryToken)
    private readonly userRepository: UserRepository,
  ) {}
  async execute(input: UpsertUserInput): Promise<boolean> {
    return await this.userRepository.upsert(input);
  }
}
