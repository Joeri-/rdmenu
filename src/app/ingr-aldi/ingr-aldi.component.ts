import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AldiService } from '../services/aldi.service';
import { AldiLabel, AldiIngr } from '../models/AldiIngr';

@Component({
  selector: 'app-ingr-aldi',
  templateUrl: './ingr-aldi.component.html',
  styleUrls: ['./ingr-aldi.component.css']
})
export class IngrAldiComponent implements OnInit {

  ingrAldi: AldiIngr[];
  gender: string;
  show = false;

  constructor( private aldi: AldiService,
               private http: Http ) { 
  }

  loadIngrAldi(): void {
    this.aldi.getAldiIngr().subscribe(
      ingr => {
        this.ingrAldi = ingr;
      }, err => {
      console.log(err);
    });
  }

  getLabel(index: number): string {
    return AldiLabel[index];
  }

  submitForm(form: Object): void { 
    console.log(form);
    this.aldi.postAldiIngr(form).subscribe(
      
    );
    this.loadIngrAldi();
  }

  ngOnInit() {
    this.loadIngrAldi();
  }

  showCreate() {
    this.show = !this.show;
  }

}
