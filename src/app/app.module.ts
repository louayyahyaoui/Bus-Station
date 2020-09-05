import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { CountryComponent } from './country/country.component';
import { StationComponent } from './station/station.component';
import { BusComponent } from './bus/bus.component';
import {CountryService} from './country/country.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountryComponent,
    StationComponent,
    BusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
