import {RouterModule, Routes} from '@angular/router';
import {CountryComponent} from './country/country.component';
import {COUNTRY_ROUTES} from './country/country-routes';


const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/country', pathMatch: 'full'},
  {path: 'country', component: CountryComponent, children: COUNTRY_ROUTES},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
