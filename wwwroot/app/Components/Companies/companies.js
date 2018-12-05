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
var Company_1 = require("./Company");
var company_service_1 = require("./company.service");
// http://www.c-sharpcorner.com/article/server-side-paging-in-kendo-grid-for-angular-2/
var Companies = (function () {
    function Companies(_service) {
        this._service = _service;
        this.pageSize = 10;
        this.skip = 0;
        // �������� ������
        this.companies = [];
        this.model = new Company_1.Company(0, '', '', '', '', '', '');
        this.submitted = false;
        this.Refresh();
    }
    Companies.prototype.Refresh = function () {
        var _this = this;
        this._service.loadDataPaged(this.skip, this.pageSize).then(function (data) {
            _this.companies = data.companyList;
            _this.gridView = {
                data: _this.companies,
                total: data.count
            };
        });
    };
    // ��������
    Companies.prototype.pageChange = function (event) {
        this.skip = event.skip;
        this.Refresh();
    };
    return Companies;
}());
Companies = __decorate([
    core_1.Component({
        moduleId: __filename,
        selector: 'cform',
        templateUrl: './app/companies.html'
    }),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], Companies);
exports.Companies = Companies;
//# sourceMappingURL=companies.js.map