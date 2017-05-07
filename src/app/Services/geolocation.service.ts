import { Injectable } from '@angular/core';

@Injectable() export class GeolocationService  {

    constructor() { }
    
    public lat;
    public lon;
    public date;
    
    setPosition(position){
       this.lat = position.coords.latitude;
       this.lon = position.coords.longitude;
       this.date = new Date(position.timestamp).toISOString().slice(0,10).replace(/-/g,"");
       }
    
    getGeolocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
        }
    }

}