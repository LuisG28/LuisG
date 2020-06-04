import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TarjetasComponent } from './component/tarjetas/tarjetas.component';
import { LenguajesComponent } from './component/lenguajes/lenguajes.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { DetallesComponent } from './component/detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TarjetasComponent,
    LenguajesComponent,
    InicioComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
