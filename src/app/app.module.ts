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
import { FilterComponent } from './filter/filter.component';
import {FilterPipe} from './filter/filter.pipe';
import {StationService} from './station/station.service';
import {BusService} from './bus/bus.service';
import {FormsModule} from '@angular/forms';
import { StationDetailComponent } from './station/station-detail.component';
import { StationListComponent } from './station/station-list.component';
import {ChatModule} from './chat/chat.module';



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
    BusStartComponent,
    FilterComponent,
    FilterPipe,
    StationDetailComponent,
    StationListComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    FormsModule,
    ChatModule
  ],
  providers: [CountryService, StationService, BusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
