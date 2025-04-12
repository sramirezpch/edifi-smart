import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryToken } from 'src/domain/repositories/user.repository';
import { UserRepository } from 'src/infrastructure/persistence/postgres/user/user.repository';

@Injectable()
export class GetUserUseCase {
  constructor(
    @Inject(UserRepositoryToken)
    private readonly userRepository: UserRepository,
  ) {}

  async execute(id: string) {
    return await this.userRepository.findById(id);
  }
}
