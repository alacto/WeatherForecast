import { LocationService } from './../services/location.service';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICurrentTemperatureResponse } from '../contracts/current-temperature-response.interface';

@Component({
  selector: 'five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.css']
})
export class FiveDayForecastComponent implements OnInit {
  private currentLocation: string;
  private subscriptions: Subscription[] = [];

  public forecasts;
  constructor(
    private httpService: HttpService,
    private locationService: LocationService
    ) { }

  ngOnInit() {
    this.subscriptions.push(this.locationService.getUserLocation().subscribe({
      next: (data) => {
        this.currentLocation = data;
        this.httpService.getFiveDayTemperaturesByName(this.currentLocation).toPromise().then(results => {
          this.forecasts = this.mapWeatherResponseData(results.list);
        });
      }
    }));
    this.subscriptions.push(this.httpService.getFiveDayTemperaturesByName(this.currentLocation).subscribe({
      next: (data) => {
        this.forecasts = this.mapWeatherResponseData(data.list);
      },
      error: (error) => console.log(error)
    }));
  }

  private mapWeatherResponseData(data: ICurrentTemperatureResponse[]): any[] {
    const result = [];
    data.forEach(element => {
      result.push({
        datetime: element.dt_txt,
        temperature: this.convertKelvinToFarenheit(element.main.temp),
        humidity: element.main.humidity,
        pressure: element.main.pressure,
        weather: element.weather[0].main,
        icon: element.weather[0].icon
      });
    });

    return result;
  }

  private convertKelvinToFarenheit(tempInKelvin: number): number {
    return Math.round((9 / 5 * (tempInKelvin - 273)) + 32);
  }
}
