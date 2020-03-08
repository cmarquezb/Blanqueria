import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { MyhomeComponent } from './todo/myhome/myhome.component';
import { MyformComponent } from './todo/myform/myform.component';
import { MymenuComponent } from './todo/mymenu/mymenu.component';
import { MyaboutComponent } from './todo/myabout/myabout.component';
import { MyproductComponent } from './todo/myproduct/myproduct.component';
import { MycontactComponent } from './todo/mycontact/mycontact.component';
import { EnvioComponent } from './todo/envio/envio.component';
import { FootComponent } from './todo/foot/foot.component';
import { MylocationComponent } from './todo/mylocation/mylocation.component';
import { AddComponent } from './todo/productos/add/add.component';
import { EditComponent } from './todo/productos/edit/edit.component';
import { ViewComponent } from './todo/productos/view/view.component';

import { ShoppingComponent } from './todo/shopping/shopping.component';
import { ProductosService } from './todo/services/productos.service';
import { DetalleproductoComponent } from './todo/detalleproducto/detalleproducto.component';
import { DestacadoComponent } from './todo/destacado/destacado.component';
import { MymarcaComponent } from './todo/mymarca/mymarca.component';
import { MymodeloComponent } from './todo/mymodelo/mymodelo.component';
import { MymaterialComponent } from './todo/mymaterial/mymaterial.component';
import { MytiposComponent } from './todo/mytipos/mytipos.component';
import { ColchonesComponent } from './todo/colchones/colchones.component';
import { SabanasComponent } from './todo/sabanas/sabanas.component';
import { ToallasComponent } from './todo/toallas/toallas.component';
import { CubrecamasComponent } from './todo/cubrecamas/cubrecamas.component';
import { AlmohadasComponent } from './todo/almohadas/almohadas.component';
import { ConjuntosComponent } from './todo/conjuntos/conjuntos.component';
import { TruncatePipe } from './truncate.pipe';
import { PromocionesService } from './todo/services/promociones.service';
import { PromocionesComponent} from './todo/promociones/promociones.component';
import { from } from 'rxjs';
/*
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';*/

@NgModule({
  declarations: [
    AppComponent,
    MyhomeComponent,
    MyformComponent,
    MymenuComponent,
    MyaboutComponent,
    MyproductComponent,
    MycontactComponent,
    EnvioComponent,
    FootComponent,
    MylocationComponent,
    AddComponent,
    EditComponent,
    ViewComponent,
    ShoppingComponent,
    DetalleproductoComponent,
    DestacadoComponent,
    MymarcaComponent,
    MymodeloComponent,
    MymaterialComponent,
    MytiposComponent,
    ColchonesComponent,
    SabanasComponent,
    ToallasComponent,
    CubrecamasComponent,
    AlmohadasComponent,
    ConjuntosComponent,
    PromocionesComponent,
    TruncatePipe    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    PopoverModule.forRoot(),
    TabsModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    SortableModule.forRoot(),
    FormsModule,
    HttpClientModule,
    FilterPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule 
    /*,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule*/
  ],
  providers: [
    ProductosService,
    PromocionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
