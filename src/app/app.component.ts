import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto2';
  name = 'Martin';

  onSaludar(mensaje){
    console.log(mensaje);
  }
}
