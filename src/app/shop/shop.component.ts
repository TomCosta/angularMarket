import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from './../models/produto';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  produtoCart;
  produtos;

  constructor(
    private router: Router
  ){
    this.produtos = [
      {nome: 'Vianda', preco: '5,74', img: '../assets/img/food1.jpg'},
      {nome: 'Feijoada', preco: '9,23', img: '../assets/img/food2.jpg'},
      {nome: 'Carreteiro', preco: '12,31', img: '../assets/img/food3.jpg'},
      {nome: 'Lasanha', preco: '11,90', img: '../assets/img/food1.jpg'},
      {nome: 'Macarrão', preco: '13,95', img: '../assets/img/food2.jpg'},
      {nome: 'Caldo Verde', preco: '21,83', img: '../assets/img/food3.jpg'},
    ];

    // Chama prineiro 1º
  }

  ngOnInit(){
    // Aqui 2º, considerando é chamado apenas 1 vez
    
    let vianda = {
      nome: 'Vianda', 
      preco: '5,74', 
      img: '../assets/img/food1.jpg'
    }

    this.addToCart(vianda);
  }

  ngAfterViewInit(){
    // // Aqui 3º,
  }

  ngOnLeave(){
    // Aqui ao sair
  }

  addToCart(produto: Produto){
    this.produtoCart = produto;
    this.router.navigate(['carrinho', {prod:JSON.stringify(produto)}]);
  }

  goToUser() {
    this.router.navigate(['user']);
  }

}
