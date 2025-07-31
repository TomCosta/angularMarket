import { PokeapiService } from '../services/api/pokeapi.service';
import { Component, OnInit } from '@angular/core';
import { first, last, map, reduce, find, take } from 'rxjs/operators';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {

  // paginaAtual: number = 1;
  qtdPorPagina: number = 5;
  pagina: number = 0;
  pokeDataTotal = [];
  pokeData = [];
  alunos: any;
	alunosTotal = [
		{id: 1, name: 'Fulano'},
		{id: 2, name: 'Ciclano'},
		{id: 3, name: 'Beltrano'},
		{id: 11, name: 'Erculano'},
		{id: 12, name: 'Miríades'},
		{id: 13, name: 'Caesar'},
		{id: 21, name: 'Divino'},
		{id: 22, name: 'Melinda'},
		{id: 23, name: 'Cartana'},
		{id: 31, name: 'Mundano'},
		{id: 32, name: 'Felício'},
		{id: 33, name: 'Antunes'},
		{id: 41, name: 'Brunnes'},
		{id: 42, name: 'Cacildes'},
		{id: 43, name: 'Moranni'},
		{id: 51, name: 'Fernandis'},
		{id: 52, name: 'Carpes'},
		{id: 53, name: 'Alelon'},
		{id: 61, name: 'Basílico'},
		{id: 62, name: 'Caetanio'},
		{id: 63, name: 'Verloso'},
		{id: 71, name: 'Amarado'},
		{id: 72, name: 'Baptista'},
		{id: 73, name: 'Beltrao'},
		{id: 81, name: 'Colabes'},
		{id: 82, name: 'Alcindes'},
		{id: 83, name: 'Vergário'},
		{id: 91, name: 'Marcondes'},
		{id: 92, name: 'Miliciano'},
		{id: 93, name: 'Compadre'},
		{id: 94, name: 'Bernardes'}
	];

  constructor(    
    private apiServ: PokeapiService
  ){    
  }

  ngOnInit(): void {
    this.getPokeMon();
    // this.popularAlunos();
  }

  paginar($event: any) {
		this.pagina = $event; // - 1;
    console.log('Paginar: ', this.pagina);
		this.getPokeMon();
    // this.popularAlunos();
	}

  getPokeMon(){
    this.pokeData = [];
    // offset=deslocamento(quantidade) / limit=limite
    let offset = (this.pagina*this.qtdPorPagina);
    let limit = 100; // (this.pagina * this.qtdPorPagina + this.qtdPorPagina);
    let endpoint = `pokemon?limit=${limit}&offset=${offset}`;
    console.log('offset/qtdPg: ', offset, limit);
    this.apiServ.getPokemon(endpoint)
    .pipe(
      map(x => {return x}),
      // first()
      take(1)
    ).subscribe((resp)=>{
      console.log('***results: ', resp['results']);
      // this.pokeData = resp['game_indices'] || resp['results'];
      this.pokeDataTotal = resp['game_indices'] || resp['results'];      
      for (let i = ( this.pagina * this.qtdPorPagina ); i < (this.pagina * this.qtdPorPagina + this.qtdPorPagina); i++) {
        if (i >= this.pokeDataTotal.length) {
          break;
        }
        this.pokeData.push(this.pokeDataTotal[i]);
      }
    });    
  }

	popularAlunos() {
		this.alunos = [];
    this.pokeData = [];
    for (let i = ( this.pagina * this.qtdPorPagina ); i < (this.pagina * this.qtdPorPagina + this.qtdPorPagina); i++) {
      if (i >= this.pokeDataTotal.length) {
        break;
      }
      this.pokeData.push(this.pokeDataTotal[i]);
      console.log('***Pokedata: ', this.pokeData);
      console.log('***PokeDataTotal: ', this.pokeDataTotal);
    }

    console.log('Popular: ',  (this.pagina * this.qtdPorPagina), (this.pagina * this.qtdPorPagina + this.qtdPorPagina));
		for (let i = ( this.pagina * this.qtdPorPagina ); i < (this.pagina * this.qtdPorPagina + this.qtdPorPagina); i++) {
			if (i >= this.alunosTotal.length) {
				break;
			}
			this.alunos.push(this.alunosTotal[i]);
		}
	}

}
