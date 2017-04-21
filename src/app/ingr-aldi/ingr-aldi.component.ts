import { Component, OnInit } from '@angular/core';
import { AldiIngr, AldiService } from '../aldi.service';

@Component({
  selector: 'app-ingr-aldi',
  templateUrl: './ingr-aldi.component.html',
  styleUrls: ['./ingr-aldi.component.css']
})
export class IngrAldiComponent implements OnInit {

  ingrAldi: AldiIngr[];

  constructor( private aldi: AldiService) { 
    this.ingrAldi = aldi.aldiIngr;
  }

  ngOnInit() {
  }

}
