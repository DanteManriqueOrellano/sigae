import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path:'listamodulotrabajo',
    loadChildren: ()=>import('../home/home.module').then(m=>m.HomeModule)
  },

  {
    path:'dashboard',
    loadChildren:()=>import('../dashboard/dashboard.module').then(m=>m.DashboardModule)

  },
  {
    path:'',
    redirectTo:'listamodulotrabajo',
    pathMatch: 'full' 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
