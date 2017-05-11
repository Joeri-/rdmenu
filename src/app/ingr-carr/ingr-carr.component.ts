import { Component, OnInit } from '@angular/core';
import { CarrService } from '../services/carr.service';
import { CarrLabel, CarrIngr } from '../models/CarrIngr';

@Component({
  selector: 'app-ingr-carr',
  templateUrl: './ingr-carr.component.html',
  styleUrls: ['./ingr-carr.component.css']
})
export class IngrCarrComponent implements OnInit {
  
  ingrCarr: CarrIngr[];
  show = false;

  constructor( private carr: CarrService) { 
    this.ingrCarr = carr.carrIngr;
  }

  ngOnInit() {
  }

  getLabel(index: number): string {
    return CarrLabel[index];
  }

  showCreate() {
    this.show = !this.show;
  }

}
