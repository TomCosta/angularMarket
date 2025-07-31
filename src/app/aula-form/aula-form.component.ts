import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-aula-form',
  templateUrl: './aula-form.component.html',
  styleUrls: ['./aula-form.component.css']
})
export class AulaFormComponent implements OnInit {

  constructor() { }

  buscaForm: FormGroup;

  ngOnInit(): void {
    // this.buscaForm = this.formBuilder.group({
    //   codigoCliente: ['', Validators.required],
    //   numeroOperacao: ['', Validators.required],
    //   infosConta: ['', Validators.required],
    // })

    this.buscaForm = new FormGroup({
      codigoCliente: new FormControl('', Validators.required),
      numeroOperacao: new FormControl('', Validators.required),
      infosConta: new FormControl('', Validators.required),
    })
  }

  ofuscaCampo(event, activeField){
    event.stopPropagation();
    console.log('Campo: ', activeField);
    if(activeField==='codigoCliente'){
      this.buscaForm.controls['codigoCliente'].enable();
      this.buscaForm.controls['numeroOperacao'].disable();
      this.buscaForm.controls['infosConta'].disable();
    }else if(activeField==='numeroOperacao'){
      this.buscaForm.controls['codigoCliente'].disable();
      this.buscaForm.controls['numeroOperacao'].enable();
      this.buscaForm.controls['infosConta'].disable();
    } else if(activeField==='infosConta') {
      this.buscaForm.controls['codigoCliente'].disable();
      this.buscaForm.controls['numeroOperacao'].disable();
      this.buscaForm.controls['infosConta'].enable();
    }
  }

  habilitarCampos(){
    this.buscaForm.controls['codigoCliente'].enable();
    this.buscaForm.controls['numeroOperacao'].enable();
    this.buscaForm.controls['infosConta'].enable();
  }
}