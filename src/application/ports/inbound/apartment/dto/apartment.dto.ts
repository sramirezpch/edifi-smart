export type CreateApartmentInput = {
  apartmentNumber: string;
  towerNumber: string;
  userId?: string;
  buildingId: string;
};

export type UpdateApartmentInput = Partial<CreateApartmentInput> & {
  id: string;
};
