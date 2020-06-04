import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';//Se importa a mano
import { InicioComponent } from './component/inicio/inicio.component';
import { LenguajesComponent } from './component/lenguajes/lenguajes.component';
import { DetallesComponent } from './component/detalles/detalles.component';

const routes: Routes=[
  {path:'inicio', component: InicioComponent},
  {path:'lenguajes', component: LenguajesComponent},
  {path:'detalles', component:DetallesComponent},
  {path:'**',pathMatch:'full', redirectTo: 'inicio'},
 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
