"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var myhome_component_1 = require("./todo/myhome/myhome.component");
var envio_component_1 = require("./todo/envio/envio.component");
var mycontact_component_1 = require("./todo/mycontact/mycontact.component");
var mylocation_component_1 = require("./todo/mylocation/mylocation.component");
var shopping_component_1 = require("./todo/shopping/shopping.component");

var routes = [
    { path: '', component: myhome_component_1.MyhomeComponent },
    // {path:'productos', component:MyproductComponent},
    { path: 'envio', component: envio_component_1.EnvioComponent },
    { path: 'location', component: mylocation_component_1.MylocationComponent },
    { path: 'contact', component: mycontact_component_1.MycontactComponent },
    { path: 'productos', component: shopping_component_1.ShoppingComponent },    
    { path: "**", pathMatch: "full", redirectTo: "" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
