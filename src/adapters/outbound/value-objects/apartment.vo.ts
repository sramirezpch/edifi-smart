export type GetApartmentsVO = {
  id: string;
  apartmentNumber: string;
  towerNumber: string;
  user: {
    id: string;
    name: string;
    lastName: string;
    email: string;
  };
};
