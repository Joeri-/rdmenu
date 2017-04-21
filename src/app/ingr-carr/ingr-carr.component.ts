import { Component, OnInit } from '@angular/core';
import { CarrLabel, CarrIngr, CarrService } from '../carr.service';

@Component({
  selector: 'app-ingr-carr',
  templateUrl: './ingr-carr.component.html',
  styleUrls: ['./ingr-carr.component.css']
})
export class IngrCarrComponent implements OnInit {
  
  ingrCarr: CarrIngr[];

  constructor( private carr: CarrService) { 
    this.ingrCarr = carr.carrIngr;
  }

  ngOnInit() {
  }

  getLabel(index: number): string {
    return CarrLabel[index];
  }

}
