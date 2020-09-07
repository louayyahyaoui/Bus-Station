import { Injectable } from '@angular/core';
import {BusStation} from './bus-station';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  public busSTation: BusStation[] = [
    new BusStation('Tunis', 'Ezzahra', 0.8, 1.2),
    new BusStation('Ariana', 'Nasr', 1.8, 1.2),
    new BusStation('Ben Arous', 'Manouba', 2.8, 1.2),
    new BusStation('Mahdia', 'Lac', 0.1, 1.2),
  ];

  constructor() { }
  getFilter() {
    return this.busSTation;
  }
}
