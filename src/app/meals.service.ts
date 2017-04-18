import { Injectable } from '@angular/core';

export class Meal {
  name: string;
  ingrAldi: string[];
  ingrCarr: string[];
  constructor(name: string, ingrAldi: string[], ingrCarr: string[]) {
    this.name = name;
    this.ingrAldi = ingrAldi;
    this.ingrCarr = ingrCarr;
  }
}

@Injectable()
export class MealsService {
  meals: Meal[];

  constructor() { 
    this.meals = [
      new Meal('Gestoofde wortelen met vleesje', ['Ajuin', 'Patatten'], ['wortelen (400g)']),
      new Meal('Pannenkoeken', ['Eieren', 'Melk'], ['Bakmeel'])
    ]
  }
}
