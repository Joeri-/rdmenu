import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Category } from './Category';

import { AldiIngr } from './AldiIngr';

@Injectable()
export class CategoriesService {

  categories: Category[];

  constructor(private http: Http) {}

  getCategories(shop: string): Observable<Category[]> {
    return this.http
                .get(`/api/category?shop=${shop}`)
                .map((res) => res.json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  postCategories(shop: string, form: Object): Observable<Category> {
    return this.http
                .post(JSON.stringify(form), `/api/category?shop=${shop}`, [])
                .map((res) => res.json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
