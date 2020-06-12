import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SaludarComponent} from './componentes/saludar.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
