import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular Mark';

  produtos = [
    {nome: 'Vianda', preco: '5,74', img: '../assets/img/food1.jpg'},
    {nome: 'Feijoada', preco: '9,23', img: '../assets/img/food2.jpg'},
    {nome: 'Carreteiro', preco: '12,31', img: '../assets/img/food3.jpg'},
    {nome: 'Lasanha', preco: '11,90', img: '../assets/img/food1.jpg'},
    {nome: 'Macarrão', preco: '13,95', img: '../assets/img/food2.jpg'},
    {nome: 'Caldo Verde', preco: '21,83', img: '../assets/img/food3.jpg'},
  ];

  constructor(
    private router: Router
  ){    
  }

  goToUser() {
    this.router.navigate(['user']);
  }
}