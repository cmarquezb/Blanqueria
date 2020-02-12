"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var productos_service_1 = require("./productos.service");
describe('ProductosService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(productos_service_1.ProductosService);
        expect(service).toBeTruthy();
    });
});
