import {RouterModule, Routes} from '@angular/router';
import {StationComponent} from '../station/station.component';
import {BusComponent} from './bus.component';



export const BUS_ROUTES: Routes = [

  {path: ':id2', component: BusComponent},
];

