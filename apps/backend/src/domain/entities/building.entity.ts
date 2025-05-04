import { Company } from './company.entity';

export interface BuildingProps {
  id: string;
  name: string;
  address: string;
  district: string;
  city: string;
  countryCode: string;
  postalCode: string;
  company?: Company;
}
export class Building {
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly district: string;
  readonly city: string;
  readonly countryCode: string;
  readonly postalCode: string;
  readonly company?: Company;

  constructor(props: BuildingProps) {
    this.id = props.id;
    this.name = props.name;
    this.address = props.address;
    this.district = props.district;
    this.city = props.city;
    this.countryCode = props.countryCode;
    this.postalCode = props.postalCode;
    this.company = props.company;
  }
}
