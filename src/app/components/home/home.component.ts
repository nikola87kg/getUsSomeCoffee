import { Component, OnInit } from '@angular/core';
import { Http, Response }  from '@angular/http';

//import { FoursquareService } from '../../Services/foursquare.service';
//import { GeolocationService } from '../../Services/geolocation.service';
import { Venues } from '../../model/venues'; 

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    
  public lat;
  public lon;
  public date;
  
  constructor(private http:Http) {
      this.getGeolocation(); 
  }
  
  setPosition(position){
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
      this.date = new Date(position.timestamp).toISOString().slice(0,10).replace(/-/g,"");
      console.log(this.lat);
      console.log(this.lon);
      console.log(this.date);
//      this.newlat = function() {
//          return this.lat;
//      }
//      console.log(this.newlat);
//      this.foursquareData();
//      console.log(this.foursquare);
  }
  
  
//  
//  foursquareData() {
//      this.foursquare = "https://api.foursquare.com/v2/venues/search" +
//      "?client_id=5BZHIAEIYO3BWYYSZAUAK1VX3ECKEVZBD4LQNYUW2YYGY1G1" +
//      "&client_secret=CECU42PTMHAOQTLGMRFFQY1KZD5PBA1VEDGHDVIOUYVE4LXT" +
//      "&v=" + this.date + 
//      "&ll=" + this.lat + "%2C" + this.lon +
////      "&ll=" +"43.891414399999995%2C20.3501652" +
//      "&limit=10" +
//      "&intent=checkin" +
//      "&radius=1000"
//  }
  
  
   getGeolocation() {
       if(navigator.geolocation) {
           navigator.geolocation.getCurrentPosition( this.setPosition.bind(this) );           
       }
   }
       
   
   
   public foursquareInfo = "https://api.foursquare.com/v2/venues/search" +
   "?client_id=5BZHIAEIYO3BWYYSZAUAK1VX3ECKEVZBD4LQNYUW2YYGY1G1" +
   "&client_secret=CECU42PTMHAOQTLGMRFFQY1KZD5PBA1VEDGHDVIOUYVE4LXT" +
   "&v=20170507" +
   "&ll=" +"43.891414399999995" + "%2C" +  "20.3501652" +
   "&limit=10" +
   "&intent=checkin" +
   "&radius=1000" + 
   "&query=kafe|cafe"
   

   
   getFoursquareData(): Observable<any[]> {   
       return this.http.get(this.foursquareInfo)
                       .map((res:any) => { return res.json().response.venues } )
                       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }  

   venues:any;
   
   loadData() {
     this.getFoursquareData().subscribe(
        (venues:any) => {
           console.log(venues);
           this.venues = venues;
        }               
     );
   }
  
  ngOnInit() {
      this.loadData();
  }

}
