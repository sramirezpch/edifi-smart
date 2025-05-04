import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Company } from './company';

@ObjectType()
export class MinimalBuilding {
  @Field(() => ID, { nullable: false })
  id: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  address: string;

  @Field({ nullable: false })
  district: string;

  @Field({ nullable: false })
  city: string;

  @Field({ nullable: false })
  countryCode: string;
}

@ObjectType()
export class Building extends MinimalBuilding {
  @Field({ nullable: false })
  postalCode: string;

  @Field(() => Company, { nullable: true })
  company?: Company;
}
