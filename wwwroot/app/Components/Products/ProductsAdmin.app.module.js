"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var Product_service_1 = require("./Product.service");
var Products_admin_1 = require("./Products-admin");
var ProductsAdminAppModule = (function () {
    function ProductsAdminAppModule() {
    }
    ProductsAdminAppModule.prototype.ngDoBootstrap = function () {
    };
    return ProductsAdminAppModule;
}());
ProductsAdminAppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule, kendo_angular_grid_1.GridModule],
        declarations: [Products_admin_1.ProductsAdmin],
        providers: [
            Product_service_1.ProductService
        ],
        entryComponents: [
            Products_admin_1.ProductsAdmin
        ],
        schemas: [
            core_1.CUSTOM_ELEMENTS_SCHEMA
        ],
        bootstrap: [Products_admin_1.ProductsAdmin]
    })
], ProductsAdminAppModule);
exports.ProductsAdminAppModule = ProductsAdminAppModule;
//# sourceMappingURL=ProductsAdmin.app.module.js.map