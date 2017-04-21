import { Injectable } from '@angular/core';

enum AldiLabel {
  'Droge voeding', 
  'Groente',
  'Fruit',
  'Vlees',
  'Vis',
  'Kip',
  'Zuivel',
  'Andere'
}

export class AldiIngr {
  uuid: number;
  name: string;
  label: AldiLabel;

  constructor(uuid: number, name: string, label: AldiLabel) {
    this.uuid = uuid;
    this.name = name;
    this.label = label;
  }
}

@Injectable()
export class AldiService {

  aldiIngr: AldiIngr[];

  constructor() {
    this.aldiIngr = [
      new AldiIngr(1, 'Schnitzel', AldiLabel.Vlees),
      new AldiIngr(2, 'Wortelen', AldiLabel.Groente),
      new AldiIngr(3, 'Eieren', AldiLabel.Andere),
      new AldiIngr(4, 'Melk', AldiLabel.Zuivel)
    ]
  }

}
