import {RouterModule, Routes} from '@angular/router';
import {StationComponent} from '../station/station.component';
import {BUS_ROUTES} from '../bus/bus-routes';
import {StationStartComponent} from './station-start.component';
import {StationDetailComponent} from './station-detail.component';



export const STATION_ROUTES: Routes = [

  {path: ':idstation', component: StationDetailComponent, children: BUS_ROUTES},
];

