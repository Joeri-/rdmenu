import { Component, OnInit } from '@angular/core';
import { MealsService } from '../meals.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  mealNames: string[];
  ingrAldiList : string[];
  ingrCarrList : string[];


  constructor( private meals: MealsService) {
    this.mealNames = meals.meals.map(x => x.name);
    this.ingrAldiList = meals.meals.map(x => x.ingrAldi.join()).join().split(',');
    this.ingrCarrList = meals.meals.map(x => x.ingrCarr.join()).join().split(',');
   }

  ngOnInit() {
  }

}
