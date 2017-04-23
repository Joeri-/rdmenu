import { Component, OnInit } from '@angular/core';
import { AldiLabel, AldiIngr, AldiService } from '../aldi.service';

@Component({
  selector: 'app-ingr-aldi',
  templateUrl: './ingr-aldi.component.html',
  styleUrls: ['./ingr-aldi.component.css']
})
export class IngrAldiComponent implements OnInit {

  ingrAldi: AldiIngr[];

  constructor( private aldi: AldiService ) { 
    // this.ingrAldi = aldi.aldiIngr;
  }

  loadIngrAldi() {
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

  ngOnInit() {
    this.loadIngrAldi();
  }

}
