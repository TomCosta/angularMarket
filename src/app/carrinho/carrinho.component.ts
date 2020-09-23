import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  prod;
  quant:number = 1;
  result:number = 0;

  constructor(
    activatedRoute: ActivatedRoute
  ){
    this.prod = JSON.parse(activatedRoute.snapshot.paramMap.get('prod'));
    console.log('Params: ', this.prod.nome);
  }

  ngOnInit(): void {
    this.calculate();
  }

  addMais(){
    if(this.quant>=1){
    this.quant = this.quant+1;
    this.calculate();
    }
  }

  addMenos(){
    if(this.quant>=2){
      this.quant = this.quant-1;
      this.calculate();
    }
  }

  calculate(){
    let total = (parseFloat(this.prod.preco.replace(',', '.')) * Number(this.quant)).toFixed(2);
    this.result = Number(total);
    console.log('Calc ', this.result);
  }

  pagar(){
    console.log('Pagar: ');
  }

}
