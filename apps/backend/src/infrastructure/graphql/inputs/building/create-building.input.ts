import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateBuildingInput {
  @Field({ nullable: false })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field({ nullable: false })
  @IsString()
  @IsNotEmpty()
  address: string;

  @Field({ nullable: false })
  @IsString()
  @IsNotEmpty()
  city: string;

  @Field({ nullable: false })
  @IsString()
  @IsNotEmpty()
  district: string;

  @Field({ nullable: false })
  @IsString()
  @IsNotEmpty()
  countryCode: string;

  @Field({ nullable: false })
  @IsString()
  @IsNotEmpty()
  postalCode: string;

  @Field({ nullable: false })
  @IsUUID()
  @IsNotEmpty()
  companyId: string;
}
