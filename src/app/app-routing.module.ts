import { MapsComponent } from './components/maps/maps.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalespersonComponent } from './components/salesperson/salesperson.component';
import { RoutePlanComponent } from './components/route-plan/route-plan.component';



const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'route-plan', component:RoutePlanComponent},
  {path: 'salespersons', component:SalespersonComponent},
  {path: 'maps', component: MapsComponent },
  {path: '', redirectTo: 'login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
