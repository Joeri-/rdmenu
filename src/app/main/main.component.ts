import { Component, OnInit } from '@angular/core';
import { Meal, MealsService } from '../meals.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private global: GlobalService) {
   }

  ngOnInit() {
  }

  switchTab(index: number) {
    this.global.selected = index;
  }
}
