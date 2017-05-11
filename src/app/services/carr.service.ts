import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CarrIngr } from '../models/CarrIngr';

@Injectable()
export class CarrService {

  carrIngr: CarrIngr[];

  constructor(private http: Http) {}

  getCarrIngr(): Observable<CarrIngr[]> {
    return this.http
                .get('/api/carr')
                .map((res) => res.json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  postCarrIngr(form: any): Observable<CarrIngr[]> {
    return this.http
              .post(form, '/api/carr', [])
              .map((res) => res.json())
              .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}

