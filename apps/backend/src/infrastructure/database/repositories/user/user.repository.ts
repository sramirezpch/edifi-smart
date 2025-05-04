import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/application/ports/outbound/user/user.repository';
import { UserEntity } from '../../entities/user.entity';
import { EntityRepository } from '@mikro-orm/postgresql';
import { UpsertUserInput } from 'src/application/ports/inbound/user/dto/user.dto';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: EntityRepository<UserEntity>,
  ) {}

  async upsert(input: UpsertUserInput): Promise<boolean> {
    const user = await this.userRepository.upsert(input, {
      onConflictAction: 'merge',
    });

    return !!user;
  }

  async findAll() {
    return await this.userRepository.findAll();
  }
}
