import {RouterModule, Routes} from '@angular/router';
import {StationComponent} from '../station/station.component';
import {BUS_ROUTES} from '../bus/bus-routes';



export const STATION_ROUTES: Routes = [

  {path: ':id1', component: StationComponent, children: BUS_ROUTES},
];

