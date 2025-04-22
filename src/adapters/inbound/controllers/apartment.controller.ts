import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateApartmentDto, UpdateApartmentDto } from '../dtos/apartment.dto';
import { CreateApartmentUseCase } from 'src/application/use-cases/apartment/create-apartment.usecase';
import { GetApartmentsUseCase } from 'src/application/use-cases/apartment/get-apartments.usecase';
import { UpdateApartmentUseCase } from 'src/application/use-cases/apartment/update-apartment.usecase';
import { GetApartmentByIdUseCase } from 'src/application/use-cases/apartment/get-apartment-by-id.usecase';

@Controller('apartment')
export class ApartmentController {
  constructor(
    @Inject() private readonly createApartmentUseCase: CreateApartmentUseCase,
    @Inject() private readonly getApartmentsUseCase: GetApartmentsUseCase,
    @Inject() private readonly updateApartmentUseCase: UpdateApartmentUseCase,
    @Inject() private readonly getApartmentByIdUseCase: GetApartmentByIdUseCase,
  ) {}

  @Post('')
  async create(@Body() dto: CreateApartmentDto) {
    return await this.createApartmentUseCase.execute(dto);
  }

  @Get('')
  async getApartments() {
    return await this.getApartmentsUseCase.execute();
  }

  @Get(':apartmentId')
  async getApartment(@Param('apartmentId') id: string) {
    return await this.getApartmentByIdUseCase.execute(id);
  }

  @Patch('/:apartmentId')
  async updateApartment(
    @Param('apartmentId') id: string,
    @Body() dto: UpdateApartmentDto,
  ) {
    return await this.updateApartmentUseCase.execute(id, dto);
  }
}
