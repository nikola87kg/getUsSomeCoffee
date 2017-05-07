import { Component } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html'
})
export class IntroComponent {
    
  constructor(private router:Router) { }
     
  goHome() {
      this.router.navigate(['../home']);
  }
  
  goError() {
      this.router.navigate(['../error']);
  }
  
}
