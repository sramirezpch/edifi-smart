import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateBuildingInput } from './create-building.input';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateBuildingInput extends PartialType(CreateBuildingInput) {
  @Field({ nullable: false })
  @IsString()
  @IsNotEmpty()
  id: string;
}
