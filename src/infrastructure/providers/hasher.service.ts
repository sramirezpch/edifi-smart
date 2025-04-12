import { Injectable } from '@nestjs/common';
import { PasswordHasher } from 'src/application/ports/password-hasher.port';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HasherService implements PasswordHasher {
  private readonly saltRounds = 15;
  constructor() {}

  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, this.saltRounds);
  }

  async compare(password: string, hashed: string): Promise<boolean> {
    return await bcrypt.compare(password, hashed);
  }
}
