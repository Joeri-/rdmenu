import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

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

  constructor(private http: Http) {}

  getAldiIngr(): Observable<CarrIngr[]> {
    return this.http
                .get('/api/carr')
                .map((res) => res.json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}

