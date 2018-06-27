import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { AldiService } from '../services/aldi.service';
import { CarrService } from '../services/carr.service';

import { Category } from '../Category';

@Component({
  selector: 'app-create-ingr',
  templateUrl: './create-ingr.component.html',
  styleUrls: ['./create-ingr.component.css']
})
export class CreateIngrComponent implements OnInit {
  @Input() version: string;

  private classes = 'ui segment header form';
  cats: Category[] = [];

  constructor(private categories: CategoriesService,
              private aldi: AldiService,
              private carr: CarrService) { }

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
                      this.cats = cats;
                    }, err => {
                      console.log(err)
                    });
  }

  submitForm(form: any) {

    const body = {
      name: form.name,
      // label: this.cats[this.cats.indexOf(form.label)].name
      label: this.cats.indexOf(form.label)
    };

    console.log(form);
    console.log(this.cats);
    console.log(body);

    if (this.version === 'Aldi') {
      console.log('POST aldi ingr');
      this.aldi.postAldiIngr(body).subscribe(
      res => {
        console.log(res);
      },
        err => {
          console.log(err);
        }
      );
    } else if (this.version === 'Carrefour') {
      console.log('POST carr ingr');
        this.carr.postCarrIngr(form).subscribe(
        res => {
          console.log(res);
        },
          err => {
            console.log(err);
          }
        );
    }
  }
}
