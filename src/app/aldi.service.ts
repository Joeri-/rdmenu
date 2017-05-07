import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

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

  constructor(private http: Http) {}

  getAldiIngr(): Observable<AldiIngr[]> {
    return this.http
                .get('/api/aldi')
                .map((res) => res.json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  postAldiIngr(form: Object): Observable<AldiIngr> {
    return this.http
                .post(JSON.stringify(form), '/api/aldi', [])
                .map((res) => res.json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
