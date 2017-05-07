import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgPipesModule} from 'ngx-pipes';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IntroComponent } from './components/intro/intro.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

import {GeolocationService} from './Services/geolocation.service';
import {FoursquareService} from './Services/foursquare.service';

import { HomeGuard } from './components/home/home.guard'; 


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgPipesModule
  ],
  providers: [GeolocationService, FoursquareService, HomeGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
