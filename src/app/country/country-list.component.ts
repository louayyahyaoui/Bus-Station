import { Component, OnInit } from '@angular/core';
import {CountryService} from './country.service';
import {Country} from './country';

@Component({
  selector: 'bs-country-list',
  templateUrl: './country-list.component.html',
  styles: [
  ]
})
export class CountryListComponent implements OnInit {

   countries: Country[] = [];
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countries = this.countryService.ListCountries();
  }

}
