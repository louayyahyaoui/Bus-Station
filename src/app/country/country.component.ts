import { Component, OnInit } from '@angular/core';
import {Country} from './country';
import {CountryService} from './country.service';

@Component({
  selector: 'bs-country',
  templateUrl: './country.component.html'
})
export class CountryComponent implements OnInit {

  constructor(private sc: CountryService) { }

  ngOnInit(): void {
  }

}
