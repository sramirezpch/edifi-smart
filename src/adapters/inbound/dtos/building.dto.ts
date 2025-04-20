export type CreateBuildingDto = {
  name: string;
  address: string;
  city: string;
  district: string;
  countryCode: string;
  postalCode: string;
  company: string;
};

export type UpdateBuildingDto = Partial<Omit<CreateBuildingDto, 'companyId'>>;
