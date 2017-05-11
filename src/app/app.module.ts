import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { MealsService } from './services/meals.service';
import { AldiService } from './services/aldi.service';
import { CarrService } from './services/carr.service';
import { RecipesService } from './services/recipes.service';
import { CategoriesService } from './services/categories.service';
import { IngrAldiComponent } from './ingr-aldi/ingr-aldi.component';
import { GeneratorComponent } from './generator/generator.component';
import { IngrCarrComponent } from './ingr-carr/ingr-carr.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CreateIngrComponent } from './create-ingr/create-ingr.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';

const appRoutes: Routes = [
  { path: '', component: GeneratorComponent},
  { path: 'Recipes', component: RecipesComponent},
  { path: 'Aldi', component: IngrAldiComponent },
  { path: 'Carrefour', component: IngrCarrComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IngrAldiComponent,
    GeneratorComponent,
    IngrCarrComponent,
    RecipesComponent,
    CreateIngrComponent,
    CreateRecipeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
   MealsService,
   CarrService,
   AldiService,
   RecipesService,
   CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
