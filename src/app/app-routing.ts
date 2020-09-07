import {RouterModule, Routes} from '@angular/router';
import {CountryComponent} from './country/country.component';
import {COUNTRY_ROUTES} from './country/country-routes';
import {FilterComponent} from './filter/filter.component';


const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/country', pathMatch: 'full'},
  {path: 'country', component: CountryComponent, children: COUNTRY_ROUTES},
  {path: 'filter', component: FilterComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
