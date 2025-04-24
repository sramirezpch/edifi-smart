import { Building } from './building.entity';
import { User } from './user.entity';

export type ApartmentProps = {
  id: string;
  apartmentNumber: string;
  towerNumber: string;
  user?: User;
  building?: Building;
};
export class Apartment {
  readonly id: string;
  readonly apartmentNumber: string;
  readonly towerNumber: string;
  readonly user?: User;
  readonly building?: Building;

  constructor(props: ApartmentProps) {
    this.id = props.id;
    this.apartmentNumber = props.apartmentNumber;
    this.towerNumber = props.towerNumber;
    this.user = props.user;
    this.building = props.building;
  }
}
