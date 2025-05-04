import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class UpsertCompanyInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'Company id should be a string' })
  @IsNotEmpty({ message: 'Company id should not be empty' })
  id?: string;

  @Field({ nullable: false })
  @IsString({ message: 'Company name should be a string' })
  @IsNotEmpty({ message: 'Company name is required' })
  name: string;

  @Field({ nullable: false })
  @IsString({ message: 'Company phone should be a string' })
  @IsNotEmpty({ message: 'Company phone is required' })
  phone: string;

  @Field({ nullable: false })
  @IsEmail()
  @IsNotEmpty({ message: 'Company email is required' })
  email: string;
}
