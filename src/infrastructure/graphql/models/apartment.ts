import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ApartmentUser } from './user';
import { MinimalBuilding } from './building';

@ObjectType()
export class MinimalApartment {
  @Field(() => ID, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  apartmentNumber: string;

  @Field(() => String, { nullable: false })
  towerNumber: string;
}

@ObjectType()
export class Apartment extends MinimalApartment {
  @Field(() => ApartmentUser, { nullable: true })
  user?: ApartmentUser;

  @Field(() => MinimalBuilding, { nullable: false })
  building: MinimalBuilding;
}
