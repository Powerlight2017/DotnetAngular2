"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var Product_service_1 = require("./Product.service");
var Products_1 = require("./Products");
var ProductsAppModule = (function () {
    function ProductsAppModule() {
    }
    ProductsAppModule.prototype.ngDoBootstrap = function () {
    };
    return ProductsAppModule;
}());
ProductsAppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule, kendo_angular_grid_1.GridModule],
        declarations: [Products_1.Products],
        providers: [
            Product_service_1.ProductService
        ],
        entryComponents: [
            Products_1.Products
        ],
        schemas: [
            core_1.CUSTOM_ELEMENTS_SCHEMA
        ],
        bootstrap: [Products_1.Products]
    })
], ProductsAppModule);
exports.ProductsAppModule = ProductsAppModule;
//# sourceMappingURL=Products.app.module.js.map