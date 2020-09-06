import {Component, Input, OnInit} from '@angular/core';
import {Country} from './country';

@Component({
  selector: 'bs-country-start',
  templateUrl: './country-start.component.html',
  styles: [
  ]
})
export class CountryStartComponent implements OnInit {

  @Input() country: Country;
  @Input() countryId: number;
  constructor() { }

  ngOnInit(): void {
  }

}
