import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  constructor(private weatherService: WeatherService){

  }

  ngOnInit(): void {
    this.weatherService.getWeather('london','uk')
    .subscribe(
      res=> console.log(res),
      err=> console.log(err)
    )
  }
  submitLocation(cityname,contrycode){
    console.log(cityname.value,contrycode.value);
    return false;
  }
}
