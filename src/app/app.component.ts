import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto2';
  name = 'Martin';
  show:boolean = false;
  buttonName:any = 'Mostrar componente';

  onSaludar(mensaje){
    console.log(mensaje);
  }

  mostrar(){
    
    this.show = !this.show;
    if(this.show){  
      this.buttonName = "Ocultar componente";
    }else{
      this.buttonName = "Mostrar componente";
    }
  }
}
