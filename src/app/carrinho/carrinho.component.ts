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
    route: ActivatedRoute
  ){
    let prodParam = route.snapshot.params.prod;
    this.prod = prodParam;
    console.log('Params: ', this.prod);
  }

  ngOnInit(): void {
  }

}
