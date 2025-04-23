import { ICommonArea } from 'src/application/interfaces';

export class CommonArea {
  id?: string;
  name: string;
  capacity: string;
  enabled: boolean;
  buildingId: string;

  constructor(props: ICommonArea) {
    this.id = props.id;
    this.name = props.name;
    this.capacity = props.capacity;
    this.enabled = props.enabled;
    this.buildingId = props.buildingId;
  }

  toObject() {
    return { ...this };
  }
}
