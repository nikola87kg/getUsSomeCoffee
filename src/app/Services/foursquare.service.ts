import { Injectable } from '@angular/core';
import { Http, Response      }  from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FoursquareService {
    
  constructor(private http: Http) { }

  foursquareURL = "https://api.foursquare.com/v2/venues/search" +
  "?client_id=5BZHIAEIYO3BWYYSZAUAK1VX3ECKEVZBD4LQNYUW2YYGY1G1" +
  "&client_secret=CECU42PTMHAOQTLGMRFFQY1KZD5PBA1VEDGHDVIOUYVE4LXT" +
  "&v=20170507" +
  "&ll=" +"44.0125" + "%2C" +  "20.9124" +
  "&limit=10" +
  "&intent=checkin" +
  "&radius=1000" + 
  "&query=kafe|cafe"
    
  getFoursquareData(): Observable<any[]> {   
      return this.http.get(this.foursquareURL)
                      .map((res:any) => { return res.json().response.venues } )
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }  
 
}
