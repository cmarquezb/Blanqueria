import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyhomeComponent } from './todo/myhome/myhome.component';
import { EnvioComponent } from './todo/envio/envio.component';
import { MycontactComponent } from './todo/mycontact/mycontact.component';
import { MyproductComponent } from './todo/myproduct/myproduct.component';
import { MylocationComponent } from './todo/mylocation/mylocation.component';
import { ShoppingComponent } from './todo/shopping/shopping.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path:'', component:MyhomeComponent}, 
 // {path:'productos', component:MyproductComponent},
  {path:'envio', component:EnvioComponent},
  {path:'location', component:MylocationComponent},
  {path:'contact', component:MycontactComponent},
  {path:'productos', component:ShoppingComponent},
  {path: "**", pathMatch: "full", redirectTo: ""}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
