import { Injectable } from '@angular/core';
import {BusStation} from './bus-station';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  public busSTation: BusStation[] = [
    new BusStation('Tunis', 'Ezzahra', 3, 0.8),
    new BusStation('Tunis', 'Ezzahra', 5, 0.6),
    new BusStation('Tunis', 'Raoued', 10, 1.1),
    new BusStation('Tunis', 'Raoued', 29, 0.7),
    new BusStation('Tunis', 'Lac', 30, 0.1),
    new BusStation('Tunis', 'Danden', 21, 0.4),
    new BusStation('Tunis', 'La Marsa', 29, 0.8),
    new BusStation('Ariana', 'Ariana Soghra', 2, 1.2),
    new BusStation('Ariana', 'Ariana Soghra', 21, 2.2),
    new BusStation('Ariana', 'Cartage', 17, 2.4),
    new BusStation('Ariana', 'Cartage', 1, 1.4),
    new BusStation('Ariana', 'Gamarth', 22, 1.7),
    new BusStation('Ariana', 'Khaznadar', 5, 1.3),
    new BusStation('Ariana', 'Salakta', 33, 2.3),
    new BusStation('Ben Arous', 'Nasr', 1, 2.3),
    new BusStation('Ben Arous', 'Nasr', 14, 0.8),
    new BusStation('Ben Arous', 'La Goulette', 5, 1.3),
    new BusStation('Ben Arous', 'La Goulette', 24, 3.2),
    new BusStation('Ben Arous', 'Sokra', 40, 1.1),
    new BusStation('Ben Arous', 'Chotrana', 31, 2.5),
    new BusStation('Kasserine', 'Manzeh 6', 8, 0.4),
    new BusStation('Kasserine', 'Hammem Lif', 10, 1.5),
    new BusStation('Kasserine', 'Hammem Lif', 14, 2.7),
    new BusStation('Kasserine', 'Barcelone', 16, 0.8),
    new BusStation('Kasserine', 'El Ghazela', 4, 0.2),
    new BusStation('Mahdia', 'Manzeh 2', 9, 0.9),
    new BusStation('Mahdia', 'Manzeh 2', 34, 2.3),
    new BusStation('Mahdia', 'Le Kram', 17, 2.2),
    new BusStation('Mahdia', 'Lafayet', 28, 2.3),
    new BusStation('Mahdia', 'Sidi Salah', 11, 1.7),
  ];

  constructor() { }
  getFilter() {
    return this.busSTation;
  }
}
