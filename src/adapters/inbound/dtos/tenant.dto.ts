export type CreateTenantDto = {
  address: string;
  secondaryAddress?: string;
  locality: string;
  adminAreaLevel1: string;
  adminAreaLevel2?: string;
  countryCode: string;
  postalCode?: string;
  enabled?: boolean;
};

export type UpdateTenantDto = Partial<CreateTenantDto>;

export type GetTenantByIdDto = {
  tenantId: string;
};

export type GetTenantsQueryDto = {
  countryCode?: string;
  adminAreaLevel1?: string;
  adminAreaLevel2?: string;
};
