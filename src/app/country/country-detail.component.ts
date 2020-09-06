import { Component, OnInit } from '@angular/core';
import {Country} from './country';
import {Subscription} from 'rxjs';
import {CountryService} from './country.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StationService} from '../station/station.service';

@Component({
  selector: 'bs-country-detail',
  templateUrl: './country-detail.component.html',
  styles: [
  ]
})
export class CountryDetailComponent implements OnInit {

  selectedCountry: Country;
  private countryIndex: number;
  private subscription: Subscription;
  constructor(
    private cs: CountryService,
    private router: Router,
    private route: ActivatedRoute,
    private stationService: StationService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.countryIndex = params['id'];
        this.selectedCountry = this.cs.FindCountry(this.countryIndex);
      }
    );
  }

}
