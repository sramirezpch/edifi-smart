import { Apartment } from './apartment.entity';

export type UserProps = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  idNumber: string;
  idType: string;
  role: string;
  password: string;
  apartments?: Apartment[];
};

export class User {
  readonly id: string;
  readonly name: string;
  readonly lastname: string;
  readonly email: string;
  readonly idNumber: string;
  readonly idType: string;
  readonly role: string;
  private readonly password: string;
  readonly apartments?: Apartment[];

  constructor(props: UserProps) {
    this.id = props.id;
    this.name = props.name;
    this.lastname = props.lastname;
    this.email = props.email;
    this.idNumber = props.idNumber;
    this.idType = props.idType;
    this.role = props.role;
    this.password = props.password;
    this.apartments = props.apartments;
  }
}
