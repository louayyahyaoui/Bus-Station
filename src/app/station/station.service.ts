import { Injectable } from '@angular/core';
import {Station} from './station';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  stationFound: Station[] = [];
  private stations: Station[] = [
    new Station(0, 0, 'Ezzahra'),
    new Station(1, 1, 'Ariana Soghra'),
    new Station(2, 2, 'Nasr'),
    new Station(3, 3, 'Manzeh 6'),
    new Station(4, 4, 'Manzeh 2'),
    new Station(5, 0, 'Raoued'),
    new Station(6, 1, 'Cartage'),
    new Station(7, 2, 'La Goulette'),
    new Station(8, 3, 'Hammem Lif'),
    new Station(9, 4, 'Le Kram'),
    new Station(10, 0, 'Lac'),
    new Station(11, 1, 'Gamarth'),
    new Station(12, 2, 'Sokra'),
    new Station(13, 3, 'Barcelone'),
    new Station(14, 4, 'Lafayet'),
    new Station(15, 0, 'Danden'),
    new Station(16, 1, 'Khaznadar'),
    new Station(17, 2, 'Chotrana'),
    new Station(18, 3, 'El Ghazela'),
    new Station(19, 4, 'Sidi Salah'),
    new Station(20, 0, 'La marsa'),
    new Station(21, 1, 'Salakta'),
    ];
  constructor() { }

  // tslint:disable-next-line:typedef
  getStations() {
    return this.stations;
  }

  // tslint:disable-next-line:typedef
  FindStation(id: number) {
    this.stationFound.length = 0;
    // tslint:disable-next-line:prefer-for-of
    for ( let i = 0; i < this.stations.length; i++) {

      if (this.stations[i].idCountry === id) {
        this.stationFound.push(this.stations[i]);
      }
    }
    return this.stationFound;
  }

  // tslint:disable-next-line:adjacent-overload-signatures typedef
  getStation(id: number) {
    return this.stations[id];
  }
}
