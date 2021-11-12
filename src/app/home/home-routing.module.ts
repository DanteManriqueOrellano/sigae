import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeListaexpedientesComponent } from './home.lista.expediente/listaexpediente.component';
import { HomeListamodulotrabajoComponent } from './home.lista.modulo.trabajo/listamodulotrabajo.component';
import { HomeListaobrasComponent } from './home.lista.obras/listaobras.component';

const routes: Routes = [
  {
    path:'',
    component:HomeListamodulotrabajoComponent,
    children:[
      {
        path:'listaobras',
        component:HomeListaobrasComponent
      },
      {
        path:'listaexpedientes',
        component:HomeListaexpedientesComponent
      }
    ]
  },
  
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full' 
  },

];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
