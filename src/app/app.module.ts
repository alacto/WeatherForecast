import { LocationService } from './services/location.service';
import { HttpService } from './services/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatDialogModule,
  MatInputModule,
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
import { LocationDialogComponent } from './location-dialog/location-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CurrentTemperatureComponent,
    FiveDayForecastComponent,
    LocationDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatTabsModule
  ],
  entryComponents: [
    LocationDialogComponent
  ],
  providers: [HttpService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
