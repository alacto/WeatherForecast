import { HttpService } from './services/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatToolbarModule,
  MatListModule,
  MatDividerModule,
  MatTabsModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CurrentTemperatureComponent } from './current-temperature/current-temperature.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FiveDayForecastComponent } from './five-day-forecast/five-day-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentTemperatureComponent,
    FiveDayForecastComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
