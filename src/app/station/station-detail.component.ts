import { Component, OnInit } from '@angular/core';
import {Country} from '../country/country';
import {Subscription} from 'rxjs';
import {CountryService} from '../country/country.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StationService} from './station.service';
import {Station} from './station';

@Component({
  selector: 'bs-station-detail',
  templateUrl: './station-detail.component.html',
  styles: [
  ]
})
export class StationDetailComponent implements OnInit {

  selectedStation: Station;
  private countryIndex: number;
  private stationIndex: number;
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
        this.countryIndex = params['idcountry'];
        this.stationIndex = params['idstation'];
        this.selectedStation = this.stationService.getStation(this.stationIndex);
      }
    );
  }

}
