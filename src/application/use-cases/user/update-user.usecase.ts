import { wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Inject, Injectable } from '@nestjs/common';
import { UpdateUserDto } from 'src/adapters/inbound/dtos/user.dto';
import { UserMapper } from 'src/adapters/mappers/user.mapper';
import { PasswordHasherToken } from 'src/application/ports/password-hasher.port';
import { User } from 'src/domain/entities/user.entity';
import { UserRepositoryToken } from 'src/domain/repositories/user.repository';
import { UserRepository } from 'src/infrastructure/persistence/postgres/user/user.repository';
import { HasherService } from 'src/infrastructure/providers/hasher.service';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject(UserRepositoryToken)
    private readonly userRepository: UserRepository,
    @Inject(PasswordHasherToken) private readonly hasherService: HasherService,
  ) {}

  async execute(id: string, body: UpdateUserDto) {
    const entity = await this.userRepository.findById(id);

    if (body.password) {
      const hashedPassword = await this.hasherService.hash(body.password);
      body.password = hashedPassword;
    }

    wrap(entity).assign(body, { merge: true });

    return await this.userRepository.update();
  }
}
