import { User } from 'src/domain/entities/user.entity';
import { UserEntity } from 'src/infrastructure/database/entities/user.entity';

export class UserMapper {
  static fromEntityToDomain(entity: UserEntity) {
    return new User(entity);
  }
}
