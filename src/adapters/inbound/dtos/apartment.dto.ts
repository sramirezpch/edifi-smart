export type CreateApartmentDto = {
  userId: string;
  apartmentNumber: string;
  towerNumber: string;
  buildingId: string;
};

export type UpdateApartmentDto = Partial<CreateApartmentDto>;
