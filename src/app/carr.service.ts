import { Injectable } from '@angular/core';

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

@Injectable()
export class CarrService {

  carrIngr: CarrIngr[];

  constructor() {
    this.carrIngr = [
      new CarrIngr(1, 'Schnitzel', CarrLabel.Vlees),
      new CarrIngr(2, 'Wortelen', CarrLabel.Groente),
      new CarrIngr(3, 'Eieren', CarrLabel.Andere),
      new CarrIngr(4, 'Melk', CarrLabel.Zuivel)
    ]
  }

}
