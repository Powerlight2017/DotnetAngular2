"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Product_1 = require("./Product");
var product_service_1 = require("./product.service");
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValidMailFormat = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "Please provide a valid email": true };
        }
        return null;
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;
var ProductForm = (function () {
    function ProductForm(_service) {
        this._service = _service;
        this.model = new Product_1.Product(0, '', '');
        this.submitted = false;
    }
    ProductForm.prototype.onSubmit = function () {
        var _this = this;
        console.log("Sumbitted Form ! ");
        this.submitted = true;
        this._service.Add(this.model).then(function (data) {
            _this._service.announceChange(1212);
        });
    };
    Object.defineProperty(ProductForm.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    return ProductForm;
}());
ProductForm = __decorate([
    core_1.Component({
        moduleId: __filename,
        selector: 'pform',
        templateUrl: './app/productForm.component.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductForm);
exports.ProductForm = ProductForm;
//# sourceMappingURL=productForm.js.map