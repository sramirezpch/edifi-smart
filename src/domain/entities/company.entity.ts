import { ICompany } from 'src/application/interfaces';

export class Company {
  id?: string;
  name: string;
  phone: string;
  email: string;
  enabled?: boolean;

  constructor(props: ICompany) {
    this.id = props.id;
    this.name = props.name;
    this.phone = props.phone;
    this.email = props.email;
    this.enabled = props.enabled ?? false;
  }

  toObject() {
    return this;
  }
}
