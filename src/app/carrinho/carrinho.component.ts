import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  prod;

  constructor(
    activatedRoute: ActivatedRoute
  ){
    this.prod = JSON.parse(activatedRoute.snapshot.paramMap.get('prod'));
    console.log('Params: ', this.prod.nome);
  }

  ngOnInit(): void {
  }

}
