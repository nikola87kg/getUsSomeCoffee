import { Injectable } from '@angular/core';
import { Http, Response      }  from '@angular/http';

//import { FoursquareModel } from '../model/foursquare-model';
//import { GeolocationService } from './geolocation.service';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FoursquareService {
  
//  latit = this.geolocationService.lat;  
//  long = this.geolocationService.lon;  
//  date = this.geolocationService.date;  
  
    
  private foursquareInfo = "https://api.foursquare.com/v2/venues/search" +
        "?client_id=5BZHIAEIYO3BWYYSZAUAK1VX3ECKEVZBD4LQNYUW2YYGY1G1" +
        "&client_secret=CECU42PTMHAOQTLGMRFFQY1KZD5PBA1VEDGHDVIOUYVE4LXT" +
        "&v=20170506" +
//        "&ll=" + this.latit + "%2C" + this.long +
        "&ll=" +"43.891414399999995%2C20.3501652" +
  		"&limit=10" +
  		"&intent=checkin" +
  		"&radius=1000"

    
  constructor(private http: Http) { }

  getFoursquareData(): Observable<any> {   
      return this.http.get(this.foursquareInfo)
                      .map((res:Response) => res.json())
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }  
}
