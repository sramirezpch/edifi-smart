import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserUC } from 'src/application/use-cases/user/create-user.usecase';
import { UpsertUserInput } from '../inputs/user/upsert-user.input';
import { UserSummary } from '../models/user';
import { GetUsersUC } from 'src/application/use-cases/user/get-users.usecase';

@Resolver()
export class UserResolver {
  constructor(
    @Inject() private readonly createUserUseCase: CreateUserUC,
    @Inject() private readonly getUsersUseCase: GetUsersUC,
  ) {}

  @Mutation(() => Boolean, { name: 'createUser' })
  async createUser(@Args('input') input: UpsertUserInput) {
    return await this.createUserUseCase.execute(input);
  }

  @Query(() => [UserSummary], { name: 'users' })
  async getUsers() {
    return await this.getUsersUseCase.execute();
  }
}
