import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MinimalCompany {
  @Field(() => ID, { nullable: false })
  id: string;

  @Field({ nullable: false })
  name: string;
}

@ObjectType()
export class Company extends MinimalCompany {
  @Field({ nullable: false })
  phone: string;

  @Field({ nullable: false })
  email: string;
}
