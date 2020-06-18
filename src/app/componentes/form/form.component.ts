import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private _builder: FormBuilder
  ) { 
    this.sigupForm=this._builder.group({
      nombre: ['', Validators.required],//vacio es el primer valor
      apellidos:['', Validators.required],//validators.require para requerido
      email:['', Validators.compose([Validators.email, Validators.required])], //validators.compose para mas de dos
      contrasenia:['', Validators.required],
      estado:['', Validators.required],
      sexo:['',Validators.required],
      fecha:['', Validators.required]
    })
  }

  sigupForm: FormGroup

  ngOnInit(): void {
  }

  enviar(values){
    console.log(values);
  }

}
