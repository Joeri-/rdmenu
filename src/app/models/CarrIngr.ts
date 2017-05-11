export enum CarrLabel{
  'Droge voeding', 
  'Groente',
  'Fruit',
  'Vlees',
  'Vis',
  'Kip',
  'Zuivel',
  'Andere'
}

export class CarrIngr {
  uuid: number;
  name: string;
  label: CarrLabel;

  constructor(uuid: number, name: string, label: CarrLabel) {
    this.uuid = uuid;
    this.name = name;
    this.label = label;
  }
}