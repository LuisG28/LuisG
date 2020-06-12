import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component(
    {
        selector: 'saludar-app',
        templateUrl: './saludar.component.html',
        styleUrls:['./saludar.component.css']
    }
)

export class SaludarComponent{
    @Input() nombre: string = "Wuicho";
    @Output() saludar: EventEmitter<string> = new EventEmitter<string>();
    nombres: Array<string>=[];
    nombreLista:string="Luis"
    nom:string;
    constructor(){
    }
    onClick(){
        this.saludar.emit('Hola desde el componente hijo');
    }
    onButtonClick(nom){
        this.nombres.push(nom);
        console.log(this.nombres)
    }
}