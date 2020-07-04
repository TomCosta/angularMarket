import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular Market';

  constructor(
    private router: Router
  ){
  }

  goShop() {
    this.router.navigate(['shop']);
  }

  logout(){
    this.router.navigate(['login']);
  }
}