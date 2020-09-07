import { Component, OnInit } from '@angular/core';
import {Station} from './station';
import {Subscription} from 'rxjs';
import {CountryService} from '../country/country.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StationService} from './station.service';

@Component({
  selector: 'bs-station-list',
  templateUrl: './station-list.component.html',
  styles: [
  ]
})
export class StationListComponent implements OnInit {

  public stationFound: Station [] ;
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
        this.countryIndex = +params["idcountry"];
        this.stationFound = this.stationService.FindStation(this.countryIndex);
        console.log(this.stationFound);
      }
    );
  }

}
