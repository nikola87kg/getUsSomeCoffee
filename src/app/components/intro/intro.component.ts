import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

import { GeolocationService } from '../../Services/geolocation.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html'
})
export class IntroComponent implements OnInit {

  geolocation: any;
    
  constructor(private router:Router, private geolocationService: GeolocationService) { }
  

  lat = this.geolocationService.lat;   
  lon = this.geolocationService.lon;   
  date = this.geolocationService.date;   
  
  getGeolocation(): void {
      this.geolocation = this.geolocationService.getGeolocation();
    }
  
  goHome() {
      this.router.navigate(['../home']);
  }
  
  ngOnInit(){   
  }
}
