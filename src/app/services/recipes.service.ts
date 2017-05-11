import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

import { Recipe } from '../models/Recipe';

@Injectable()
export class RecipesService {

  constructor(private http: Http) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http
                .get('/api/recipe')
                .map((res) => res.json())
                .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  postRecipes(form: Object): Observable<Recipe> {
    return this.http
                .post(JSON.stringify(form), '/api/recipe', [])
                .map((res) => res.json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
                
  }

}
