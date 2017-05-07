import { Category } from "./Category";
import { AldiLabel } from "./AldiLabel";

export class AldiIngr {
  constructor(public uuid: number, public name: string, public label: AldiLabel){}
}