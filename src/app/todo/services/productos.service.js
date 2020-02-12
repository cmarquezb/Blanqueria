"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ProductosService = /** @class */ (function () {
    function ProductosService(loadingService) {
        this.loadingService = loadingService;
        this.products = [
            {
                id: 1,
                text: "Everfresh Flowers",
                image: ["https://ledscreensandlights.com/wp-content/uploads/2018/08/9.gif"]
            },
            {
                id: 2,
                text: "Festive Deer",
                image: ["http://www.dkuniqueproduct.com/assets/images/3d-hologram-led-fan-500x500-2-500x500.jpg"]
            },
            {
                id: 3,
                text: "Morning Greens",
                image: ["http://www.getsygnal.com/uploads/products/3147701531479054.gif"]
            },
            {
                id: 4,
                text: "Everfresh Flowers",
                image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
            },
            {
                id: 5,
                text: "Festive Deer",
                image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
            },
            {
                id: 6,
                text: "Everfresh Flowers",
                image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
            },
            {
                id: 7,
                text: "Festive Deer",
                image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
            },
            {
                id: 8,
                text: "Morning Greens",
                image: ["http://pngimg.com/uploads/running_shoes/running_shoes_PNG5827.png"]
            },
            {
                id: 9,
                text: "Everfresh Flowers",
                image: ["http://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8109.png"]
            },
            {
                id: 10,
                text: "Festive Deer",
                image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
            },
            {
                id: 11,
                text: "Morning Greens",
                image: ["http://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png"]
            },
            {
                id: 12,
                text: "Everfresh Flowers",
                image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
            },
            {
                id: 13,
                text: "Festive Deer",
                image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
            },
            {
                id: 14,
                text: "Everfresh Flowers",
                image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
            },
        ];
        this.simillarProducts = [
            {
                id: 1,
                text: "Everfresh Flowers",
                image: ["https://ledscreensandlights.com/wp-content/uploads/2018/08/9.gif"]
            },
            {
                id: 2,
                text: "Festive Deer",
                image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
            },
            {
                id: 3,
                text: "Morning Greens",
                image: ["http://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png"]
            },
            {
                id: 4,
                text: "Everfresh Flowers",
                image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
            },
        ];
    }
    ProductosService.prototype.getAllProducts = function () {
        return this.products;
    };
    ProductosService.prototype.getSimillarProducts = function () {
        return this.simillarProducts;
    };
    ProductosService.prototype.getSingleProduct = function (id) {
        var temp;
        this.products.forEach(function (element) {
            if (element.id == id) {
                temp = element;
            }
        });
        var loading = false;
        this.loadingService.progressEnable.next(loading);
        return new rxjs_1.Observable(function (observer) { return observer.next(temp); });
    };
    ProductosService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductosService);
    return ProductosService;
}());
exports.ProductosService = ProductosService;
