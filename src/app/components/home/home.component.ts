import { Component, OnInit } from '@angular/core';
import { Http, Response }  from '@angular/http';

import { FoursquareService } from '../../Services/foursquare.service';
import { GeolocationService } from '../../Services/geolocation.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  activeDistance = true;
  activeCheckins = false;

  venues:any;
  
  constructor(
          private http:Http,
          private geolocationService:GeolocationService,
          private foursquareService:FoursquareService
          ) {
  }
  
  setDistance() {
      this.activeDistance = true;
      this.activeCheckins = false;
      document.getElementById("switchDistance").className = "active";
      document.getElementById("switchCheckins").className = "";
  }

  setCheckins() {
      this.activeDistance = false;
      this.activeCheckins = true;    
      document.getElementById("switchDistance").className = "";
      document.getElementById("switchCheckins").className = "active";
  }
  
   loadFoursquare() {
     this.foursquareService.getFoursquareData().subscribe(
        (venues:any) => {
           console.log(venues);
           this.venues = venues;
        }               
     );
   }
  
  ngOnInit() {
      this.loadFoursquare();
      this.geolocationService.getGeolocation;
  }

}
