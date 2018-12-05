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
var Product_service_1 = require("./Product.service");
// http://www.c-sharpcorner.com/article/server-side-paging-in-kendo-grid-for-angular-2/
var ProductsAdmin = (function () {
    function ProductsAdmin(_service) {
        this._service = _service;
        this.InEdit = false;
        this.pageSize = 10;
        this.skip = 0;
        // �������� ������
        this.products = [];
        this.model = new Product_1.Product(0, '', '');
        this.submitted = false;
        this.Refresh();
    }
    ProductsAdmin.prototype.Refresh = function () {
        var _this = this;
        this._service.loadDataPaged(this.skip, this.pageSize).then(function (data) {
            _this.products = data.productList;
            _this.gridView = {
                data: _this.products,
                total: data.count
            };
        });
    };
    // CRUD
    ProductsAdmin.prototype.onSubmit = function () {
        var _this = this;
        console.log("Sumbitted Form ! ");
        this.submitted = true;
        this._service.AddOrUpdate(this.model).then(function (data) {
            _this._service.announceChange(1212);
            _this.Refresh();
        });
        this.InEdit = false;
    };
    ProductsAdmin.prototype.onUpdate = function (elem) {
        var _this = this;
        console.log(elem);
        this._service.Update(elem).then(function (data) {
            _this.Refresh();
        });
        this.InEdit = false;
    };
    ProductsAdmin.prototype.onDelete = function (elem) {
        var _this = this;
        console.log("Delete Form ! ");
        console.log(elem);
        this._service.Delete(elem).then(function (data) {
            _this.Refresh();
        });
    };
    ProductsAdmin.prototype.onSelect = function (elem) {
        if (elem == 0)
            this.model = new Product_1.Product(0, '', '');
        else {
            this.model = elem;
        }
        this.InEdit = true;
    };
    // ��������
    ProductsAdmin.prototype.pageChange = function (event) {
        this.skip = event.skip;
        this.Refresh();
    };
    return ProductsAdmin;
}());
ProductsAdmin = __decorate([
    core_1.Component({
        moduleId: __filename,
        selector: 'caform',
        templateUrl: './app/products-admin.html'
    }),
    __metadata("design:paramtypes", [Product_service_1.ProductService])
], ProductsAdmin);
exports.ProductsAdmin = ProductsAdmin;
//# sourceMappingURL=Products-admin.js.map