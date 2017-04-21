import { Component, OnInit } from '@angular/core';
import { Meal, MealsService } from '../meals.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  mealNames: string[];
  ingrAldiList : string[];
  ingrCarrList : string[];
  menu: Meal[];

  constructor( private meals: MealsService) {
    this.menu = [];
    this.ingrAldiList = [];
    this.ingrCarrList = [];
   }

  ngOnInit() {
  }

  addToMenu(meal: Meal) {
    if (this.menu.indexOf(meal) < 0){
      this.menu.push(meal);
      this.makeAldiList();
      this.makeCarrList();
    }
  }

  removeFromMenu(meal: Meal) {
    let index = this.menu.indexOf(meal);
    if (index >= 0) {
      this.menu.splice(index, 1);
      this.makeAldiList();
      this.makeCarrList();
    }
  }

  makeAldiList() {
    this.ingrAldiList = [];
    for(let meal of this.menu){
      for(let ingr of meal.ingrAldi) {
        if (this.ingrAldiList.indexOf(ingr) < 0){
          this.ingrAldiList.push(ingr);
        }
      }
    }
  }

  makeCarrList() {
    this.ingrCarrList = [];
    for(let meal of this.menu){
      for(let ingr of meal.ingrCarr) {
        if (this.ingrCarrList.indexOf(ingr) < 0){
          this.ingrCarrList.push(ingr);
        }
      }
    }
  }

}

