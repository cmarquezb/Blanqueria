import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
//import { from } from 'rxjs';
import { ShoppingComponent } from './todo/shopping/shopping.component';
import { ProductosService } from './todo/services/productos.service';
import { DetalleproductoComponent } from './todo/detalleproducto/detalleproducto.component';
import { DestacadoComponent } from './todo/destacado/destacado.component';
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
    DestacadoComponent
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
    FilterPipeModule 
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
