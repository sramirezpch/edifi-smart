import { ITenant } from 'src/application/interfaces';

export class Tenant {
  id?: string;
  address: string;
  secondaryAddress?: string;
  locality: string;
  adminAreaLevel1: string;
  adminAreaLevel2?: string;
  countryCode: string;
  postalCode?: string;
  enabled?: boolean;

  constructor(props: ITenant) {
    this.id = props.id;
    this.address = props.address;
    this.secondaryAddress = props.secondaryAddress;
    this.locality = props.locality;
    this.adminAreaLevel1 = props.adminAreaLevel1;
    this.adminAreaLevel2 = props.adminAreaLevel2;
    this.countryCode = props.countryCode;
    this.postalCode = props.postalCode;
    this.enabled = props.enabled ?? false;
  }

  toObject() {
    return this;
  }
}
