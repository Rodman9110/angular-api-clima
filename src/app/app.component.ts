import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  weather;

  constructor(private weatherService: WeatherService){

  }

  ngOnInit(): void {
    
  }
  getWeather(cityName: string, contryCode: string) {
    this.weatherService.getWeather(cityName,contryCode)
    .subscribe(
      res=> {
        console.log(res),
        this.weather = res

      },
      err=> console.log(err)
    )
  }
  submitLocation(cityName: HTMLInputElement,contryCode: HTMLInputElement){
    // console.log(cityName.value,contryCode.value);
    this.getWeather(cityName.value,contryCode.value)
    cityName.value = '';
    contryCode.value = '';
    cityName.focus();
    return false;
  }
}
