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
var user_service_1 = require("./user.service");
var users_admin_1 = require("./users-admin");
var UsersAdminAppModule = (function () {
    function UsersAdminAppModule() {
    }
    UsersAdminAppModule.prototype.ngDoBootstrap = function () {
    };
    return UsersAdminAppModule;
}());
UsersAdminAppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule, kendo_angular_grid_1.GridModule],
        declarations: [users_admin_1.UsersAdmin],
        providers: [
            user_service_1.UserService
        ],
        entryComponents: [
            users_admin_1.UsersAdmin
        ],
        schemas: [
            core_1.CUSTOM_ELEMENTS_SCHEMA
        ],
        bootstrap: [users_admin_1.UsersAdmin]
    })
], UsersAdminAppModule);
exports.UsersAdminAppModule = UsersAdminAppModule;
//# sourceMappingURL=UsersAdmin.app.module.js.map