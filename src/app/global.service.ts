import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService{

  selected: number;

  constructor() {
    this.selected = 0;
  }

  getSelected(): number {
    return this.selected;
  }

}
