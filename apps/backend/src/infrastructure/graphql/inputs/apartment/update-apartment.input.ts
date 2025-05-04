import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateApartmentInput } from './create-apartment.input';

@InputType()
export class UpdateApartmentInput extends PartialType(CreateApartmentInput) {
  @Field(() => ID, { nullable: false })
  id: string;
}
