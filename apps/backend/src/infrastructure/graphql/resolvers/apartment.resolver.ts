import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateApartmentUC } from 'src/application/use-cases/apartment/create-apartments.usecase';
import { CreateApartmentInput } from '../inputs/apartment/create-apartment.input';
import { UpdateApartmentInput } from '../inputs/apartment/update-apartment.input';
import { UpdateApartmentUC } from 'src/application/use-cases/apartment/update-apartment.usecase';
import { Apartment, MinimalApartment } from '../models/apartment';
import { GetApartmentsUC } from 'src/application/use-cases/apartment/get-apartments.usecase';
import { GetApartmentUC } from 'src/application/use-cases/apartment/get-apartment.usecase';

@Resolver()
export class ApartmentResolver {
  constructor(
    @Inject() private readonly createApartmentUseCase: CreateApartmentUC,
    @Inject() private readonly updateAparmentUseCase: UpdateApartmentUC,
    @Inject() private readonly getApartmentsUseCase: GetApartmentsUC,
    @Inject() private readonly getApartmentUseCase: GetApartmentUC,
  ) {}

  @Mutation(() => Boolean, { name: 'createApartment' })
  async createApartment(@Args('input') input: CreateApartmentInput) {
    return await this.createApartmentUseCase.execute(input);
  }

  @Mutation(() => Boolean, { name: 'updateApartment' })
  async updateApartment(@Args('input') input: UpdateApartmentInput) {
    return await this.updateAparmentUseCase.execute(input);
  }

  @Query(() => Apartment, { name: 'apartment' })
  async getApartment(@Args('id') id: string) {
    return await this.getApartmentUseCase.execute(id);
  }

  @Query(() => [MinimalApartment], { name: 'apartments' })
  async getApartments() {
    return await this.getApartmentsUseCase.execute();
  }
}
