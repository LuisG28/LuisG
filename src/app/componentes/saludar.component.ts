import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'saludar-app',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css'],
})
export class SaludarComponent {
  @Input() nombre: string = '';
  @Output() saludar: EventEmitter<string> = new EventEmitter<string>();
  nombres: Array<string> = [];
  nombreLista: string = '';

  constructor() {}
  onClick() {
    this.saludar.emit('Hola desde el componente hijo');
  }

  onButtonClick() {
    this.nombres.push(this.nombreLista);
    this.nombreLista='';
    console.log(this.nombres);
  }
}
