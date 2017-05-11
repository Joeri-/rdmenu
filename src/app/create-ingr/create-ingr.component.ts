import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

import { Category } from '../Category';

@Component({
  selector: 'app-create-ingr',
  templateUrl: './create-ingr.component.html',
  styleUrls: ['./create-ingr.component.css']
})
export class CreateIngrComponent implements OnInit {
  @Input() version: string; 
  
  private classes: string = 'ui segment header form';
  cats: Category[] = [];

  constructor(private categories: CategoriesService) { }

  ngOnInit() {
    console.log(this.version);
    this.setColor();
    this.getCategories();
  }
  
  setColor() {
    if (this.version === 'Aldi') {
      this.classes += ' teal';
    } else if (this.version === 'Carrefour') {
      this.classes += ' blue';
    }
  }

  getCategories() {
    this.categories.getCategories(this.version)
                    .subscribe(cats => {
                      this.cats = cats
                    }, err => {
                      console.log(err)
                    });
  }

}
