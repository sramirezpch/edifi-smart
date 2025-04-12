import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/adapters/inbound/dtos/user.dto';
import { PasswordHasherToken } from 'src/application/ports/password-hasher.port';
import { User } from 'src/domain/entities/user.entity';
import { UserRole } from 'src/domain/enum';
import { UserRepositoryToken } from 'src/domain/repositories/user.repository';
import { UserRepository } from 'src/infrastructure/persistence/postgres/user/user.repository';
import { HasherService } from 'src/infrastructure/providers/hasher.service';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(UserRepositoryToken)
    private readonly userRepository: UserRepository,
    @Inject(PasswordHasherToken) private readonly hasherService: HasherService,
  ) {}

  async execute(dto: CreateUserDto) {
    const { password, confirmPassword, ...rest } = dto;
    if (password !== confirmPassword)
      throw new BadRequestException("Passwords don't match");

    const hashedPassword = await this.hasherService.hash(password);

    const domain = new User({
      ...rest,
      role: rest.role || UserRole.Resident,
      password: hashedPassword,
    });

    return await this.userRepository.insert(domain);
  }
}
