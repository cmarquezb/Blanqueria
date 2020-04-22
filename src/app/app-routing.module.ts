import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyhomeComponent } from './todo/myhome/myhome.component';
import { EnvioComponent } from './todo/envio/envio.component';
import { MycontactComponent } from './todo/mycontact/mycontact.component';
import { MyproductComponent } from './todo/myproduct/myproduct.component';
import { MylocationComponent } from './todo/mylocation/mylocation.component';
import { ShoppingComponent } from './todo/shopping/shopping.component';
import { DetalleproductoComponent} from './todo/detalleproducto/detalleproducto.component';
import { AlmohadasComponent} from './todo/almohadas/almohadas.component';
import { ColchonesComponent} from './todo/colchones/colchones.component';
import { ConjuntosComponent } from './todo/conjuntos/conjuntos.component';
import { CubrecamasComponent } from './todo/cubrecamas/cubrecamas.component';
import { SabanasComponent } from './todo/sabanas/sabanas.component';
import { ToallasComponent } from './todo/toallas/toallas.component';
import { PromocionesComponent } from './todo/promociones/promociones.component';
import { MyformComponent} from './todo/myform/myform.component';

//import { from } from 'rxjs';


const routes: Routes = [
  {path:'', component:MyhomeComponent}, 
  {path:'productos', component:MyproductComponent},
  {path:'envio', component:EnvioComponent},
  {path:'location', component:MylocationComponent},
  {path:'contact', component:MycontactComponent},
  {path:'shopping', component:ShoppingComponent},
  {path:'detalle/:id', component:DetalleproductoComponent},
  {path:'almohadas/:id', component:AlmohadasComponent},
  {path:'colchones/:id', component:ColchonesComponent},
  {path:'conjuntos/:id', component:ConjuntosComponent},
  {path:'cubrecamas/:id', component:CubrecamasComponent},
  {path:'sabanas/:id', component:SabanasComponent},
  {path:'toallas/:id', component:ToallasComponent},
  {path:'promociones', component:PromocionesComponent},
  {path:'ventas/:id', component:MyformComponent},
  {path: "**", pathMatch: "full", redirectTo: ""}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
