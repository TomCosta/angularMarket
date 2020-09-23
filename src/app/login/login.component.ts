import { PokeapiService } from '../services/api/pokeapi.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  pokeData:any = [];

  constructor(
    private apiServ: PokeapiService,
    public fb: FormBuilder,
    public router: Router
  ){
    this.signinForm = this.fb.group({
      email: [''],
      password: ['']
    });

    this.getPokeMon();
  }

  ngOnInit(){
    
  }

  loginUser() {
    console.log('Login ', this.signinForm.value);
    if(this.signinForm.value['password'] == '123456'){
      this.router.navigate(['shop']);
    }else{
      alert('Opss... Algo errado!');
    }
  }

  getPokeMon(){
    let endpoint = 'pokemon/ditto';
    this.apiServ.getPokemon(endpoint)
    .subscribe((resp)=>{
      this.pokeData = resp['game_indices'];
      console.log('Pokedata: ', this.pokeData);
    });
  }
}