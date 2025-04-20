import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { IUserRepository } from 'src/domain/repositories/user.repository';
import { UserEntity } from './user.entity';
import {
  EntityManager,
  EntityRepository,
  QueryResult,
  wrap,
} from '@mikro-orm/postgresql';
import { UserMapper } from 'src/adapters/mappers/user.mapper';
import { GetUsersParams } from 'src/domain/repositories/interfaces';
import { InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: EntityRepository<UserEntity>,
  ) {}

  async insert(domain: User): Promise<{ id: string }> {
    const entity = UserMapper.fromDomainToEntity(domain);

    const insertedId = await this.userRepository.insert(entity);

    return { id: insertedId };
  }

  async findAll(filters: GetUsersParams): Promise<Array<UserEntity>> {
    return await this.userRepository.findAll({ where: filters });
  }

  async findById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ id });

    if (!user) throw new NotFoundException('No user found');

    return user;
  }

  async update(): Promise<void> {
    return await this.userRepository.getEntityManager().flush();
  }
}
