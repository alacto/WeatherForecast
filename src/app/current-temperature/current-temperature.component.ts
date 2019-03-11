import { HttpService } from './../services/http.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICurrentTemperatureResponse } from '../contracts/current-temperature-response.interface';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'current-temperature',
  templateUrl: './current-temperature.component.html',
  styleUrls: ['./current-temperature.component.css']
})
export class CurrentTemperatureComponent implements OnInit, OnDestroy {
  private currentLocation: string;
  private subscriptions: Subscription[] = [];

  public temperature: number;
  public humidity: number;
  public pressure: number;
  public weather: string;
  public icon: string;
  constructor(
    private httpService: HttpService,
    private locationService: LocationService
    ) { }

  public ngOnInit(): void {
    this.subscriptions.push(this.locationService.getUserLocation().subscribe({
      next: (data) => {
        this.currentLocation = data;
        this.httpService.getCurrentTemperatureByName(this.currentLocation).toPromise().then(results => {
          this.mapWeatherResponseData(results);
        });
      }
    }));
    this.subscriptions.push(this.httpService.getCurrentTemperatureByName(this.currentLocation).subscribe({
      next: (data) => {
        this.mapWeatherResponseData(data);
      },
      error: (error) => console.log(error)
    }));
  }

  private mapWeatherResponseData(data: ICurrentTemperatureResponse): void {
    this.temperature = this.convertKelvinToFarenheit(data.main.temp);
    this.humidity = data.main.humidity;
    this.pressure = data.main.pressure;
    this.weather = data.weather[0].main;
    this.icon = data.weather[0].icon;
  }

  private convertKelvinToFarenheit(tempInKelvin: number): number {
    return Math.round((9 / 5 * (tempInKelvin - 273)) + 32);
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
