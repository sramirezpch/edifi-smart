import { ITenant } from 'src/application/interfaces/tenant';

export class Tenant {
  constructor(private readonly props: ITenant) {}

  toObject() {
    return { ...this.props };
  }
}
