import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { UserRole } from 'src/domain/enum';

@ObjectType()
export class UserSummary {
  @Field(() => ID, { nullable: false })
  id: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  lastname: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  role: UserRole;

  @Field({ nullable: true })
  idNumber?: string;

  @Field({ nullable: true })
  idType?: string;
}

@ObjectType()
export class ApartmentUser {
  @Field(() => ID, { nullable: false })
  id: string;
  @Field({ nullable: false })
  name: string;
  @Field({ nullable: false })
  lastname: string;
  @Field({ nullable: false })
  email: string;
}

registerEnumType(UserRole, { name: 'UserRole' });
