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
import { CreateTenantUseCase } from 'src/application/use-cases/tenant/create-tenant.usecase';
import { GetTenantByIdUseCase } from 'src/application/use-cases/tenant/get-tenant-by-id.usecase';
import {
  CreateTenantDto,
  GetTenantByIdDto,
  GetTenantsQueryDto,
  UpdateTenantDto,
} from '../dtos/tenant.dto';
import { GetTenantsUseCase } from 'src/application/use-cases/tenant/get-tenants.usecase';
import { UpdateTenantUseCase } from 'src/application/use-cases/tenant/update-tenant.usecase';

@Controller('tenant')
export class TenantController {
  constructor(
    private readonly createTenantUseCase: CreateTenantUseCase,
    private readonly getTenantByIdUseCase: GetTenantByIdUseCase,
    private readonly getTenantsUseCase: GetTenantsUseCase,
    private readonly updateTenantUseCase: UpdateTenantUseCase,
  ) {}

  @Post('/')
  async createTenant(@Body() dto: CreateTenantDto) {
    return await this.createTenantUseCase.execute(dto);
  }

  @Get('/:tenantId')
  async getTenantById(@Param() params: GetTenantByIdDto) {
    return await this.getTenantByIdUseCase.execute(params);
  }

  @Get('/')
  async getTenants(@Query() query: GetTenantsQueryDto) {
    return await this.getTenantsUseCase.execute(query);
  }

  @Patch('/:tenantId')
  async updateTenant(
    @Param('tenantId') id: string,
    @Body() dto: UpdateTenantDto,
  ) {
    return await this.updateTenantUseCase.execute(id, dto);
  }
}
