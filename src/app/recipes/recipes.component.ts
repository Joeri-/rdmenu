import { Component, OnInit } from '@angular/core';
import { RecipesService } from "../services/recipes.service";

import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  Recipes: Recipe[];

  constructor( private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.getRecipes().subscribe(
      recipes => this.Recipes = recipes,
      error => console.log(error),
      () => console.log('Done returning Recipes')
    );
  }

}
