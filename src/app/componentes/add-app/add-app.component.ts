import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.css']
})
export class AddAppComponent implements OnInit {
  datos: Array<string> = [];
  
  constructor(
    private _builder: FormBuilder
  ) {
    this.addForm=this._builder.group({
      id:['', Validators.compose([Validators.required, Validators.min(100),Validators.max(105)])],
      nombre:['', Validators.required],
      sexo:['', Validators.required],
      bd:['', Validators.compose([Validators.required, Validators.min(1980), Validators.max(2010)])]
    })
   }
  addForm:FormGroup
  ngOnInit(): void {
  }

  add(values){
    this.datos.push(values);
    this.addForm.reset();
    console.log(this.datos);
  }
  
}
