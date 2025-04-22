import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { IUserRepository } from 'src/domain/repositories/user.repository';
import { UserEntity } from './user.entity';
import { EntityRepository } from '@mikro-orm/postgresql';
import { UserMapper } from 'src/adapters/mappers/user.mapper';
import { InjectRepository } from '@mikro-orm/nestjs';
import { FindAllWithRelations } from '../types';
import { GetUsersQueryDto } from 'src/adapters/inbound/dtos/user.dto';

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

  async findAll(input: GetUsersQueryDto) {
    return await this.userRepository.findAll({
      where: input,
    });
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
