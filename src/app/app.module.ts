import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CurrentTemperatureComponent } from './current-temperature/current-temperature.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentTemperatureComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
