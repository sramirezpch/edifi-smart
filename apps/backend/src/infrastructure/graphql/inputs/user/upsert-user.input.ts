import { Field, InputType } from '@nestjs/graphql';
import { UserRole } from 'src/domain/enum';

@InputType()
export class UpsertUserInput {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  lastname: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  idNumber: string;

  @Field({ nullable: false })
  idType: string;

  @Field({ nullable: false })
  role: UserRole;
}
