import { IUser } from 'src/application/interfaces';
import { UserRole } from '../enum';

export class User {
  id?: string;
  name: string;
  lastName: string;
  email: string;
  identificationNumber: string;
  role: UserRole;
  password: string;

  constructor(props: IUser) {
    this.id = props.id;
    this.name = props.name;
    this.lastName = props.lastName;
    this.email = props.email;
    this.identificationNumber = props.identificationNumber;
    this.role = props.role;
    this.password = props.password;
  }
}
