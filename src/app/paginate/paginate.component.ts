import { Input, Output, EventEmitter } from '@angular/core'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {

  @Input() paginaAtual;
  @Output() clickPagina = new EventEmitter();
  @Output() clickPaginaAnterior = new EventEmitter();
  @Output() clickProximaPagina = new EventEmitter();

  constructor(
    private route: ActivatedRoute
  ){    
  }

  ngOnInit(): void {
  }

  gerarLinks() {

  }

  pagina(novaPagina) {
    this.clickPagina.emit(novaPagina);
  }

  paginaAnterior() {
      this.clickPaginaAnterior.emit();
  }

  proximaPagina() {
      this.clickProximaPagina.emit();
  }

}
