import { NgModule }              from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { IntroComponent } from './components/intro/intro.component'; 
import { HomeComponent } from './components/home/home.component'; 
import { ErrorComponent } from './components/error/error.component';  

import { HomeGuard } from './components/home/home.guard'; 

const appRoutes: Routes = [
   { path: 'intro', component: IntroComponent },
   { path: 'home', component: HomeComponent, canActivate: [HomeGuard] },
   { path: '',  redirectTo: '/intro',  pathMatch: 'full'},
   { path: '**', component: ErrorComponent }
 ];
 

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}