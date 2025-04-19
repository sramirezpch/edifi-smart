import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/use-cases/user/create-user.usecase';
import {
  CreateUserDto,
  GetUsersQueryDto,
  UpdateUserDto,
} from '../dtos/user.dto';
import { GetUsersUseCase } from '../../../application/use-cases/user/get-users.usecase';
import { UpdateUserUseCase } from 'src/application/use-cases/user/update-user.usecase';
import { GetUserUseCase } from 'src/application/use-cases/user/get-user-by-id.usecase';

@Controller('user')
export class UserController {
  constructor(
    @Inject() private readonly createUserUseCase: CreateUserUseCase,
    @Inject() private readonly getUsersUseCase: GetUsersUseCase,
    @Inject() private readonly updateUserUseCase: UpdateUserUseCase,
    @Inject() private readonly getUserUseCase: GetUserUseCase,
  ) {}

  @Post('/')
  async createUser(@Body() dto: CreateUserDto) {
    return await this.createUserUseCase.execute(dto);
  }

  @Get('/')
  async getUsers(@Query() query: GetUsersQueryDto) {
    return await this.getUsersUseCase.execute(query);
  }

  @Get('/:userId')
  async getUser(@Param('userId') id: string) {
    return await this.getUserUseCase.execute(id);
  }

  @Patch('/:userId')
  async updateUser(@Param('userId') id: string, @Body() body: UpdateUserDto) {
    return await this.updateUserUseCase.execute(id, body);
  }
}
