"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var angular_font_awesome_1 = require("angular-font-awesome");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var myhome_component_1 = require("./todo/myhome/myhome.component");
var myform_component_1 = require("./todo/myform/myform.component");
var animations_1 = require("@angular/platform-browser/animations");
var accordion_1 = require("ngx-bootstrap/accordion");
var carousel_1 = require("ngx-bootstrap/carousel");
var popover_1 = require("ngx-bootstrap/popover");
var tabs_1 = require("ngx-bootstrap/tabs");
var typeahead_1 = require("ngx-bootstrap/typeahead");
var datepicker_1 = require("ngx-bootstrap/datepicker");
var dropdown_1 = require("ngx-bootstrap/dropdown");
var sortable_1 = require("ngx-bootstrap/sortable");
var mymenu_component_1 = require("./todo/mymenu/mymenu.component");
var myabout_component_1 = require("./todo/myabout/myabout.component");
var myproduct_component_1 = require("./todo/myproduct/myproduct.component");
var mycontact_component_1 = require("./todo/mycontact/mycontact.component");
var envio_component_1 = require("./todo/envio/envio.component");
var foot_component_1 = require("./todo/foot/foot.component");
var mylocation_component_1 = require("./todo/mylocation/mylocation.component");
var add_component_1 = require("./todo/productos/add/add.component");
var edit_component_1 = require("./todo/productos/edit/edit.component");
var view_component_1 = require("./todo/productos/view/view.component");
var shopping_component_1 = require("./todo/shopping/shopping.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                myhome_component_1.MyhomeComponent,
                myform_component_1.MyformComponent,
                mymenu_component_1.MymenuComponent,
                myabout_component_1.MyaboutComponent,
                myproduct_component_1.MyproductComponent,
                mycontact_component_1.MycontactComponent,
                envio_component_1.EnvioComponent,
                foot_component_1.FootComponent,
                mylocation_component_1.MylocationComponent,
                add_component_1.AddComponent,
                edit_component_1.EditComponent,
                view_component_1.ViewComponent,
                shopping_component_1.ShoppingComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                angular_font_awesome_1.AngularFontAwesomeModule,
                accordion_1.AccordionModule.forRoot(),
                carousel_1.CarouselModule.forRoot(),
                popover_1.PopoverModule.forRoot(),
                tabs_1.TabsModule.forRoot(),
                typeahead_1.TypeaheadModule.forRoot(),
                datepicker_1.BsDatepickerModule.forRoot(),
                dropdown_1.BsDropdownModule.forRoot(),
                sortable_1.SortableModule.forRoot(),
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
