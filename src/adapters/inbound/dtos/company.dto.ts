export type CreateCompanyDto = {
  name: string;
  phone: string;
  email: string;
  enabled?: boolean;
};

export type UpdateCompanyDto = Partial<CreateCompanyDto>;

export type GetCompaniesQueryDto = {
  enabled?: boolean;
};
