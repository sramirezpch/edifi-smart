import { IUser } from 'src/application/interfaces';
import { UserRole } from '../enum';
import { Apartment } from './apartment.entity';

export class User {
  id?: string;
  name: string;
  lastName: string;
  email: string;
  identificationNumber: string;
  role: UserRole;
  password?: string;
  apartmentIds: Array<string>;

  constructor(props: IUser) {
    this.id = props.id;
    this.name = props.name;
    this.lastName = props.lastName;
    this.email = props.email;
    this.identificationNumber = props.identificationNumber;
    this.role = props.role;
    this.password = props.password;
    this.apartmentIds = props.apartmentIds ?? [];
  }

  toObject() {
    return { ...this };
  }
}
