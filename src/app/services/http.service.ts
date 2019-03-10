import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
  private apiUrl = 'http://api.openweathermap.org/data/2.5/';
  constructor(private http: HttpClient) { }
}
