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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/toPromise");
var CompanyService = (function () {
    function CompanyService(_http) {
        this._http = _http;
        this.RegenerateData = new Rx_1.Subject();
        // Observable string streams
        this.RegenerateData$ = this.RegenerateData.asObservable();
    }
    CompanyService.prototype.announceChange = function (mission) {
        this.RegenerateData.next(mission);
    };
    CompanyService.prototype.loadData = function () {
        var _this = this;
        return this._http.get('/api/companies')
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    CompanyService.prototype.loadDataPaged = function (skip, take) {
        var _this = this;
        return this._http.get('/api/companies/getpaged?skip=' + skip + "&take=" + take)
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    CompanyService.prototype.Update = function (model) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(model);
        return this._http.put('/api/companies/', body, options).toPromise().catch(this.handleErrorPromise);
    };
    CompanyService.prototype.AddOrUpdate = function (model) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        if (model["id"] > 0)
            return this.Update(model);
        else {
            var body = JSON.stringify(model);
            return this._http.post('/api/companies/', body, options).toPromise().catch(this.handleErrorPromise);
        }
    };
    CompanyService.prototype.Delete = function (id) {
        return this._http.delete('/api/companies/?id=' + id).toPromise().catch(this.handleErrorPromise);
    };
    CompanyService.prototype.extractArray = function (res, showprogress) {
        if (showprogress === void 0) { showprogress = true; }
        var data = res.json();
        return data || [];
    };
    CompanyService.prototype.handleErrorPromise = function (error) {
        try {
            error = JSON.parse(error._body);
        }
        catch (e) {
        }
        var errMsg = error.errorMessage
            ? error.errorMessage
            : error.message
                ? error.message
                : error._body
                    ? error._body
                    : error.status
                        ? error.status + " - " + error.statusText
                        : 'unknown server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return CompanyService;
}());
CompanyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map