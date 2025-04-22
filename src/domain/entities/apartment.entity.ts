import { IApartment } from 'src/application/interfaces';

export class Apartment {
  id?: string;
  userId: string;
  apartmentNumber: string;
  towerNumber: string;
  buildingId: string;

  constructor(props: IApartment) {
    this.id = props.id;
    this.userId = props.userId;
    this.apartmentNumber = props.apartmentNumber;
    this.towerNumber = props.towerNumber;
    this.buildingId = props.buildingId;
  }

  toObject() {
    return { ...this };
  }
}
