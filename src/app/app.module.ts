import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { CountryComponent } from './country/country.component';
import { StationComponent } from './station/station.component';
import { BusComponent } from './bus/bus.component';
import {CountryService} from './country/country.service';
import {RouterModule, ROUTES} from '@angular/router';
import { CountryListComponent } from './country/country-list.component';
import { CountryDetailComponent } from './country/country-detail.component';
import { CountryStartComponent } from './country/country-start.component';
import {routing} from './app-routing';
import { StationStartComponent } from './station/station-start.component';
import { BusStartComponent } from './bus/bus-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountryComponent,
    StationComponent,
    BusComponent,
    CountryListComponent,
    CountryDetailComponent,
    CountryStartComponent,
    StationStartComponent,
    BusStartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
