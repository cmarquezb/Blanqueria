function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-mymenu></app-mymenu>\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/almohadas/almohadas.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/almohadas/almohadas.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoAlmohadasAlmohadasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <!-- ##### Shop Grid Area Start ##### -->\n <div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-2 collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100\">            \n            <nav class=\"nav flex-column  menusito\">\n                <a class=\"nav-link active\" href=\"#\" [routerLink]=\"['/shopping']\">Todos</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/almohadas',1]\">Almohadas</a>                \n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/colchones',2]\">Colchones</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/conjuntos',3]\">Conjuntos</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/cubrecamas',7]\">Cubracamas</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/sabanas',4]\">Sábanas</a>                \n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/toallas',5]\">Toallas</a>                \n            </nav>       \n        </div>\n        <div class=\"col pt-2\">\n            <div class=\"col-12\">\n                <div class=\"page-title text-center\">\n                    <h3 style=\"color: #a4b4e4;\">Almohadas</h3>\n                </div>\n            </div>\n            <div class=\"card-deck col-12\"> \n                <div class=\"card-group\"  style=\"width: 16rem; height: 25rem;\" *ngFor=\"let articulo of arrayproductos | paginate: {itemsPerPage: 8, currentPage: p}\">     \n                    <div class=\"card\">\n                        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"{{articulo.ruta}}{{articulo.nom_imgagen}}\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-title text-center\">{{articulo.nom_tipo_prod}}</h6>\n                            <h6 class=\"card-text text-center\"><small>{{articulo.nom_marca}}-{{articulo.nom_modelo | truncate: 15}}:{{articulo.largo}}x{{articulo.ancho}}</small></h6>     \n                        </div>\n                        <div>\n                            <p class=\"card-text\"><small>Desc: {{articulo.material_interno | truncate: 50}}</small></p>\n                        </div>\n                        <div>\n                            <p class=\"price text-center\"><strong>${{articulo.precio_sugerido/1000}}</strong></p>  \n                        </div>            \n                        <div class=\"card-footer\">                \n                            <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"['/detalle',articulo.idproducto]\">Ver detalle</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n    </div>\n    <div class=\"col-12\"></div>\n </div>\n\n<app-foot></app-foot>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/colchones/colchones.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/colchones/colchones.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoColchonesColchonesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <!-- ##### Shop Grid Area Start ##### -->\n <div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-2 collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100\">            \n            <nav class=\"nav flex-column  menusito\">\n                <a class=\"nav-link active\" href=\"#\" [routerLink]=\"['/shopping']\">Todos</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/almohadas',1]\">Almohadas</a>                \n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/colchones',2]\">Colchones</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/conjuntos',3]\">Conjuntos</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/cubrecamas',7]\">Cubracamas</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/sabanas',4]\">Sábanas</a>                \n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/toallas',5]\">Toallas</a>                \n            </nav>       \n        </div>\n        <div class=\"col pt-2\">\n            <div class=\"col-12\">\n                <div class=\"page-title text-center\">\n                    <h3 style=\"color: #a4b4e4;\">Colchones</h3>\n                </div>\n            </div>\n            <div class=\"card-deck col-12\"> \n                <div class=\"card-group\"  style=\"width: 16rem; height: 25rem;\" *ngFor=\"let articulo of arrayproductos | paginate: {itemsPerPage: 8, currentPage: p}\">     \n                    <div class=\"card\">\n                        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"{{articulo.ruta}}{{articulo.nom_imgagen}}\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-title text-center\">{{articulo.nom_tipo_prod}}</h6>\n                            <h6 class=\"card-text text-center\"><small>{{articulo.nom_marca}}-{{articulo.nom_modelo | truncate: 15}}:{{articulo.largo}}x{{articulo.ancho}}</small></h6>     \n                        </div>\n                        <div>\n                            <p class=\"card-text\"><small>Desc: {{articulo.material_interno | truncate: 50}}</small></p>\n                        </div>\n                        <div>\n                            <p class=\"price text-center\"><strong>${{articulo.precio_sugerido/1000}}</strong></p>  \n                        </div>            \n                        <div class=\"card-footer\">                \n                            <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"['/detalle',articulo.idproducto]\">Ver detalle</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n    </div>\n    <div class=\"col-12\"></div>\n </div>\n <app-foot></app-foot>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/conjuntos/conjuntos.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/conjuntos/conjuntos.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoConjuntosConjuntosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <!-- ##### Shop Grid Area Start ##### -->\n <div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-2 collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100\">            \n            <nav class=\"nav flex-column  menusito\">\n                <a class=\"nav-link active\" href=\"#\" [routerLink]=\"['/shopping']\">Todos</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/almohadas',1]\">Almohadas</a>                \n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/colchones',2]\">Colchones</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/conjuntos',3]\">Conjuntos</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/cubrecamas',7]\">Cubracamas</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/sabanas',4]\">Sábanas</a>                \n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/toallas',5]\">Toallas</a>                \n            </nav>       \n        </div>\n        <div class=\"col pt-2\">\n            <div class=\"col-12\">\n                <div class=\"page-title text-center\">\n                    <h3 style=\"color: #a4b4e4;\">Conjuntos</h3>\n                </div>\n            </div>\n            <div class=\"card-deck col-12\"> \n                <div class=\"card-group\"  style=\"width: 16rem; height: 25rem;\" *ngFor=\"let articulo of arrayproductos | paginate: {itemsPerPage: 8, currentPage: p}\">     \n                    <div class=\"card\">\n                        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"{{articulo.ruta}}{{articulo.nom_imgagen}}\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-title text-center\">{{articulo.nom_tipo_prod}}</h6>\n                            <h6 class=\"card-text text-center\"><small>{{articulo.nom_marca}}-{{articulo.nom_modelo | truncate: 15}}:{{articulo.largo}}x{{articulo.ancho}}</small></h6>     \n                        </div>\n                        <div>\n                            <p class=\"card-text\"><small>Desc: {{articulo.material_interno | truncate: 50}}</small></p>\n                        </div>\n                        <div>\n                            <p class=\"price text-center\"><strong>${{articulo.precio_sugerido/1000}}</strong></p>  \n                        </div>            \n                        <div class=\"card-footer\">                \n                            <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"['/detalle',articulo.idproducto]\">Ver detalle</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n    </div>\n    <div class=\"col-12\"></div>\n </div>\n <app-foot></app-foot>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/cubrecamas/cubrecamas.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/cubrecamas/cubrecamas.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoCubrecamasCubrecamasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <!-- ##### Shop Grid Area Start ##### -->\n <div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-2 collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100\">            \n            <nav class=\"nav flex-column  menusito\">\n                <a class=\"nav-link active\" href=\"#\" [routerLink]=\"['/shopping']\">Todos</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/almohadas',1]\">Almohadas</a>                \n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/colchones',2]\">Colchones</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/conjuntos',3]\">Conjuntos</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/cubrecamas',7]\">Cubracamas</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/sabanas',4]\">Sábanas</a>                \n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/toallas',5]\">Toallas</a>                \n            </nav>       \n        </div>\n        <div class=\"col pt-2\">\n            <div class=\"col-12\">\n                <div class=\"page-title text-center\">\n                    <h3 style=\"color: #a4b4e4;\">Cubrecamas</h3>\n                </div>\n            </div>\n            <div class=\"card-deck col-12\"> \n                <div class=\"card-group\"  style=\"width: 16rem; height: 25rem;\" *ngFor=\"let articulo of arrayproductos | paginate: {itemsPerPage: 8, currentPage: p}\">     \n                    <div class=\"card\">\n                        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"{{articulo.ruta}}{{articulo.nom_imgagen}}\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-title text-center\">{{articulo.nom_tipo_prod}}</h6>\n                            <h6 class=\"card-text text-center\"><small>{{articulo.nom_marca}}-{{articulo.nom_modelo | truncate: 15}}:{{articulo.largo}}x{{articulo.ancho}}</small></h6>     \n                        </div>\n                        <div>\n                            <p class=\"card-text\"><small>Desc: {{articulo.material_interno | truncate: 50}}</small></p>\n                        </div>\n                        <div>\n                            <p class=\"price text-center\"><strong>${{articulo.precio_sugerido/1000}}</strong></p>  \n                        </div>            \n                        <div class=\"card-footer\">                \n                            <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"['/detalle',articulo.idproducto]\">Ver detalle</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n    </div>\n    <div class=\"col-12\"></div>\n </div>\n <app-foot></app-foot>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/destacado/destacado.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/destacado/destacado.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoDestacadoDestacadoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row-1\">\n    <h4 class=\"text-center\">PRODUCTOS DESTACADOS</h4>  \n    <div class=\"card-deck col-12\">    \n        <div class=\"card\" style=\"width: 18rem; height: 25rem;\" *ngFor=\"let articulo of result; let i=index\">\n            <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"{{articulo.ruta}}{{articulo.nom_imgagen}}\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n                <h6 class=\"card-title text-center\">{{articulo.nom_tipo_prod}}</h6>\n                <h6 class=\"card-text text-center\"><small>{{articulo.nom_marca}}-{{articulo.nom_modelo}}</small></h6>     \n            </div>\n            <div>\n                <p class=\"card-text\"><small>Desc-{{i+1}}: {{articulo.material_interno}}</small></p>\n            </div>\n            <div>\n                <p class=\"price text-center\"><strong>${{articulo.precio_sugerido/1000}}</strong></p>  \n            </div>            \n            <div class=\"card-footer\">                \n                <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"['detalle',articulo.idproducto]\">Ver detalle</a>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Ak solo los tipos de productos-->\n<div class=\"row-1\">\n    <h4 class=\"text-center\">CATEGORIAS</h4>\n    <div class=\"card-deck col-12\">     \n        <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\n            <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"/assets/images/colchon001.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title text-center\">Colchones</h5>\n                <p class=\"card-text text-center\">Marcas Piero, Cannon, Suavegon, Suavestar</p>  \n            </div>\n            <div class=\"card-footer\">\n                <a href=\"#\" class=\"btn btn-primary\"  [routerLink]=\"['colchones',2]\">Ver detalle</a>\n            </div>\n        </div>\n        <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\n            <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\" src=\"/assets/images/047-3.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n            <h5 class=\"card-title text-center\">Conjuntos</h5>\n            <p class=\"card-text text-center\">Marcas Piero, Cannon, Suavegon, Suavestar</p>\n            \n            </div>\n            <div class=\"card-footer\">\n                <a href=\"#\" class=\"btn btn-primary\"  [routerLink]=\"['conjuntos',3]\">Ver detalle</a>\n            </div>\n        </div>\n        <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\n            <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\" src=\"/assets/images/017.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n            <h5 class=\"card-title text-center\">Sábanas</h5>\n            <p class=\"card-text text-center\">De la marca Piero, suavidad, confort, resortes.</p>\n            \n            </div>\n            <div class=\"card-footer\">\n                <a href=\"#\" class=\"btn btn-primary\"  [routerLink]=\"['sabanas',4]\">Ver detalle</a>\n            </div>\n        </div>\n        <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\n            <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"/assets/images/046-2.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n            <h5 class=\"card-title text-center\">Cubre Camas</h5>\n            <p class=\"card-text text-center\">MArcas de prestigio</p>   \n            </div>\n            <div class=\"card-footer\">\n                <a href=\"#\" class=\"btn btn-primary\"  [routerLink]=\"['cubrecamas',7]\">Ver detalle</a>\n            </div>\n        </div>\n        <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\n            <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"/assets/images/035-2.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n            <h5 class=\"card-title text-center\">Toallas</h5>\n            <p class=\"card-text text-center\">Marcas de prestigio</p>\n            \n            </div>\n            <div class=\"card-footer\">\n                <a href=\"#\" class=\"btn btn-primary\"  [routerLink]=\"['toallas',5]\">Ver detalle</a>\n            </div>\n        </div>\n        <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\n            <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"/assets/images/019.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n            <h5 class=\"card-title text-center\">Almohadas</h5>\n            <p class=\"card-text text-center\">Marcas Piero, Suavestar</p>\n            \n            </div>\n            <div class=\"card-footer\">\n                <a href=\"#\" class=\"btn btn-primary\"  [routerLink]=\"['almohadas',1]\">Ver detalle</a>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/detalleproducto/detalleproducto.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/detalleproducto/detalleproducto.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoDetalleproductoDetalleproductoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\" *ngFor=\"let articulo of arrayproductos; let i=index\">\n    \n        <div class=\"row\">\n            <div class=\"col-4\">\n                <img class=\"img-responsive\" src=\"{{articulo.ruta}}{{articulo.nom_imgagen}}\" style=\"width: 100%; height: 400px; align-self: center;\" alt=\"\">\n            </div>\n            <div class=\"col-8\">\n                <h3><a href=\"\">{{articulo.nom_tipo_prod}}</a></h3>\n                <h4><small>{{articulo.nom_marca}}-{{articulo.nom_modelo}}</small></h4>\n                <p>Desc-{{articulo.idproducto}}: {{articulo.material_externo}}</p>\n                <p>Características: {{articulo.material_interno}}</p>\n                <p>Det. Adicional: {{articulo.descripcion_adicional}}</p>\n                <p>Alto: {{articulo.alto}} x Ancho: {{articulo.ancho}} x Largo: {{articulo.largo}}</p>\n                <p>Garantia: {{articulo.garantia}}</p>\n                <p>Precio: <strong>$ {{articulo.precio_sugerido/1000}}</strong></p>  \n                <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"\">Comprar Mercado libre</a>   \n            </div>            \n        </div>              \n</div>\n\n<app-foot></app-foot>\n\n\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/envio/envio.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/envio/envio.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoEnvioEnvioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12 text-center\">\n    <h4>Cargos de envío en la República Argentina</h4>\n    <img src=\"/assets/images/MapaEnvio500x600.jpg\" alt=\"\">\n</div>\n<app-foot></app-foot>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/foot/foot.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/foot/foot.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoFootFootComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\" style=\"background-color: rgb(52, 143, 185);\">\n    <div class=\"col-md-4 text-light\">   \n            <h4> Horarios de atención</h4>\n            <span class=\"time ml-auto\"> Lunes  mañana->9:00-13:00 tarde->16:00-20:00</span>\n            <span class=\"time ml-auto\"> Martes mañana->9:00-13:00 tarde->16:00-20:00</span>\n            <span class=\"time ml-auto\">Miércoles mañana->9:00-13:00 tarde->16:00-20:00</span>\n            <span class=\"time ml-auto\">Jueves mañana->9:00-13:00 tarde->16:00-20:00</span>\n            <span class=\"time ml-auto\">Viernes mañana->9:00-13:30 tarde->16:00-20:00</span>\n            <span class=\"time ml-auto\">Sábado  mañana->9:00-13:00 tarde->16:00-20:00</span>\n            <span class=\"time ml-auto\">Domingo**************** cerrado *****************</span>\n    </div>\n    <div class=\"col-md-4 text-light\">  \n        <ul>\n            <h4>Nuestra dirección</h4>\n            <li>\n                <span class=\"fa fa-map-marker icons-left\" aria-hidden=\"true\">  Gdor. Inocencio Arias 2215 Castelar, Gran Buenos Aires</span>                           \n            </li>\n            <li>\n                <span class=\"fa fa-map-marker icons-left\" aria-hidden=\"true\"> Av. Rivadavia 21526 Ituzaingó, Gran Buenos Aires</span>                           \n            </li>\n            <li>\n                <span class=\"fa fa-phone icons-left\" aria-hidden=\"true\"> +54-011 4627-5454</span>\n            </li>\n            <li>\n                <span class=\"fa fa-envelope\"><a>  info@lablanqueria.com.ar</a></span>\n            </li>\n            <li>\n                <span class=\"fa fa-fax\" aria-hidden=\"true\">  +54-911-1111-1111</span>\n            </li>\n            <li>\n                <span class=\"fa fa-windows\" aria-hidden=\"true\">  http//www.lablanquería.com.ar</span>\n            </li>\n        </ul>\n    </div>\n    <div class=\"col-md-4 text-light\">        \n        <ul>\n            <h4> Siguenos en nuestras redes</h4>\n            <li>\n                <span class=\"fa fa-facebook\" aria-hidden=\"true\">  Facebook</span>\n            </li>\n            <li>\n                <span class=\"fa fa-instagram\" aria-hidden=\"true\">  Instagram</span>\n            </li>\n        </ul>\n    </div>\n</div>\n<div class=\"row\">\n<footer class=\"col-md-12\" style=\"text-align: center; background-color: rgb(226, 230, 236);\">\n    <p>© 2020 La Blanquería creada en 1980</p>\n</footer>    \n</div> \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/myabout/myabout.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/myabout/myabout.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoMyaboutMyaboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\" style=\"background-color: rgb(226, 230, 236);\">\n    <div class=\"col-md-4\">\n        <img src=\"/assets/images/055.jpg\" alt=\"Third slide\" style=\"display: block; width: 100%; height: 100%;align-self: auto;\">\n    </div>\n    <div class=\"col-md-8\">\n        <h3 class=\"text-center\">\"La Blanquería\"</h3>\n        <p>Encontrarás un mundo de productos, para poder soñar, descansar, o despertar bajo el placer de la suavidad y confort para iniciar tus proyectos</p>\n        <p>Somos una empresa con experiencia, interesados en ofrecer calidad en nuestros productos, satisfacer los requerimientos de proyectos Inhouse. \n          su preferencia por todos estos años nos avala.\n        </p>\n      </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mycontact/mycontact.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mycontact/mycontact.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoMycontactMycontactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-12 elform\">\n<div class=\"modal-dialog text-center\">\n <div class=\"col-md-12 main-section\">\n     <div class=\"modal-content\">\n        <div class=\"col-12 user-img\">\n            <img src=\"/assets/images/avatar0.png\"/>  \n            <legend class=\"text-center user-header\">Contacto</legend>           \n        </div>        \n        <form class=\"col-12 form-horizontal user-form\" method=\"post\">                                       \n            <div class=\"form-group\" id=\"user1-group\">   \n                <i class=\"fa fa-user user1-group\"></i>                  \n                <input id=\"fname\" name=\"name\" type=\"text\" placeholder=\"Nombre\" class=\"form-control\">  \n            </div>\n            <div class=\"form-group\" id=\"user2-group\">  \n                <i class=\"fa fa-user-plus user2-group\"></i>                                   \n                <input id=\"lname\" name=\"name\" type=\"text\" placeholder=\"Apellido\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\" id=\"user3-group\">  \n                <i class=\"fa fa-envelope user3-group\"></i>                 \n                <input id=\"email\" name=\"email\" type=\"text\" placeholder=\"Email\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\" id=\"user4-group\">    \n                <i class=\"fa fa-phone-square user4-group\"></i>                   \n                <input id=\"phone\" name=\"phone\" type=\"text\" placeholder=\"Fono/celular\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\" id=\"user5-group\">                   \n                <textarea class=\"form-control\" id=\"message\" name=\"mensage\" placeholder=\"Ingresa tus comentarios, proyectos y consultas.\" rows=\"7\"></textarea>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary btn-md\"><i class=\"fa fa-arrow-right\"> Enviar</i></button>            \n        </form>\n     </div>\n </div>\n</div>\n</div>\n\n<app-foot></app-foot>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/myform/myform.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/myform/myform.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoMyformMyformComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>myform works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/myhome/myhome.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/myhome/myhome.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoMyhomeMyhomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div  style=\"color: black;\">\n      <carousel [noPause]=\"true\">\n        <slide>\n          <img src=\"/assets/images/008-3.jpg\" alt=\"First slide\" style=\"display: block; width: 100%; height: calc(100% / 8 - 0px); align-self: auto; margin-bottom: 0px;\">\n          <div class=\"carousel-caption d-none d-md-block\"> \n            <h3 style=\"color: black;\">Conjuntos</h3>\n            <p style=\"color: black;\">Un sueños para disfrutar, colchones y somiers</p>\n          </div>\n        </slide>\n        <slide>\n          <img src=\"/assets/images/016-3.jpg\" alt=\"Second slide\" style=\"display: block; width: 100%; height: calc(100% / 8 - 0px);align-self: auto;\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h3 style=\"color: black;\">Sábanas</h3>\n            <p style=\"color: black;\">La delicadeza y suavidad te envuelve</p>\n          </div>\n        </slide>\n        <slide>\n          <img src=\"/assets/images/024-3.jpg\" alt=\"Third slide\" style=\"display: block; width: 100%; height: calc(100% / 8 - 0px);align-self: auto;\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h3 style=\"color: black;\">Almohadas</h3>\n            <p style=\"color: black;\">El apoyo de tu conciencia, solo descansará</p>\n          </div>\n        </slide>\n        <slide>\n          <img src=\"/assets/images/053-3.jpg\" alt=\"Third slide\" style=\"display: block; width: 100%; height: calc(100% / 8 - 0px);align-self: auto;\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h3 style=\"color: black;\">Tu vida</h3>\n            <p style=\"color: black;\">Solo una vida plena de disfrutar un buen descanso, traerá la alegrías de un despertar</p>\n          </div>\n        </slide>\n        <slide>\n          <img src=\"/assets/images/054-3.jpg\" alt=\"Third slide\" style=\"display: block; width: 100%; height: calc(100% / 8 - 0px);align-self: auto;\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h3 style=\"color: black;\">Tu futuro</h3>\n            <p style=\"color: black;\">El apoyo en tus inicios se envuelve en los recuerdos felices de algo suave</p>\n          </div>\n        </slide>       \n      </carousel>\n      </div>\n  </div>\n</div>\n<app-destacado></app-destacado>\n<app-myabout></app-myabout>\n<app-foot></app-foot>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mylocation/mylocation.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mylocation/mylocation.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoMylocationMylocationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-5\"> \n        <h4>Ubicación Castelar</h4>\n        <div class=\"contact-map\">\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.127723360195!2d-58.64164690000004!3d-34.6514772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8aa03b06315%3A0x577fb47ace5c3216!2sLa%20Blanquer%C3%ADa!5e0!3m2!1ses!2sar!4v1580453382228!5m2!1ses!2sar\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n        </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-5\"> \n        <h4>Ubicación Ituzaingo</h4>\n        <div class=\"contact-map\">\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.8336912283894!2d-58.665589785008784!3d-34.65890276792669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc0a0b059239d%3A0x2da8b016054a963d!2sAv.%20N%C3%A9stor%20Carlos%20Kirchner%2021529%2C%20B1714%20Ituzaing%C3%B3%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sus!4v1581084110632!5m2!1ses!2sus\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n        </div>\n    </div>\n</div>\n\n<app-foot></app-foot>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mymarca/mymarca.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mymarca/mymarca.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoMymarcaMymarcaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>mymarca works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mymaterial/mymaterial.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mymaterial/mymaterial.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoMymaterialMymaterialComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>mymaterial works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mymenu/mymenu.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mymenu/mymenu.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoMymenuMymenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: rgb(226, 230, 236);\">\n  <a class=\"navbar-brand\" href=\"/\">      \n    <img src=\"/assets/images/milogo.png\" alt=\"\"> \n  </a>\n  <button class = \"navbar-toggler\" type = \"button\" (click) = \"toggleNavbar ()\"> \n    <span class = \"navbar-toggler-icon\"> </span> \n  </button> \n  <div class = \"collapse navbar-collapse\" [ngClass] = \"{'show': navbarOpen}\">\n      <ul class=\"navbar-nav ml-auto\">        \n        <li class=\"nav-item active\">\n          <a class=\"nav-link scroll boton\" routerLink=\"/\" routerLinkActive=\"active\">\n            <button type=\"submit\" class=\"btn btn-primary btn-md boton\" id=\"boton\">Home</button>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link scroll boton\" routerLink=\"shopping\" routerLinkActive=\"active\">\n            <button type=\"submit\" class=\"btn btn-primary btn-md boton\" id=\"boton\">Shopping</button>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link scroll boton\" routerLink=\"/envio\" routerLinkActive=\"active\">\n            <button type=\"submit\" class=\"btn btn-primary btn-md boton\" id=\"boton\">Costos de envío</button>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link scroll boton\" routerLink=\"/location\" routerLinkActive=\"active\">\n            <button type=\"submit\" class=\"btn btn-primary btn-md boton\" id=\"boton\">Donde estamos</button>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link scroll boton\" routerLink=\"contact\" routerLinkActive=\"active\">\n            <button type=\"submit\" class=\"btn btn-primary btn-md boton\" id=\"boton\">Contactos</button>\n          </a>\n        </li>                   \n      </ul>\n    </div>\n  </nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mymodelo/mymodelo.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mymodelo/mymodelo.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoMymodeloMymodeloComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>mymodelo works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/myproduct/myproduct.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/myproduct/myproduct.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoMyproductMyproductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-3\" *ngFor=\"let articulo of arrayproductos[0] | paginate: {itemsPerPage: 8, currentPage: p}\">    \n    <div class=\"cart-content d-flex\">\n        <!-- Cart List Area  probar | orderBy:'name':true\" -->\n        <div class=\"cart-list\">\n            <!-- Single Cart Item -->\n            <div class=\"single-cart-item\">\n                <a href=\"#\" class=\"product-image\">\n                    <img src=\"{{articulo.ruta}}{{articulo.nom_imgagen}}\" style=\"width: 200px; height: 200px;\" alt=\"\">\n                    <!-- Cart Item Desc --> \n                    <div class=\"cart-item-desc\">\n                      <span class=\"product-remove\"><i class=\"fa fa-close\" aria-hidden=\"true\"></i></span>\n                        <span class=\"badge\">{{articulo.nom_tipo_prod}}</span>\n                        <h6>{{articulo.nom_marca}}-{{articulo.nom_modelo}}</h6>\n                        <p class=\"size\">Size: {{articulo.largo}}x{{articulo.ancho}}</p>\n                        <p class=\"color\">Desc: {{articulo.material_interno}} </p>\n                        <p class=\"price\">${{articulo.precio_sugerido}}</p>\n                    </div>\n                    <div>\n                        <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"\">Comprar Mercado libre</a> \n                    </div>\n                </a>\n            </div>\n        </div>    \n    </div>\n</div>\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mytipos/mytipos.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mytipos/mytipos.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoMytiposMytiposComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>mytipos works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/productos/add/add.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/productos/add/add.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoProductosAddAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>add works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/productos/edit/edit.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/productos/edit/edit.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoProductosEditEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>edit works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/productos/view/view.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/productos/view/view.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoProductosViewViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4 class=\"text-center\">PRODUCTOS DESTACADOS</h4>    \r\n<div class=\"card-deck\">    \r\n    <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\r\n        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"/assets/images/colchon001.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Colchón Renovation</h5>\r\n          <p class=\"card-text\">De la marca Piero, suavidad, confort, son algunas de sus características</p>     \r\n        </div>\r\n        <div class=\"card-footer center-block\">\r\n            <a href=\"#\" class=\"btn btn-primary\">Ver detalle</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\r\n        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\" src=\"/assets/images/colchon002.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          \r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <a href=\"#\" class=\"btn btn-primary\">Ver detalle</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\r\n        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\" src=\"/assets/images/colchon003.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Colchón Super</h5>\r\n          <p class=\"card-text\">De la marca Piero, suavidad, confort, resortes.</p>\r\n         \r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <a href=\"#\" class=\"btn btn-primary\">Ver detalle</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\r\n        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"/assets/images/colchon004.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          \r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <a href=\"#\" class=\"btn btn-primary\">Ver detalle</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\r\n        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"/assets/images/001.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n         \r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <a href=\"#\" class=\"btn btn-primary\">Ver detalle</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\r\n        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"/assets/images/002.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          \r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <a href=\"#\" class=\"btn btn-primary\">Ver detalle</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card-deck\">    \r\n    <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\r\n        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"/assets/images/colchon001.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Colchón Renovation</h5>\r\n          <p class=\"card-text\">De la marca Piero, suavidad, confort, son algunas de sus características</p>\r\n          \r\n        </div>\r\n        <div class=\"card-footer center-block\">\r\n            <a href=\"#\" class=\"btn btn-primary\">Ver detalle</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\r\n        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\" src=\"/assets/images/colchon002.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          \r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <a href=\"#\" class=\"btn btn-primary\">Ver detalle</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\r\n        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\" src=\"/assets/images/colchon003.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Colchón Super</h5>\r\n          <p class=\"card-text\">De la marca Piero, suavidad, confort, resortes.</p>\r\n         \r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <a href=\"#\" class=\"btn btn-primary\">Ver detalle</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\r\n        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"/assets/images/colchon004.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>   \r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <a href=\"#\" class=\"btn btn-primary\">Ver detalle</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\r\n        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"/assets/images/001.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n         \r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <a href=\"#\" class=\"btn btn-primary\">Ver detalle</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 18rem; height: 25rem;\">\r\n        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"/assets/images/002.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          \r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <a href=\"#\" class=\"btn btn-primary\">Ver detalle</a>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/sabanas/sabanas.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/sabanas/sabanas.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoSabanasSabanasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <!-- ##### Shop Grid Area Start ##### -->\n <div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-2 collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100\">            \n            <nav class=\"nav flex-column  menusito\">\n                <a class=\"nav-link active\" href=\"#\" [routerLink]=\"['/shopping']\">Todos</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/almohadas',1]\">Almohadas</a>                \n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/colchones',2]\">Colchones</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/conjuntos',3]\">Conjuntos</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/cubrecamas',7]\">Cubracamas</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/sabanas',4]\">Sábanas</a>                \n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/toallas',5]\">Toallas</a>                \n            </nav>       \n        </div>\n        <div class=\"col pt-2\">\n            <div class=\"col-12\">\n                <div class=\"page-title text-center\">\n                    <h3 style=\"color: #a4b4e4;\">Sábanas</h3>\n                </div>\n            </div>\n            <div class=\"card-deck col-12\"> \n                <div class=\"card-group\"  style=\"width: 16rem; height: 25rem;\" *ngFor=\"let articulo of arrayproductos | paginate: {itemsPerPage: 8, currentPage: p}\">     \n                    <div class=\"card\">\n                        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"{{articulo.ruta}}{{articulo.nom_imgagen}}\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-title text-center\">{{articulo.nom_tipo_prod}}</h6>\n                            <h6 class=\"card-text text-center\"><small>{{articulo.nom_marca}}-{{articulo.nom_modelo | truncate: 15}}:{{articulo.largo}}x{{articulo.ancho}}</small></h6>     \n                        </div>\n                        <div>\n                            <p class=\"card-text\"><small>Desc: {{articulo.material_interno | truncate: 50}}</small></p>\n                        </div>\n                        <div>\n                            <p class=\"price text-center\"><strong>${{articulo.precio_sugerido/1000}}</strong></p>  \n                        </div>            \n                        <div class=\"card-footer\">                \n                            <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"['/detalle',articulo.idproducto]\">Ver detalle</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n    </div>\n    <div class=\"col-12\"></div>\n </div>\n <app-foot></app-foot>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/shopping/shopping.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/shopping/shopping.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoShoppingShoppingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <!-- ##### Shop Grid Area Start ##### -->\n <div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-2 collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100\">            \n            <nav class=\"nav flex-column menusito\">\n                <a class=\"nav-link active\" href=\"#\" [routerLink]=\"['/shopping']\">Todos</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/almohadas',1]\">Almohadas</a>                \n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/colchones',2]\">Colchones</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/conjuntos',3]\">Conjuntos</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/cubrecamas',7]\">Cubracamas</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/sabanas',4]\">Sábanas</a>                \n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/toallas',5]\">Toallas</a>   \n            </nav>       \n        </div>\n        <div class=\"col pt-2\">\n            <div class=\"col-12\">\n                <div class=\"page-title text-center\">\n                    <h3 style=\"color: #a4b4e4;\">Todos los Artículos</h3>\n                </div>\n            </div>\n            <div class=\"card-deck col-12\"> \n                <div class=\"card-group\"  style=\"width: 16rem; height: 25rem;\" *ngFor=\"let articulo of arrayproductos[0] | paginate: {itemsPerPage: 8, currentPage: p}\">\n                    <div class=\"card\">\n                        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"{{articulo.ruta}}{{articulo.nom_imgagen}}\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-title text-center\">{{articulo.nom_tipo_prod}}</h6>\n                            <h6 class=\"card-text text-center\"><small>{{articulo.nom_marca}}-{{articulo.nom_modelo}}</small></h6>     \n                        </div>\n                        <div>\n                            <p class=\"card-text\"><small>Desc-{{i+1}}: {{articulo.material_interno}}</small></p>\n                        </div>\n                        <div>\n                            <p class=\"price text-center\"><strong>${{articulo.precio_sugerido/1000}}</strong></p>  \n                        </div>            \n                        <div class=\"card-footer\">                \n                            <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"['/detalle',articulo.idproducto]\">Ver detalle</a>\n                        </div>\n                    </div>\n                </div>\n                <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n            </div>\n        </div>\n    </div>\n</div>\n \n <!-- ##### Shop Grid Area End ##### -->\n <app-foot></app-foot> ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/toallas/toallas.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/toallas/toallas.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoToallasToallasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <!-- ##### Shop Grid Area Start ##### -->\n <div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-2 collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100\">            \n            <nav class=\"nav flex-column  menusito\">\n                <a class=\"nav-link active\" href=\"#\" [routerLink]=\"['/shopping']\">Todos</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/almohadas',1]\">Almohadas</a>                \n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/colchones',2]\">Colchones</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/conjuntos',3]\">Conjuntos</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/cubrecamas',7]\">Cubracamas</a>\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/sabanas',4]\">Sábanas</a>                \n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/toallas',5]\">Toallas</a>                \n            </nav>       \n        </div>\n        <div class=\"col pt-2\">\n            <div class=\"col-12\">\n                <div class=\"page-title text-center\">\n                    <h3 style=\"color: #a4b4e4;\">Toallas</h3>\n                </div>\n            </div>\n            <div class=\"card-deck col-12\"> \n                <div class=\"card-group\"  style=\"width: 16rem; height: 25rem;\" *ngFor=\"let articulo of arrayproductos | paginate: {itemsPerPage: 8, currentPage: p}\">     \n                    <div class=\"card\">\n                        <img class=\"card-img-top\" style=\"width:160px; height:160px; align-self: center;\"  src=\"{{articulo.ruta}}{{articulo.nom_imgagen}}\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-title text-center\">{{articulo.nom_tipo_prod}}</h6>\n                            <h6 class=\"card-text text-center\"><small>{{articulo.nom_marca}}-{{articulo.nom_modelo | truncate: 15}}:{{articulo.largo}}x{{articulo.ancho}}</small></h6>     \n                        </div>\n                        <div>\n                            <p class=\"card-text\"><small>Desc: {{articulo.material_interno | truncate: 50}}</small></p>\n                        </div>\n                        <div>\n                            <p class=\"price text-center\"><strong>${{articulo.precio_sugerido/1000}}</strong></p>  \n                        </div>            \n                        <div class=\"card-footer\">                \n                            <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"['/detalle',articulo.idproducto]\">Ver detalle</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n    </div>\n    <div class=\"col-12\"></div>\n </div>\n <app-foot></app-foot>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _todo_myhome_myhome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./todo/myhome/myhome.component */
    "./src/app/todo/myhome/myhome.component.ts");
    /* harmony import */


    var _todo_envio_envio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./todo/envio/envio.component */
    "./src/app/todo/envio/envio.component.ts");
    /* harmony import */


    var _todo_mycontact_mycontact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./todo/mycontact/mycontact.component */
    "./src/app/todo/mycontact/mycontact.component.ts");
    /* harmony import */


    var _todo_myproduct_myproduct_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./todo/myproduct/myproduct.component */
    "./src/app/todo/myproduct/myproduct.component.ts");
    /* harmony import */


    var _todo_mylocation_mylocation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./todo/mylocation/mylocation.component */
    "./src/app/todo/mylocation/mylocation.component.ts");
    /* harmony import */


    var _todo_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./todo/shopping/shopping.component */
    "./src/app/todo/shopping/shopping.component.ts");
    /* harmony import */


    var _todo_detalleproducto_detalleproducto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./todo/detalleproducto/detalleproducto.component */
    "./src/app/todo/detalleproducto/detalleproducto.component.ts");
    /* harmony import */


    var _todo_almohadas_almohadas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./todo/almohadas/almohadas.component */
    "./src/app/todo/almohadas/almohadas.component.ts");
    /* harmony import */


    var _todo_colchones_colchones_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./todo/colchones/colchones.component */
    "./src/app/todo/colchones/colchones.component.ts");
    /* harmony import */


    var _todo_conjuntos_conjuntos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./todo/conjuntos/conjuntos.component */
    "./src/app/todo/conjuntos/conjuntos.component.ts");
    /* harmony import */


    var _todo_cubrecamas_cubrecamas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./todo/cubrecamas/cubrecamas.component */
    "./src/app/todo/cubrecamas/cubrecamas.component.ts");
    /* harmony import */


    var _todo_sabanas_sabanas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./todo/sabanas/sabanas.component */
    "./src/app/todo/sabanas/sabanas.component.ts");
    /* harmony import */


    var _todo_toallas_toallas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./todo/toallas/toallas.component */
    "./src/app/todo/toallas/toallas.component.ts"); //import { from } from 'rxjs';


    var routes = [{
      path: '',
      component: _todo_myhome_myhome_component__WEBPACK_IMPORTED_MODULE_3__["MyhomeComponent"]
    }, {
      path: 'productos',
      component: _todo_myproduct_myproduct_component__WEBPACK_IMPORTED_MODULE_6__["MyproductComponent"]
    }, {
      path: 'envio',
      component: _todo_envio_envio_component__WEBPACK_IMPORTED_MODULE_4__["EnvioComponent"]
    }, {
      path: 'location',
      component: _todo_mylocation_mylocation_component__WEBPACK_IMPORTED_MODULE_7__["MylocationComponent"]
    }, {
      path: 'contact',
      component: _todo_mycontact_mycontact_component__WEBPACK_IMPORTED_MODULE_5__["MycontactComponent"]
    }, {
      path: 'shopping',
      component: _todo_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingComponent"]
    }, {
      path: 'detalle/:id',
      component: _todo_detalleproducto_detalleproducto_component__WEBPACK_IMPORTED_MODULE_9__["DetalleproductoComponent"]
    }, {
      path: 'almohadas/:id',
      component: _todo_almohadas_almohadas_component__WEBPACK_IMPORTED_MODULE_10__["AlmohadasComponent"]
    }, {
      path: 'colchones/:id',
      component: _todo_colchones_colchones_component__WEBPACK_IMPORTED_MODULE_11__["ColchonesComponent"]
    }, {
      path: 'conjuntos/:id',
      component: _todo_conjuntos_conjuntos_component__WEBPACK_IMPORTED_MODULE_12__["ConjuntosComponent"]
    }, {
      path: 'cubrecamas/:id',
      component: _todo_cubrecamas_cubrecamas_component__WEBPACK_IMPORTED_MODULE_13__["CubrecamasComponent"]
    }, {
      path: 'sabanas/:id',
      component: _todo_sabanas_sabanas_component__WEBPACK_IMPORTED_MODULE_14__["SabanasComponent"]
    }, {
      path: 'toallas/:id',
      component: _todo_toallas_toallas_component__WEBPACK_IMPORTED_MODULE_15__["ToallasComponent"]
    }, {
      path: "**",
      pathMatch: "full",
      redirectTo: ""
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/accordion */
    "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-bootstrap/typeahead */
    "./node_modules/ngx-bootstrap/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-bootstrap/sortable */
    "./node_modules/ngx-bootstrap/sortable/fesm2015/ngx-bootstrap-sortable.js");
    /* harmony import */


    var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-filter-pipe */
    "./node_modules/ngx-filter-pipe/esm2015/ngx-filter-pipe.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _todo_myhome_myhome_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./todo/myhome/myhome.component */
    "./src/app/todo/myhome/myhome.component.ts");
    /* harmony import */


    var _todo_myform_myform_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./todo/myform/myform.component */
    "./src/app/todo/myform/myform.component.ts");
    /* harmony import */


    var _todo_mymenu_mymenu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./todo/mymenu/mymenu.component */
    "./src/app/todo/mymenu/mymenu.component.ts");
    /* harmony import */


    var _todo_myabout_myabout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./todo/myabout/myabout.component */
    "./src/app/todo/myabout/myabout.component.ts");
    /* harmony import */


    var _todo_myproduct_myproduct_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./todo/myproduct/myproduct.component */
    "./src/app/todo/myproduct/myproduct.component.ts");
    /* harmony import */


    var _todo_mycontact_mycontact_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./todo/mycontact/mycontact.component */
    "./src/app/todo/mycontact/mycontact.component.ts");
    /* harmony import */


    var _todo_envio_envio_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./todo/envio/envio.component */
    "./src/app/todo/envio/envio.component.ts");
    /* harmony import */


    var _todo_foot_foot_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./todo/foot/foot.component */
    "./src/app/todo/foot/foot.component.ts");
    /* harmony import */


    var _todo_mylocation_mylocation_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./todo/mylocation/mylocation.component */
    "./src/app/todo/mylocation/mylocation.component.ts");
    /* harmony import */


    var _todo_productos_add_add_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./todo/productos/add/add.component */
    "./src/app/todo/productos/add/add.component.ts");
    /* harmony import */


    var _todo_productos_edit_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./todo/productos/edit/edit.component */
    "./src/app/todo/productos/edit/edit.component.ts");
    /* harmony import */


    var _todo_productos_view_view_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./todo/productos/view/view.component */
    "./src/app/todo/productos/view/view.component.ts");
    /* harmony import */


    var _todo_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./todo/shopping/shopping.component */
    "./src/app/todo/shopping/shopping.component.ts");
    /* harmony import */


    var _todo_services_productos_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./todo/services/productos.service */
    "./src/app/todo/services/productos.service.ts");
    /* harmony import */


    var _todo_detalleproducto_detalleproducto_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./todo/detalleproducto/detalleproducto.component */
    "./src/app/todo/detalleproducto/detalleproducto.component.ts");
    /* harmony import */


    var _todo_destacado_destacado_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./todo/destacado/destacado.component */
    "./src/app/todo/destacado/destacado.component.ts");
    /* harmony import */


    var _todo_mymarca_mymarca_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./todo/mymarca/mymarca.component */
    "./src/app/todo/mymarca/mymarca.component.ts");
    /* harmony import */


    var _todo_mymodelo_mymodelo_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./todo/mymodelo/mymodelo.component */
    "./src/app/todo/mymodelo/mymodelo.component.ts");
    /* harmony import */


    var _todo_mymaterial_mymaterial_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./todo/mymaterial/mymaterial.component */
    "./src/app/todo/mymaterial/mymaterial.component.ts");
    /* harmony import */


    var _todo_mytipos_mytipos_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./todo/mytipos/mytipos.component */
    "./src/app/todo/mytipos/mytipos.component.ts");
    /* harmony import */


    var _todo_colchones_colchones_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./todo/colchones/colchones.component */
    "./src/app/todo/colchones/colchones.component.ts");
    /* harmony import */


    var _todo_sabanas_sabanas_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./todo/sabanas/sabanas.component */
    "./src/app/todo/sabanas/sabanas.component.ts");
    /* harmony import */


    var _todo_toallas_toallas_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./todo/toallas/toallas.component */
    "./src/app/todo/toallas/toallas.component.ts");
    /* harmony import */


    var _todo_cubrecamas_cubrecamas_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./todo/cubrecamas/cubrecamas.component */
    "./src/app/todo/cubrecamas/cubrecamas.component.ts");
    /* harmony import */


    var _todo_almohadas_almohadas_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./todo/almohadas/almohadas.component */
    "./src/app/todo/almohadas/almohadas.component.ts");
    /* harmony import */


    var _todo_conjuntos_conjuntos_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./todo/conjuntos/conjuntos.component */
    "./src/app/todo/conjuntos/conjuntos.component.ts");
    /* harmony import */


    var _truncate_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./truncate.pipe */
    "./src/app/truncate.pipe.ts"); //import { from } from 'rxjs';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _todo_myhome_myhome_component__WEBPACK_IMPORTED_MODULE_19__["MyhomeComponent"], _todo_myform_myform_component__WEBPACK_IMPORTED_MODULE_20__["MyformComponent"], _todo_mymenu_mymenu_component__WEBPACK_IMPORTED_MODULE_21__["MymenuComponent"], _todo_myabout_myabout_component__WEBPACK_IMPORTED_MODULE_22__["MyaboutComponent"], _todo_myproduct_myproduct_component__WEBPACK_IMPORTED_MODULE_23__["MyproductComponent"], _todo_mycontact_mycontact_component__WEBPACK_IMPORTED_MODULE_24__["MycontactComponent"], _todo_envio_envio_component__WEBPACK_IMPORTED_MODULE_25__["EnvioComponent"], _todo_foot_foot_component__WEBPACK_IMPORTED_MODULE_26__["FootComponent"], _todo_mylocation_mylocation_component__WEBPACK_IMPORTED_MODULE_27__["MylocationComponent"], _todo_productos_add_add_component__WEBPACK_IMPORTED_MODULE_28__["AddComponent"], _todo_productos_edit_edit_component__WEBPACK_IMPORTED_MODULE_29__["EditComponent"], _todo_productos_view_view_component__WEBPACK_IMPORTED_MODULE_30__["ViewComponent"], _todo_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_31__["ShoppingComponent"], _todo_detalleproducto_detalleproducto_component__WEBPACK_IMPORTED_MODULE_33__["DetalleproductoComponent"], _todo_destacado_destacado_component__WEBPACK_IMPORTED_MODULE_34__["DestacadoComponent"], _todo_mymarca_mymarca_component__WEBPACK_IMPORTED_MODULE_35__["MymarcaComponent"], _todo_mymodelo_mymodelo_component__WEBPACK_IMPORTED_MODULE_36__["MymodeloComponent"], _todo_mymaterial_mymaterial_component__WEBPACK_IMPORTED_MODULE_37__["MymaterialComponent"], _todo_mytipos_mytipos_component__WEBPACK_IMPORTED_MODULE_38__["MytiposComponent"], _todo_colchones_colchones_component__WEBPACK_IMPORTED_MODULE_39__["ColchonesComponent"], _todo_sabanas_sabanas_component__WEBPACK_IMPORTED_MODULE_40__["SabanasComponent"], _todo_toallas_toallas_component__WEBPACK_IMPORTED_MODULE_41__["ToallasComponent"], _todo_cubrecamas_cubrecamas_component__WEBPACK_IMPORTED_MODULE_42__["CubrecamasComponent"], _todo_almohadas_almohadas_component__WEBPACK_IMPORTED_MODULE_43__["AlmohadasComponent"], _todo_conjuntos_conjuntos_component__WEBPACK_IMPORTED_MODULE_44__["ConjuntosComponent"], _truncate_pipe__WEBPACK_IMPORTED_MODULE_45__["TruncatePipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"].forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_11__["PopoverModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__["TabsModule"].forRoot(), ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_13__["TypeaheadModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"].forRoot(), ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_16__["SortableModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["FilterPipeModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"]],
      providers: [_todo_services_productos_service__WEBPACK_IMPORTED_MODULE_32__["ProductosService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/todo/almohadas/almohadas.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/todo/almohadas/almohadas.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoAlmohadasAlmohadasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-deck {\n  padding-left: 50px;\n}\n\n.card-body {\n  padding: 5px;\n  text-align: justify;\n}\n\n.card-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.menusito {\n  padding-left: 10px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9hbG1vaGFkYXMvQzpcXFBST1lFQ1RPU1xcbWlzYXBwXFxibGFucXVlcmlhL3NyY1xcYXBwXFx0b2RvXFxhbG1vaGFkYXNcXGFsbW9oYWRhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9kby9hbG1vaGFkYXMvYWxtb2hhZGFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC90b2RvL2FsbW9oYWRhcy9hbG1vaGFkYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1kZWNre1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbi5jYXJkLWZvb3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubWVudXNpdG97XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn0iLCIuY2FyZC1kZWNrIHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1lbnVzaXRvIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/todo/almohadas/almohadas.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/todo/almohadas/almohadas.component.ts ***!
    \*******************************************************/

  /*! exports provided: AlmohadasComponent */

  /***/
  function srcAppTodoAlmohadasAlmohadasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlmohadasComponent", function () {
      return AlmohadasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/productos.service */
    "./src/app/todo/services/productos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AlmohadasComponent =
    /*#__PURE__*/
    function () {
      function AlmohadasComponent(router, list_producto, route) {
        var _this = this;

        _classCallCheck(this, AlmohadasComponent);

        this.router = router;
        this.list_producto = list_producto;
        this.route = route;
        this.classes = 'row';
        this.arrayproductos = [];
        this.route.params.subscribe(function (params) {
          if (params['id'] != null) {
            var id = params['id'];
          }

          _this.list_producto.getcategoriaProduct(id).subscribe(function (res) {
            console.log(res);
            _this.arrayproductos = res;
          }, function (err) {
            return console.error(err);
          });
        });
      }

      _createClass(AlmohadasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlmohadasComponent;
    }();

    AlmohadasComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], AlmohadasComponent.prototype, "classes", void 0);
    AlmohadasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-almohadas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./almohadas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/almohadas/almohadas.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./almohadas.component.scss */
      "./src/app/todo/almohadas/almohadas.component.scss")).default]
    })], AlmohadasComponent);
    /***/
  },

  /***/
  "./src/app/todo/colchones/colchones.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/todo/colchones/colchones.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoColchonesColchonesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-deck {\n  padding-left: 50px;\n}\n\n.card-body {\n  padding: 5px;\n  text-align: justify;\n}\n\n.card-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.menusito {\n  padding-left: 10px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9jb2xjaG9uZXMvQzpcXFBST1lFQ1RPU1xcbWlzYXBwXFxibGFucXVlcmlhL3NyY1xcYXBwXFx0b2RvXFxjb2xjaG9uZXNcXGNvbGNob25lcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9kby9jb2xjaG9uZXMvY29sY2hvbmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0dKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC90b2RvL2NvbGNob25lcy9jb2xjaG9uZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1kZWNre1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbi5jYXJkLWZvb3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1lbnVzaXRve1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59IiwiLmNhcmQtZGVjayB7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmNhcmQtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tZW51c2l0byB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/todo/colchones/colchones.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/todo/colchones/colchones.component.ts ***!
    \*******************************************************/

  /*! exports provided: ColchonesComponent */

  /***/
  function srcAppTodoColchonesColchonesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColchonesComponent", function () {
      return ColchonesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/productos.service */
    "./src/app/todo/services/productos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ColchonesComponent =
    /*#__PURE__*/
    function () {
      function ColchonesComponent(router, list_producto, route) {
        var _this2 = this;

        _classCallCheck(this, ColchonesComponent);

        this.router = router;
        this.list_producto = list_producto;
        this.route = route;
        this.classes = 'row';
        this.arrayproductos = [];
        this.route.params.subscribe(function (params) {
          if (params['id'] != null) {
            var id = params['id'];
          }

          _this2.list_producto.getcategoriaProduct(id).subscribe(function (res) {
            console.log(res);
            _this2.arrayproductos = res;
          }, function (err) {
            return console.error(err);
          });
        });
      }

      _createClass(ColchonesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ColchonesComponent;
    }();

    ColchonesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], ColchonesComponent.prototype, "classes", void 0);
    ColchonesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-colchones',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./colchones.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/colchones/colchones.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./colchones.component.scss */
      "./src/app/todo/colchones/colchones.component.scss")).default]
    })], ColchonesComponent);
    /***/
  },

  /***/
  "./src/app/todo/conjuntos/conjuntos.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/todo/conjuntos/conjuntos.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoConjuntosConjuntosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-deck {\n  padding-left: 50px;\n}\n\n.card-body {\n  padding: 5px;\n  text-align: justify;\n}\n\n.card-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.menusito {\n  padding-left: 10px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9jb25qdW50b3MvQzpcXFBST1lFQ1RPU1xcbWlzYXBwXFxibGFucXVlcmlhL3NyY1xcYXBwXFx0b2RvXFxjb25qdW50b3NcXGNvbmp1bnRvcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9kby9jb25qdW50b3MvY29uanVudG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0dKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC90b2RvL2Nvbmp1bnRvcy9jb25qdW50b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1kZWNre1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbi5jYXJkLWZvb3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1lbnVzaXRve1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59IiwiLmNhcmQtZGVjayB7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmNhcmQtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tZW51c2l0byB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/todo/conjuntos/conjuntos.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/todo/conjuntos/conjuntos.component.ts ***!
    \*******************************************************/

  /*! exports provided: ConjuntosComponent */

  /***/
  function srcAppTodoConjuntosConjuntosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConjuntosComponent", function () {
      return ConjuntosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/productos.service */
    "./src/app/todo/services/productos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ConjuntosComponent =
    /*#__PURE__*/
    function () {
      function ConjuntosComponent(router, list_producto, route) {
        var _this3 = this;

        _classCallCheck(this, ConjuntosComponent);

        this.router = router;
        this.list_producto = list_producto;
        this.route = route;
        this.classes = 'row';
        this.arrayproductos = [];
        this.route.params.subscribe(function (params) {
          if (params['id'] != null) {
            var id = params['id'];
          }

          _this3.list_producto.getcategoriaProduct(id).subscribe(function (res) {
            console.log(res);
            _this3.arrayproductos = res;
          }, function (err) {
            return console.error(err);
          });
        });
      }

      _createClass(ConjuntosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConjuntosComponent;
    }();

    ConjuntosComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], ConjuntosComponent.prototype, "classes", void 0);
    ConjuntosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-conjuntos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./conjuntos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/conjuntos/conjuntos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./conjuntos.component.scss */
      "./src/app/todo/conjuntos/conjuntos.component.scss")).default]
    })], ConjuntosComponent);
    /***/
  },

  /***/
  "./src/app/todo/cubrecamas/cubrecamas.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/todo/cubrecamas/cubrecamas.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoCubrecamasCubrecamasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-deck {\n  padding-left: 50px;\n}\n\n.card-body {\n  padding: 5px;\n  text-align: justify;\n}\n\n.card-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.menusito {\n  padding-left: 10px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9jdWJyZWNhbWFzL0M6XFxQUk9ZRUNUT1NcXG1pc2FwcFxcYmxhbnF1ZXJpYS9zcmNcXGFwcFxcdG9kb1xcY3VicmVjYW1hc1xcY3VicmVjYW1hcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9kby9jdWJyZWNhbWFzL2N1YnJlY2FtYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDR0o7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vY3VicmVjYW1hcy9jdWJyZWNhbWFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZGVja3tcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4uY2FyZC1mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW51c2l0b3tcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufSIsIi5jYXJkLWRlY2sge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWVudXNpdG8ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/todo/cubrecamas/cubrecamas.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/todo/cubrecamas/cubrecamas.component.ts ***!
    \*********************************************************/

  /*! exports provided: CubrecamasComponent */

  /***/
  function srcAppTodoCubrecamasCubrecamasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CubrecamasComponent", function () {
      return CubrecamasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/productos.service */
    "./src/app/todo/services/productos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CubrecamasComponent =
    /*#__PURE__*/
    function () {
      function CubrecamasComponent(router, list_producto, route) {
        var _this4 = this;

        _classCallCheck(this, CubrecamasComponent);

        this.router = router;
        this.list_producto = list_producto;
        this.route = route;
        this.classes = 'row';
        this.arrayproductos = [];
        this.route.params.subscribe(function (params) {
          if (params['id'] != null) {
            var id = params['id'];
          }

          _this4.list_producto.getcategoriaProduct(id).subscribe(function (res) {
            console.log(res);
            _this4.arrayproductos = res;
          }, function (err) {
            return console.error(err);
          });
        });
      }

      _createClass(CubrecamasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CubrecamasComponent;
    }();

    CubrecamasComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], CubrecamasComponent.prototype, "classes", void 0);
    CubrecamasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cubrecamas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cubrecamas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/cubrecamas/cubrecamas.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cubrecamas.component.scss */
      "./src/app/todo/cubrecamas/cubrecamas.component.scss")).default]
    })], CubrecamasComponent);
    /***/
  },

  /***/
  "./src/app/todo/destacado/destacado.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/todo/destacado/destacado.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoDestacadoDestacadoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-deck {\n  padding-left: 50px;\n}\n\n.card-body {\n  padding: 5px;\n  text-align: justify;\n}\n\n.card-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9kZXN0YWNhZG8vQzpcXFBST1lFQ1RPU1xcbWlzYXBwXFxibGFucXVlcmlhL3NyY1xcYXBwXFx0b2RvXFxkZXN0YWNhZG9cXGRlc3RhY2Fkby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9kby9kZXN0YWNhZG8vZGVzdGFjYWRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvdG9kby9kZXN0YWNhZG8vZGVzdGFjYWRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZGVja3tcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4uY2FyZC1mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iLCIuY2FyZC1kZWNrIHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/todo/destacado/destacado.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/todo/destacado/destacado.component.ts ***!
    \*******************************************************/

  /*! exports provided: DestacadoComponent */

  /***/
  function srcAppTodoDestacadoDestacadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DestacadoComponent", function () {
      return DestacadoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/productos.service */
    "./src/app/todo/services/productos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-filter-pipe */
    "./node_modules/ngx-filter-pipe/esm2015/ngx-filter-pipe.js");

    var DestacadoComponent =
    /*#__PURE__*/
    function () {
      function DestacadoComponent(router, list_producto, filter) {
        var _this5 = this;

        _classCallCheck(this, DestacadoComponent);

        this.router = router;
        this.list_producto = list_producto;
        this.filter = filter;
        this.classes = 'row';
        this.arrayproductos = [];
        this.result = [];
        this.list_producto.getAllProducts().subscribe(function (res) {
          _this5.arrayproductos = res;
          _this5.result = _this5.filter.transform(_this5.arrayproductos[0], {
            oferta: '1'
          });
          console.log(_this5.result);
        }, function (err) {
          return console.error(err);
        });
      }

      _createClass(DestacadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DestacadoComponent;
    }();

    DestacadoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]
      }, {
        type: ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], DestacadoComponent.prototype, "classes", void 0);
    DestacadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-destacado',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./destacado.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/destacado/destacado.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./destacado.component.scss */
      "./src/app/todo/destacado/destacado.component.scss")).default]
    })], DestacadoComponent);
    /***/
  },

  /***/
  "./src/app/todo/detalleproducto/detalleproducto.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/todo/detalleproducto/detalleproducto.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoDetalleproductoDetalleproductoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vZGV0YWxsZXByb2R1Y3RvL2RldGFsbGVwcm9kdWN0by5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/todo/detalleproducto/detalleproducto.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/todo/detalleproducto/detalleproducto.component.ts ***!
    \*******************************************************************/

  /*! exports provided: DetalleproductoComponent */

  /***/
  function srcAppTodoDetalleproductoDetalleproductoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleproductoComponent", function () {
      return DetalleproductoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/productos.service */
    "./src/app/todo/services/productos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DetalleproductoComponent =
    /*#__PURE__*/
    function () {
      function DetalleproductoComponent(router, list_producto, route) {
        var _this6 = this;

        _classCallCheck(this, DetalleproductoComponent);

        this.router = router;
        this.list_producto = list_producto;
        this.route = route;
        this.classes = 'row';
        this.arrayproductos = [];
        this.route.params.subscribe(function (params) {
          if (params['id'] != null) {
            var id = params['id'];
          }

          _this6.list_producto.getSingleProduct(id).subscribe(function (res) {
            console.log(res);
            _this6.arrayproductos = res;
          }, function (err) {
            return console.error(err);
          });
        });
      }

      _createClass(DetalleproductoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DetalleproductoComponent;
    }();

    DetalleproductoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], DetalleproductoComponent.prototype, "classes", void 0);
    DetalleproductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detalleproducto',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./detalleproducto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/detalleproducto/detalleproducto.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detalleproducto.component.scss */
      "./src/app/todo/detalleproducto/detalleproducto.component.scss")).default]
    })], DetalleproductoComponent);
    /***/
  },

  /***/
  "./src/app/todo/envio/envio.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/todo/envio/envio.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoEnvioEnvioComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vZW52aW8vZW52aW8uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/todo/envio/envio.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/todo/envio/envio.component.ts ***!
    \***********************************************/

  /*! exports provided: EnvioComponent */

  /***/
  function srcAppTodoEnvioEnvioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnvioComponent", function () {
      return EnvioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EnvioComponent =
    /*#__PURE__*/
    function () {
      function EnvioComponent() {
        _classCallCheck(this, EnvioComponent);
      }

      _createClass(EnvioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EnvioComponent;
    }();

    EnvioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-envio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./envio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/envio/envio.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./envio.component.scss */
      "./src/app/todo/envio/envio.component.scss")).default]
    })], EnvioComponent);
    /***/
  },

  /***/
  "./src/app/todo/foot/foot.component.scss":
  /*!***********************************************!*\
    !*** ./src/app/todo/foot/foot.component.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoFootFootComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vZm9vdC9mb290LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/todo/foot/foot.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/todo/foot/foot.component.ts ***!
    \*********************************************/

  /*! exports provided: FootComponent */

  /***/
  function srcAppTodoFootFootComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FootComponent", function () {
      return FootComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FootComponent =
    /*#__PURE__*/
    function () {
      function FootComponent() {
        _classCallCheck(this, FootComponent);
      }

      _createClass(FootComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FootComponent;
    }();

    FootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-foot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./foot.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/foot/foot.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./foot.component.scss */
      "./src/app/todo/foot/foot.component.scss")).default]
    })], FootComponent);
    /***/
  },

  /***/
  "./src/app/todo/myabout/myabout.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/todo/myabout/myabout.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoMyaboutMyaboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vbXlhYm91dC9teWFib3V0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/todo/myabout/myabout.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/todo/myabout/myabout.component.ts ***!
    \***************************************************/

  /*! exports provided: MyaboutComponent */

  /***/
  function srcAppTodoMyaboutMyaboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyaboutComponent", function () {
      return MyaboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MyaboutComponent =
    /*#__PURE__*/
    function () {
      function MyaboutComponent() {
        _classCallCheck(this, MyaboutComponent);
      }

      _createClass(MyaboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyaboutComponent;
    }();

    MyaboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myabout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myabout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/myabout/myabout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myabout.component.scss */
      "./src/app/todo/myabout/myabout.component.scss")).default]
    })], MyaboutComponent);
    /***/
  },

  /***/
  "./src/app/todo/mycontact/mycontact.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/todo/mycontact/mycontact.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoMycontactMycontactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".elform {\n  /* The image used */\n  margin: 0 auto;\n  background: url('bed-contacto.jpg');\n  /* Full height */\n  height: 100%;\n  width: 100%;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.main-section {\n  margin: 0 auto;\n  margin-top: -25px;\n  padding: 0;\n}\n\n.user-img {\n  margin-top: -20px;\n  margin-bottom: 35px;\n}\n\n.user-img img {\n  width: 80px;\n  height: 65px;\n  box-shadow: 8px 8px 8px #5a3c20;\n}\n\n.modal-content {\n  background-color: #855218;\n  opacity: 0.7;\n  padding: 0 20px;\n  box-shadow: 8px 8px 8px #848484;\n}\n\n.user-header {\n  margin-top: 5px;\n  color: #ffffff;\n}\n\n.user-form {\n  margin-top: -10px;\n  padding: 0;\n}\n\n.form-group input {\n  height: 35px;\n  font-size: 18px;\n  border: 0;\n  padding-left: 40px;\n  border-radius: 5px;\n}\n\n.user1-group {\n  position: absolute;\n  padding-top: 7px;\n  left: 8px;\n  font-size: 22px;\n}\n\n.user2-group {\n  position: absolute;\n  padding-top: 7px;\n  left: 8px;\n  font-size: 22px;\n}\n\n.user3-group {\n  position: absolute;\n  padding-top: 7px;\n  left: 8px;\n  font-size: 22px;\n}\n\n.user4-group {\n  position: absolute;\n  padding-top: 7px;\n  left: 8px;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9teWNvbnRhY3QvQzpcXFBST1lFQ1RPU1xcbWlzYXBwXFxibGFucXVlcmlhL3NyY1xcYXBwXFx0b2RvXFxteWNvbnRhY3RcXG15Y29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9kby9teWNvbnRhY3QvbXljb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNFSjs7QURBQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUNJSjs7QUREQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNLSjs7QURIQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQ01KOztBREpBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ09KOztBREpBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDT0o7O0FETEE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNRSjs7QUROQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ1NKOztBRFBBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC90b2RvL215Y29udGFjdC9teWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWxmb3JtIHtcclxuICAgIC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZWQtY29udGFjdG8uanBnXCIpO1xyXG4gICAgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICAgXHJcbn1cclxuLm1haW4tc2VjdGlvbntcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLnVzZXItaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcbi51c2VyLWltZyBpbWd7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJveC1zaGFkb3c6IDhweCA4cHggOHB4ICM1YTNjMjA7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMywgODIsIDI0KTtcclxuICAgIG9wYWNpdHk6IC43MDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDhweCA4cHggOHB4ICM4NDg0ODQ7XHJcbn1cclxuLnVzZXItaGVhZGVye1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLnVzZXItZm9ybXtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uZm9ybS1ncm91cCBpbnB1dHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnVzZXIxLWdyb3Vwe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIGxlZnQ6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4udXNlcjItZ3JvdXB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi51c2VyMy1ncm91cHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLnVzZXI0LWdyb3Vwe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIGxlZnQ6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufSIsIi5lbGZvcm0ge1xuICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZWQtY29udGFjdG8uanBnXCIpO1xuICAvKiBGdWxsIGhlaWdodCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubWFpbi1zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IC0yNXB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4udXNlci1pbWcge1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLnVzZXItaW1nIGltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJveC1zaGFkb3c6IDhweCA4cHggOHB4ICM1YTNjMjA7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg1NTIxODtcbiAgb3BhY2l0eTogMC43O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGJveC1zaGFkb3c6IDhweCA4cHggOHB4ICM4NDg0ODQ7XG59XG5cbi51c2VyLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi51c2VyLWZvcm0ge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQge1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnVzZXIxLWdyb3VwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICBsZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnVzZXIyLWdyb3VwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICBsZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnVzZXIzLWdyb3VwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICBsZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnVzZXI0LWdyb3VwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICBsZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/todo/mycontact/mycontact.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/todo/mycontact/mycontact.component.ts ***!
    \*******************************************************/

  /*! exports provided: MycontactComponent */

  /***/
  function srcAppTodoMycontactMycontactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MycontactComponent", function () {
      return MycontactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MycontactComponent =
    /*#__PURE__*/
    function () {
      function MycontactComponent() {
        _classCallCheck(this, MycontactComponent);
      }

      _createClass(MycontactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MycontactComponent;
    }();

    MycontactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mycontact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mycontact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mycontact/mycontact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mycontact.component.scss */
      "./src/app/todo/mycontact/mycontact.component.scss")).default]
    })], MycontactComponent);
    /***/
  },

  /***/
  "./src/app/todo/myform/myform.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/todo/myform/myform.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoMyformMyformComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vbXlmb3JtL215Zm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/todo/myform/myform.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/todo/myform/myform.component.ts ***!
    \*************************************************/

  /*! exports provided: MyformComponent */

  /***/
  function srcAppTodoMyformMyformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyformComponent", function () {
      return MyformComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MyformComponent =
    /*#__PURE__*/
    function () {
      function MyformComponent() {
        _classCallCheck(this, MyformComponent);
      }

      _createClass(MyformComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyformComponent;
    }();

    MyformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myform',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myform.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/myform/myform.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myform.component.scss */
      "./src/app/todo/myform/myform.component.scss")).default]
    })], MyformComponent);
    /***/
  },

  /***/
  "./src/app/todo/myhome/myhome.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/todo/myhome/myhome.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoMyhomeMyhomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vbXlob21lL215aG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/todo/myhome/myhome.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/todo/myhome/myhome.component.ts ***!
    \*************************************************/

  /*! exports provided: MyhomeComponent */

  /***/
  function srcAppTodoMyhomeMyhomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyhomeComponent", function () {
      return MyhomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MyhomeComponent =
    /*#__PURE__*/
    function () {
      function MyhomeComponent() {
        _classCallCheck(this, MyhomeComponent);
      }

      _createClass(MyhomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyhomeComponent;
    }();

    MyhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myhome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myhome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/myhome/myhome.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myhome.component.scss */
      "./src/app/todo/myhome/myhome.component.scss")).default]
    })], MyhomeComponent);
    /***/
  },

  /***/
  "./src/app/todo/mylocation/mylocation.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/todo/mylocation/mylocation.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoMylocationMylocationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vbXlsb2NhdGlvbi9teWxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/todo/mylocation/mylocation.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/todo/mylocation/mylocation.component.ts ***!
    \*********************************************************/

  /*! exports provided: MylocationComponent */

  /***/
  function srcAppTodoMylocationMylocationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MylocationComponent", function () {
      return MylocationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MylocationComponent =
    /*#__PURE__*/
    function () {
      function MylocationComponent() {
        _classCallCheck(this, MylocationComponent);
      }

      _createClass(MylocationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MylocationComponent;
    }();

    MylocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mylocation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mylocation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mylocation/mylocation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mylocation.component.scss */
      "./src/app/todo/mylocation/mylocation.component.scss")).default]
    })], MylocationComponent);
    /***/
  },

  /***/
  "./src/app/todo/mymarca/mymarca.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/todo/mymarca/mymarca.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoMymarcaMymarcaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vbXltYXJjYS9teW1hcmNhLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/todo/mymarca/mymarca.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/todo/mymarca/mymarca.component.ts ***!
    \***************************************************/

  /*! exports provided: MymarcaComponent */

  /***/
  function srcAppTodoMymarcaMymarcaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MymarcaComponent", function () {
      return MymarcaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MymarcaComponent =
    /*#__PURE__*/
    function () {
      function MymarcaComponent() {
        _classCallCheck(this, MymarcaComponent);
      }

      _createClass(MymarcaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MymarcaComponent;
    }();

    MymarcaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mymarca',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mymarca.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mymarca/mymarca.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mymarca.component.scss */
      "./src/app/todo/mymarca/mymarca.component.scss")).default]
    })], MymarcaComponent);
    /***/
  },

  /***/
  "./src/app/todo/mymaterial/mymaterial.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/todo/mymaterial/mymaterial.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoMymaterialMymaterialComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vbXltYXRlcmlhbC9teW1hdGVyaWFsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/todo/mymaterial/mymaterial.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/todo/mymaterial/mymaterial.component.ts ***!
    \*********************************************************/

  /*! exports provided: MymaterialComponent */

  /***/
  function srcAppTodoMymaterialMymaterialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MymaterialComponent", function () {
      return MymaterialComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MymaterialComponent =
    /*#__PURE__*/
    function () {
      function MymaterialComponent() {
        _classCallCheck(this, MymaterialComponent);
      }

      _createClass(MymaterialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MymaterialComponent;
    }();

    MymaterialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mymaterial',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mymaterial.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mymaterial/mymaterial.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mymaterial.component.scss */
      "./src/app/todo/mymaterial/mymaterial.component.scss")).default]
    })], MymaterialComponent);
    /***/
  },

  /***/
  "./src/app/todo/mymenu/mymenu.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/todo/mymenu/mymenu.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoMymenuMymenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".boton {\n  width: 120px;\n  font-size: small;\n  margin-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9teW1lbnUvQzpcXFBST1lFQ1RPU1xcbWlzYXBwXFxibGFucXVlcmlhL3NyY1xcYXBwXFx0b2RvXFxteW1lbnVcXG15bWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9kby9teW1lbnUvbXltZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vbXltZW51L215bWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3RvbntcclxuICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG59IiwiLmJvdG9uIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/todo/mymenu/mymenu.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/todo/mymenu/mymenu.component.ts ***!
    \*************************************************/

  /*! exports provided: MymenuComponent */

  /***/
  function srcAppTodoMymenuMymenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MymenuComponent", function () {
      return MymenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MymenuComponent =
    /*#__PURE__*/
    function () {
      function MymenuComponent() {
        _classCallCheck(this, MymenuComponent);

        this.navbarOpen = false;
      }

      _createClass(MymenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleNavbar",
        value: function toggleNavbar() {
          this.navbarOpen = !this.navbarOpen;
        }
      }]);

      return MymenuComponent;
    }();

    MymenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mymenu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mymenu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mymenu/mymenu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mymenu.component.scss */
      "./src/app/todo/mymenu/mymenu.component.scss")).default]
    })], MymenuComponent);
    /***/
  },

  /***/
  "./src/app/todo/mymodelo/mymodelo.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/todo/mymodelo/mymodelo.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoMymodeloMymodeloComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vbXltb2RlbG8vbXltb2RlbG8uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/todo/mymodelo/mymodelo.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/todo/mymodelo/mymodelo.component.ts ***!
    \*****************************************************/

  /*! exports provided: MymodeloComponent */

  /***/
  function srcAppTodoMymodeloMymodeloComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MymodeloComponent", function () {
      return MymodeloComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MymodeloComponent =
    /*#__PURE__*/
    function () {
      function MymodeloComponent() {
        _classCallCheck(this, MymodeloComponent);
      }

      _createClass(MymodeloComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MymodeloComponent;
    }();

    MymodeloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mymodelo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mymodelo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mymodelo/mymodelo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mymodelo.component.scss */
      "./src/app/todo/mymodelo/mymodelo.component.scss")).default]
    })], MymodeloComponent);
    /***/
  },

  /***/
  "./src/app/todo/myproduct/myproduct.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/todo/myproduct/myproduct.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoMyproductMyproductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vbXlwcm9kdWN0L215cHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/todo/myproduct/myproduct.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/todo/myproduct/myproduct.component.ts ***!
    \*******************************************************/

  /*! exports provided: MyproductComponent */

  /***/
  function srcAppTodoMyproductMyproductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyproductComponent", function () {
      return MyproductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/productos.service */
    "./src/app/todo/services/productos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); //import { Observable } from 'rxjs';
    //import { FlatTreeControl } from '@angular/cdk/tree';
    //import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';


    var MyproductComponent =
    /*#__PURE__*/
    function () {
      function MyproductComponent(router, list_producto) {
        _classCallCheck(this, MyproductComponent);

        this.router = router;
        this.list_producto = list_producto;
        this.classes = 'row';
        this.arrayproductos = [];
        this.p = 1;
      }

      _createClass(MyproductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.list_producto.getAllProducts().subscribe(function (res) {
            console.log(res);
            _this7.arrayproductos = res;
          }, function (err) {
            return console.error(err);
          });
        }
      }]);

      return MyproductComponent;
    }();

    MyproductComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], MyproductComponent.prototype, "classes", void 0);
    MyproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myproduct',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myproduct.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/myproduct/myproduct.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myproduct.component.scss */
      "./src/app/todo/myproduct/myproduct.component.scss")).default]
    })], MyproductComponent);
    /***/
  },

  /***/
  "./src/app/todo/mytipos/mytipos.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/todo/mytipos/mytipos.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoMytiposMytiposComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vbXl0aXBvcy9teXRpcG9zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/todo/mytipos/mytipos.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/todo/mytipos/mytipos.component.ts ***!
    \***************************************************/

  /*! exports provided: MytiposComponent */

  /***/
  function srcAppTodoMytiposMytiposComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MytiposComponent", function () {
      return MytiposComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MytiposComponent =
    /*#__PURE__*/
    function () {
      function MytiposComponent() {
        _classCallCheck(this, MytiposComponent);
      }

      _createClass(MytiposComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MytiposComponent;
    }();

    MytiposComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mytipos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mytipos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/mytipos/mytipos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mytipos.component.scss */
      "./src/app/todo/mytipos/mytipos.component.scss")).default]
    })], MytiposComponent);
    /***/
  },

  /***/
  "./src/app/todo/productos/add/add.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/todo/productos/add/add.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoProductosAddAddComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vcHJvZHVjdG9zL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/todo/productos/add/add.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/todo/productos/add/add.component.ts ***!
    \*****************************************************/

  /*! exports provided: AddComponent */

  /***/
  function srcAppTodoProductosAddAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddComponent", function () {
      return AddComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddComponent =
    /*#__PURE__*/
    function () {
      function AddComponent() {
        _classCallCheck(this, AddComponent);
      }

      _createClass(AddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddComponent;
    }();

    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/productos/add/add.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add.component.scss */
      "./src/app/todo/productos/add/add.component.scss")).default]
    })], AddComponent);
    /***/
  },

  /***/
  "./src/app/todo/productos/edit/edit.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/todo/productos/edit/edit.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoProductosEditEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vcHJvZHVjdG9zL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/todo/productos/edit/edit.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/todo/productos/edit/edit.component.ts ***!
    \*******************************************************/

  /*! exports provided: EditComponent */

  /***/
  function srcAppTodoProductosEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
      return EditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EditComponent =
    /*#__PURE__*/
    function () {
      function EditComponent() {
        _classCallCheck(this, EditComponent);
      }

      _createClass(EditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EditComponent;
    }();

    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/productos/edit/edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit.component.scss */
      "./src/app/todo/productos/edit/edit.component.scss")).default]
    })], EditComponent);
    /***/
  },

  /***/
  "./src/app/todo/productos/view/view.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/todo/productos/view/view.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoProductosViewViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n.products-container{\n    background: #f8f9fa !important;\n    padding: 1em 0;\n    position: relative;\n    display: flex;\n    padding: 0px 2%;\n}\n.sidebar{\n    flex: 1;\n    margin-top: 20px;\n    font-size: 20px;\n    text-transform: uppercase;\n    color: black;\n}\n\n.sidebar  .list {\n    list-style: none;\n    text-align: left;\n    padding: 0;\n}\n\n.sidebar .list .list-items{\n    font-size: 12px;\n    background: transparent;\n}\n.body{\n    flex: 6;\n    display: flex;\n    margin-top: 10px;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n.body .productImg {\n    padding: 18px;\n    width: 100%;\n    height: 200px;\n}\n\n\n\n.mobile{\n    display: none;\n\n}\n\n.mobile-card-container{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n    margin: 10px;\n\n}\n.mobile-card-img{\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.mobile-card-details {\n    flex: 3;\n    margin-left: 20px;\n}\n\n@media (max-width: 1080px) {\n    // .sidebar {\n    //     display: none;\n    // }\n    // .products-container {\n    //     padding: 0;\n    // }\n    // .example-card {\n    //     max-width: 100%;\n    //     width: 100%;\n    //     margin: 10px 0px;\n    // }\n    // .body .productImg {\n    //     padding: 18px;\n    //     width: 100%;\n    // }\n    .products-container {\n        display: none;\n    }\n    .mobile {\n        display: block;\n        background: #fff;\n        margin: 10px 0px;\n        padding: 10px;\n    }\n\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9wcm9kdWN0b3Mvdmlldy9DOlxcUFJPWUVDVE9TXFxtaXNhcHBcXGJsYW5xdWVyaWEvc3JjXFxhcHBcXHRvZG9cXHByb2R1Y3Rvc1xcdmlld1xcdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBIiwiZmlsZSI6InNyYy9hcHAvdG9kby9wcm9kdWN0b3Mvdmlldy92aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuLnByb2R1Y3RzLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmEgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDFlbSAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDBweCAyJTtcclxufVxyXG4uc2lkZWJhcntcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNpZGViYXIgIC5saXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnNpZGViYXIgLmxpc3QgLmxpc3QtaXRlbXN7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4uYm9keXtcclxuICAgIGZsZXg6IDY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5ib2R5IC5wcm9kdWN0SW1nIHtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLm1vYmlsZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBcclxufVxyXG5cclxuLm1vYmlsZS1jYXJkLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG5cclxufVxyXG4ubW9iaWxlLWNhcmQtaW1ne1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1vYmlsZS1jYXJkLWRldGFpbHMge1xyXG4gICAgZmxleDogMztcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XHJcbiAgICAvLyAuc2lkZWJhciB7XHJcbiAgICAvLyAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIC8vIH1cclxuICAgIC8vIC5wcm9kdWN0cy1jb250YWluZXIge1xyXG4gICAgLy8gICAgIHBhZGRpbmc6IDA7XHJcbiAgICAvLyB9XHJcbiAgICAvLyAuZXhhbXBsZS1jYXJkIHtcclxuICAgIC8vICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIC8vIH1cclxuICAgIC8vIC5ib2R5IC5wcm9kdWN0SW1nIHtcclxuICAgIC8vICAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gfVxyXG4gICAgLnByb2R1Y3RzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5tb2JpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn0qLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/todo/productos/view/view.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/todo/productos/view/view.component.ts ***!
    \*******************************************************/

  /*! exports provided: ViewComponent */

  /***/
  function srcAppTodoProductosViewViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewComponent", function () {
      return ViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ViewComponent =
    /*#__PURE__*/
    function () {
      function ViewComponent() {
        _classCallCheck(this, ViewComponent);
      }

      _createClass(ViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViewComponent;
    }();

    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/productos/view/view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view.component.scss */
      "./src/app/todo/productos/view/view.component.scss")).default]
    })], ViewComponent);
    /***/
  },

  /***/
  "./src/app/todo/sabanas/sabanas.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/todo/sabanas/sabanas.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoSabanasSabanasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-deck {\n  padding-left: 50px;\n}\n\n.card-body {\n  padding: 5px;\n  text-align: justify;\n}\n\n.card-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.menusito {\n  padding-left: 10px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9zYWJhbmFzL0M6XFxQUk9ZRUNUT1NcXG1pc2FwcFxcYmxhbnF1ZXJpYS9zcmNcXGFwcFxcdG9kb1xcc2FiYW5hc1xcc2FiYW5hcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9kby9zYWJhbmFzL3NhYmFuYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDR0o7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vc2FiYW5hcy9zYWJhbmFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZGVja3tcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4uY2FyZC1mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW51c2l0b3tcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufSIsIi5jYXJkLWRlY2sge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWVudXNpdG8ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/todo/sabanas/sabanas.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/todo/sabanas/sabanas.component.ts ***!
    \***************************************************/

  /*! exports provided: SabanasComponent */

  /***/
  function srcAppTodoSabanasSabanasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SabanasComponent", function () {
      return SabanasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/productos.service */
    "./src/app/todo/services/productos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SabanasComponent =
    /*#__PURE__*/
    function () {
      function SabanasComponent(router, list_producto, route) {
        var _this8 = this;

        _classCallCheck(this, SabanasComponent);

        this.router = router;
        this.list_producto = list_producto;
        this.route = route;
        this.classes = 'row';
        this.arrayproductos = [];
        this.route.params.subscribe(function (params) {
          if (params['id'] != null) {
            var id = params['id'];
          }

          _this8.list_producto.getcategoriaProduct(id).subscribe(function (res) {
            console.log(res);
            _this8.arrayproductos = res;
          }, function (err) {
            return console.error(err);
          });
        });
      }

      _createClass(SabanasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SabanasComponent;
    }();

    SabanasComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], SabanasComponent.prototype, "classes", void 0);
    SabanasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sabanas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sabanas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/sabanas/sabanas.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sabanas.component.scss */
      "./src/app/todo/sabanas/sabanas.component.scss")).default]
    })], SabanasComponent);
    /***/
  },

  /***/
  "./src/app/todo/services/productos.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/todo/services/productos.service.ts ***!
    \****************************************************/

  /*! exports provided: ProductosService */

  /***/
  function srcAppTodoServicesProductosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductosService", function () {
      return ProductosService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ProductosService =
    /*#__PURE__*/
    function () {
      function ProductosService(http) {
        _classCallCheck(this, ProductosService);

        this.http = http;
        this.Myapi_URI = 'http://localhost:3000/castelapi';
      }

      _createClass(ProductosService, [{
        key: "getAllProducts",
        value: function getAllProducts() {
          return this.http.get("".concat(this.Myapi_URI, "/articulos"));
        }
      }, {
        key: "getSingleProduct",
        value: function getSingleProduct(id) {
          return this.http.get("".concat(this.Myapi_URI, "/articulos/").concat(id));
        }
      }, {
        key: "getModeloProduct",
        value: function getModeloProduct(id) {
          return this.http.get("".concat(this.Myapi_URI, "/articulos/FilModelo/").concat(id));
        }
      }, {
        key: "getMarcaProduct",
        value: function getMarcaProduct(id) {
          return this.http.get("".concat(this.Myapi_URI, "/articulos/FilMarca/").concat(id));
        }
      }, {
        key: "getcategoriaProduct",
        value: function getcategoriaProduct(id) {
          return this.http.get("".concat(this.Myapi_URI, "/articulos/FilTipos/").concat(id));
        }
      }, {
        key: "getMaterialProduct",
        value: function getMaterialProduct(id) {
          return this.http.get("".concat(this.Myapi_URI, "/articulos/FilMaterial/").concat(id));
        }
      }]);

      return ProductosService;
    }();

    ProductosService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProductosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductosService);
    /***/
  },

  /***/
  "./src/app/todo/shopping/shopping.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/todo/shopping/shopping.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoShoppingShoppingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-deck {\n  padding-left: 50px;\n}\n\n.card-body {\n  padding: 5px;\n  text-align: justify;\n}\n\n.card-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.menusito {\n  padding-left: 10px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9zaG9wcGluZy9DOlxcUFJPWUVDVE9TXFxtaXNhcHBcXGJsYW5xdWVyaWEvc3JjXFxhcHBcXHRvZG9cXHNob3BwaW5nXFxzaG9wcGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9kby9zaG9wcGluZy9zaG9wcGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvdG9kby9zaG9wcGluZy9zaG9wcGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWRlY2t7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuLmNhcmQtZm9vdGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWVudXNpdG97XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn0iLCIuY2FyZC1kZWNrIHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1lbnVzaXRvIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/todo/shopping/shopping.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/todo/shopping/shopping.component.ts ***!
    \*****************************************************/

  /*! exports provided: ShoppingComponent */

  /***/
  function srcAppTodoShoppingShoppingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingComponent", function () {
      return ShoppingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/productos.service */
    "./src/app/todo/services/productos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ShoppingComponent =
    /*#__PURE__*/
    function () {
      function ShoppingComponent(router, list_producto) {
        _classCallCheck(this, ShoppingComponent);

        this.router = router;
        this.list_producto = list_producto;
        this.classes = 'row';
        this.arrayproductos = [];
        this.p = 1;
      }

      _createClass(ShoppingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.list_producto.getAllProducts().subscribe(function (res) {
            console.log(res);
            _this9.arrayproductos = res;
          }, function (err) {
            return console.error(err);
          });
        }
      }]);

      return ShoppingComponent;
    }();

    ShoppingComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], ShoppingComponent.prototype, "classes", void 0);
    ShoppingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shopping',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shopping.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/shopping/shopping.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shopping.component.scss */
      "./src/app/todo/shopping/shopping.component.scss")).default]
    })], ShoppingComponent);
    /***/
  },

  /***/
  "./src/app/todo/toallas/toallas.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/todo/toallas/toallas.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoToallasToallasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-deck {\n  padding-left: 50px;\n}\n\n.card-body {\n  padding: 5px;\n  text-align: justify;\n}\n\n.card-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.menusito {\n  padding-left: 10px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2FsbGFzL0M6XFxQUk9ZRUNUT1NcXG1pc2FwcFxcYmxhbnF1ZXJpYS9zcmNcXGFwcFxcdG9kb1xcdG9hbGxhc1xcdG9hbGxhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9kby90b2FsbGFzL3RvYWxsYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDR0o7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9hbGxhcy90b2FsbGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZGVja3tcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4uY2FyZC1mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW51c2l0b3tcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufSIsIi5jYXJkLWRlY2sge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWVudXNpdG8ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/todo/toallas/toallas.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/todo/toallas/toallas.component.ts ***!
    \***************************************************/

  /*! exports provided: ToallasComponent */

  /***/
  function srcAppTodoToallasToallasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToallasComponent", function () {
      return ToallasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/productos.service */
    "./src/app/todo/services/productos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ToallasComponent =
    /*#__PURE__*/
    function () {
      function ToallasComponent(router, list_producto, route) {
        var _this10 = this;

        _classCallCheck(this, ToallasComponent);

        this.router = router;
        this.list_producto = list_producto;
        this.route = route;
        this.classes = 'row';
        this.arrayproductos = [];
        this.route.params.subscribe(function (params) {
          if (params['id'] != null) {
            var id = params['id'];
          }

          _this10.list_producto.getcategoriaProduct(id).subscribe(function (res) {
            console.log(res);
            _this10.arrayproductos = res;
          }, function (err) {
            return console.error(err);
          });
        });
      }

      _createClass(ToallasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToallasComponent;
    }();

    ToallasComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], ToallasComponent.prototype, "classes", void 0);
    ToallasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-toallas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toallas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/toallas/toallas.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toallas.component.scss */
      "./src/app/todo/toallas/toallas.component.scss")).default]
    })], ToallasComponent);
    /***/
  },

  /***/
  "./src/app/truncate.pipe.ts":
  /*!**********************************!*\
    !*** ./src/app/truncate.pipe.ts ***!
    \**********************************/

  /*! exports provided: TruncatePipe */

  /***/
  function srcAppTruncatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruncatePipe", function () {
      return TruncatePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TruncatePipe =
    /*#__PURE__*/
    function () {
      function TruncatePipe() {
        _classCallCheck(this, TruncatePipe);
      }

      _createClass(TruncatePipe, [{
        key: "transform",
        value: function transform(value, limite) {
          var limit = parseInt(limite);
          return value.length > limit ? value.substring(0, limit) + "..." : value;
        }
      }]);

      return TruncatePipe;
    }();

    TruncatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: "truncate"
    })], TruncatePipe);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\PROYECTOS\misapp\blanqueria\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map