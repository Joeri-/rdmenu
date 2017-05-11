export enum AldiLabel {
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
  constructor(public uuid: number, public name: string, public label: AldiLabel) {}
}