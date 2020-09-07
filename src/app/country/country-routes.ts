import {RouterModule, Routes} from '@angular/router';
import {StationComponent} from '../station/station.component';
import {STATION_ROUTES} from '../station/station-routes';
import {CountryStartComponent} from './country-start.component';
import {CountryDetailComponent} from './country-detail.component';



export const COUNTRY_ROUTES: Routes = [

  {path: ':idcountry', component: CountryDetailComponent, children: STATION_ROUTES},
];

