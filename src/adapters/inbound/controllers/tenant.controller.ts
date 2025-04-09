import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateTenantUseCase } from 'src/application/use-cases/tenant/create-tenant.usecase';
import { CreateTenantInput } from 'src/application/interfaces/tenant/create-tenant.input';
import { GetTenantByIdUseCase } from 'src/application/use-cases/tenant/get-tenant-by-id.usecase';
import { CreateTenantDto } from '../dtos/tenant.dto';
import { GetTenantByIdInput } from 'src/application/interfaces/tenant/get-tenant-by-id.input';

@Controller('tenant')
export class TenantController {
  constructor(
    private readonly createTenantUseCase: CreateTenantUseCase,
    private readonly getTenantByIdUseCase: GetTenantByIdUseCase,
  ) {}

  @Post('/')
  async createTenant(@Body() dto: CreateTenantDto) {
    const input: CreateTenantInput = {
      address: dto.address,
      email: dto.email,
      phone: dto.phone,
    };

    return await this.createTenantUseCase.execute(input);
  }

  @Get('/:tenantId')
  async getTenantById(@Param('tenantId') tenantId: string) {
    const input: GetTenantByIdInput = {
      id: tenantId,
    };

    return await this.getTenantByIdUseCase.execute(input);
  }
}
