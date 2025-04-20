import { IBuilding } from 'src/application/interfaces';

export class Building {
  id?: string;
  name: string;
  address: string;
  district: string;
  city: string;
  countryCode: string;
  company: string;
  postalCode: string;

  constructor(props: IBuilding) {
    this.id = props.id;
    this.name = props.name;
    this.address = props.address;
    this.district = props.district;
    this.city = props.city;
    this.countryCode = props.countryCode;
    this.postalCode = props.postalCode;
    this.company = props.company;
  }

  toObject() {
    return { ...this };
  }
}
