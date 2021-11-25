import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaproductoComponent } from '../despachoinsumo/buscaproducto/buscaproducto.component';
import { ListaInsumosBaseResolver } from '../despachoinsumo/buscaproducto/resolver/lista.insumos.base.resolver';
import { EditcantidaddespachoComponent } from '../despachoinsumo/editcantidaddespacho/editcantidaddespacho.component';
import { ObraResolveRoute } from './resolversrouters/obra.resolve.route';
import { ShellDashboardComponent } from './shell.dashboard/shell.dashboard.component';

const routes: Routes = [
  {
    path:'obra/:id',
    component:ShellDashboardComponent,
    //resolve: {aliasRouteObra:ObraResolveRoute}//no resuelve nada por que necesita el id que viene desde lista obras y trae el id de la obra
    children:[{
      path:'despacho',
      component:BuscaproductoComponent,//este si carga son resolve y se carga con ActivatedRoute
      resolve:{aliasRouteListaInsumosBaseResolver:ListaInsumosBaseResolver} 

    }]
  },
  {
    path:'expediente/:id',
    component:ShellDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
