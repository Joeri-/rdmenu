import { AldiIngr } from './AldiIngr';
import { CarrIngr } from './CarrIngr';

export class Recipe {
    constructor(public uuid: number, public name: string, public AldiIngr: AldiIngr[], public CarrIngr: CarrIngr[]) {}
}