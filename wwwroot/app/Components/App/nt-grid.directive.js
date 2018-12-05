"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.ntGrid = {
    bindings: {
        gridOptions: "<"
    },
    template: "<div ui-grid=\"$ctrl.gridOptions\"></div>"
};
angular.module("ng2uigrid").component("ntGrid", exports.ntGrid);
var core_1 = require("@angular/core");
var static_1 = require("@angular/upgrade/static");
var NtGridDirective = (function (_super) {
    __extends(NtGridDirective, _super);
    function NtGridDirective(elementRef, injector) {
        return _super.call(this, "ntGrid", elementRef, injector) || this;
    }
    return NtGridDirective;
}(static_1.UpgradeComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NtGridDirective.prototype, "gridOptions", void 0);
NtGridDirective = __decorate([
    core_1.Directive({
        selector: "nt-grid"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Injector])
], NtGridDirective);
exports.NtGridDirective = NtGridDirective;
//# sourceMappingURL=nt-grid.directive.js.map