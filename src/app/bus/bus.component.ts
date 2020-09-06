import { Component, OnInit } from '@angular/core';
import {CountryService} from '../country/country.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StationService} from '../station/station.service';
import {BusService} from './bus.service';
import {Station} from '../station/station';
import {Subscription} from 'rxjs';
import {Bus} from './bus';

@Component({
  selector: 'bs-bus',
  templateUrl: './bus.component.html'
})
export class BusComponent implements OnInit {

  busFound: Bus [] = [];
  private stationIndex: number;
  private subscription: Subscription;
  constructor(
    private cs: CountryService,
    private router: Router,
    private route: ActivatedRoute,
    private stationService: StationService,
    private bs: BusService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.stationIndex = params['id1'];
        this.busFound = this.bs.FindBus(this.stationIndex);
        console.log(this.stationIndex);
      }
    );
  }

}
