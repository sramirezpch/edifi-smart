import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateCompanyUseCase } from 'src/application/use-cases/company/create-company.usecase';
import { GetCompanyByIdUseCase } from 'src/application/use-cases/company/get-company-by-id.usecase';
import {
  CreateCompanyDto,
  GetCompaniesQueryDto,
  UpdateCompanyDto,
} from '../dtos/company.dto';
import { GetCompaniesUseCase } from 'src/application/use-cases/company/get-companies.usecase';
import { UpdateCompanyUseCase } from 'src/application/use-cases/company/update-company.usecase';

@Controller('company')
export class CompanyController {
  constructor(
    private readonly createCompanyUseCase: CreateCompanyUseCase,
    private readonly getCompanyByIdUseCase: GetCompanyByIdUseCase,
    private readonly getCompaniesUseCase: GetCompaniesUseCase,
    private readonly updateCompanyUseCase: UpdateCompanyUseCase,
  ) {}

  @Post('/')
  async createCompany(@Body() dto: CreateCompanyDto) {
    return await this.createCompanyUseCase.execute(dto);
  }

  @Get('/:companyId')
  async getCompanyById(@Param('companyId') companyId: string) {
    return await this.getCompanyByIdUseCase.execute(companyId);
  }

  @Get('/')
  async getCompanies(@Query() query: GetCompaniesQueryDto) {
    return await this.getCompaniesUseCase.execute(query);
  }

  @Patch('/:companyId')
  async updateCompany(
    @Param('companyId') id: string,
    @Body() dto: UpdateCompanyDto,
  ) {
    return await this.updateCompanyUseCase.execute(id, dto);
  }
}
