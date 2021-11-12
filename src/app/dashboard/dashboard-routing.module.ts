import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObraResolveRoute } from './resolversrouters/obra.resolve.route';
import { ShellDashboardComponent } from './shell.dashboard/shell.dashboard.component';

const routes: Routes = [
  {
    path:'obra/:id',
    component:ShellDashboardComponent,
    resolve: {aliasRouteObra:ObraResolveRoute}
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