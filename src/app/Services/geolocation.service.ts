import { Injectable } from '@angular/core';

@Injectable() export class GeolocationService  {

    constructor() { }
    
    public lat;
    public lon;
    public date;
    foursquare: any;

    setPosition(position){
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.date = new Date(position.timestamp).toISOString().slice(0,10).replace(/-/g,"");
        this.foursquareData();
//        console.log(this.lat);
//        console.log(this.lon);
//        console.log(this.date);
//        console.log(this.foursquare);
    }
    
     getGeolocation() {
         if(navigator.geolocation) {
             navigator.geolocation.getCurrentPosition( this.setPosition.bind(this) );  
         }
     }

     foursquareData() {
         this.foursquare = "https://api.foursquare.com/v2/venues/search" +
         "?client_id=5BZHIAEIYO3BWYYSZAUAK1VX3ECKEVZBD4LQNYUW2YYGY1G1" +
         "&client_secret=CECU42PTMHAOQTLGMRFFQY1KZD5PBA1VEDGHDVIOUYVE4LXT" +
         "&v=" + this.date + 
         "&ll=" + this.lat + "%2C" + this.lon +
         "&limit=10" +
         "&intent=checkin" +
         "&radius=1000"
     }
}