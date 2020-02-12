"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tree_1 = require("@angular/cdk/tree");
var tree_2 = require("@angular/material/tree");
var ViewComponent = /** @class */ (function () {
    function ViewComponent(router, productService) {
        this.router = router;
        this.productService = productService;
        this.carouselOptions = {
            items: 1,
            dots: false,
            navigation: false,
            loop: true,
            margin: 10,
            autoplay: true,
            animateOut: 'fadeOut',
            autoHeight: true,
            autoHeightClass: 'owl-height',
        };
        this.products = [];
        this._transformer = function (node, level) {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
            };
        };
        this.treeControl = new tree_1.FlatTreeControl(function (node) { return node.level; }, function (node) { return node.expandable; });
        this.treeFlattener = new tree_2.MatTreeFlattener(this._transformer, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return node.children; });
        this.dataSource = new tree_2.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.hasChild = function (_, node) { return node.expandable; };
        this.dataSource.data = TREE_DATA;
        this.products = this.productService.getAllProducts();
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent.prototype.productHome = function (id) {
        this.router.navigate(['productos/' + id]);
    };
    ViewComponent = __decorate([
        core_1.Component({
            selector: 'app-view',
            templateUrl: './view.component.html',
            styleUrls: ['./view.component.scss']
        })
    ], ViewComponent);
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;
var TREE_DATA = [
    {
        name: 'Mens',
        children: [
            { name: 'Shirt' },
            { name: 'Shoes' },
            { name: 'Jeans' },
        ]
    }, {
        name: 'Womens',
        children: [
            { name: 'Shirt' },
            { name: 'Shoes' },
            { name: 'Jeans' },
        ]
    }, {
        name: 'Child',
        children: [
            { name: 'Shirt' },
            { name: 'Shoes' },
            { name: 'Jeans' },
        ]
    },
];
