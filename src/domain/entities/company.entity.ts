import { Building } from './building.entity';

type CompanyProps = {
  id: string;
  name: string;
  phone: string;
  email: string;
  enabled: boolean;
  building?: Building[];
};
export class Company {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly enabled: boolean;
  readonly building?: Building[];

  constructor(props: CompanyProps) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.phone = props.phone;
    this.enabled = props.enabled;
    this.building = props.building;
  }
}
