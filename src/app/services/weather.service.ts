import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URL: string = '';
  apiKey ='2161187f2279d3a8df15ad2703d051f0';

  constructor(private http: HttpClient) { 
    this.URL = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`;
  }

  getWeather(cityName: string, countryCode: string){
    return this.http.get(`${this.URL}${cityName},${countryCode}`);
  }
}
