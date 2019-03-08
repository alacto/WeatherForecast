import { Component } from '@angular/core';

import { OpenWeatherService } from '../open-weather/open-weather.service';

@Component({
  selector: 'current-temperature',
  templateUrl: './current-temperature.component.html',
  styleUrls: ['./current-temperature.component.css']
})
export class CurrentTemperatureComponent {
  title = 'weather-forecast';
}
