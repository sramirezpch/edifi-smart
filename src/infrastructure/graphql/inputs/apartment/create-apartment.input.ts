import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateApartmentInput {
  @Field({ nullable: false })
  apartmentNumber: string;

  @Field({ nullable: false })
  towerNumber: string;

  @Field({ nullable: true })
  userId?: string;

  @Field({ nullable: false })
  buildingId: string;
}
