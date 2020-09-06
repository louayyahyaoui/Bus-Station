import { Injectable } from '@angular/core';
import {Bus} from './bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  busFound: Bus[] = [];
  private busList: Bus[] = [
    new Bus(0, 0, 3, 0.8),
    new Bus(1, 1, 2, 1.2),
    new Bus(2, 2, 1, 2.3),
    new Bus(3, 3, 8, 0.4),
    new Bus(4, 4, 9, 0.9),
    new Bus(5, 5, 10, 1.1),
    new Bus(6, 6, 17, 2.4),
    new Bus(7, 7, 5, 1.3),
    new Bus(8, 8, 10, 1.5),
    new Bus(9, 9, 17, 2.2),
    new Bus(10, 10, 30, 0.1),
    new Bus(11, 11, 22, 1.7),
    new Bus(12, 12, 40, 1.1),
    new Bus(13, 13, 16, 0.8),
    new Bus(14, 14, 28, 2.3),
    new Bus(15, 15, 21, 0.4),
    new Bus(16, 16, 5, 1.3),
    new Bus(17, 17, 31, 2.5),
    new Bus(18, 18, 4, 0.2),
    new Bus(19, 19, 11, 1.7),
    new Bus(20, 20, 29, 0.8),
    new Bus(21, 21, 33, 2.3),
    new Bus(22, 0, 5, 0.6),
    new Bus(23, 1, 21, 2.2),
    new Bus(24, 2, 14, 0.8),
    new Bus(25, 3, 9, 3.5),
    new Bus(26, 4, 34, 2.3),
    new Bus(27, 5, 29, 0.7),
    new Bus(28, 6, 1, 1.4),
    new Bus(29, 7, 24, 3.2),
    new Bus(30, 8, 14, 2.7),
  ];
  constructor() { }

  // tslint:disable-next-line:typedef
  FindBus(id: number) {
    this.busFound.length = 0;
    console.log(id);
    for ( let i = 0; i < this.busList.length; i++) {
      if (this.busList[i].idStation.toString() === id.toString()) {

        this.busFound.push(this.busList[i]);
      }
    }
    return this.busFound;
  }
}
