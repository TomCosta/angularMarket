import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  urlBase = 'https://pokeapi.co/api/v2/';

  constructor(
    private _http: HttpClient
  ){    
  }

  getPokemon(endpoint){
    return this._http.get(this.urlBase+endpoint);
  }
}
