export type CreateBuildingInput = {
  name: string;
  address: string;
  district: string;
  city: string;
  countryCode: string;
  postalCode: string;
  companyId: string;
};

export type UpdateBuildingInput = Partial<CreateBuildingInput> & { id: string };
