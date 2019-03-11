import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrentTemperatureResponse } from '../contracts/current-temperature-response.interface';

@Injectable()
export class HttpService {
  private apiUrl = 'http://api.openweathermap.org/data/2.5';
  private apiKey = '71d7b6a0da60cc7ae8c090a040d78b59';

  constructor(private httpClient: HttpClient) { }

  public getCurrentTemperatureByName(location: string): Observable<ICurrentTemperatureResponse> {
    return this.httpClient.get<ICurrentTemperatureResponse>(`${this.apiUrl}/weather?q=${location}&appid=${this.apiKey}`);
  }

  public getCurrentTemperatureByCoordinates(lat: number, lon: number): Observable<ICurrentTemperatureResponse> {
    return this.httpClient.get<ICurrentTemperatureResponse>(`${this.apiUrl}/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
  }

  public getFiveDayTemperaturesByName(location: string) {

  }
}
