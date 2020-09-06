import { Injectable } from '@angular/core';
import {Country} from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private cuntries: Country[] = [
    new Country(0, 'Tunis'),
    new Country(1, 'Ariana'),
    new Country(2, 'Ben Arous'),
    new Country(3, 'Kasserine'),
    new Country(4, 'Mahdia'),
  ];
  constructor() { }

  // tslint:disable-next-line:typedef
  ListCountries() {
    return this.cuntries;
  }

  // tslint:disable-next-line:typedef
  FindCountry(id: number) {
    return this.cuntries[id];
  }
}
