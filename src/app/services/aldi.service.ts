import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { AldiIngr } from '../models/AldiIngr';

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

    console.log('Posting to /api/aldi');

    return this.http
                .post('/api/aldi', form)
                .map((res) => res.json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
