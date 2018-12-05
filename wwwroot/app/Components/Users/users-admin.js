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
var user_1 = require("./user");
var user_service_1 = require("./user.service");
var userpermission_1 = require("./userpermission");
// http://www.c-sharpcorner.com/article/server-side-paging-in-kendo-grid-for-angular-2/
var UsersAdmin = (function () {
    function UsersAdmin(_service) {
        this._service = _service;
        this.InEdit = false;
        this.pageSize = 10;
        this.skip = 0;
        // ���������� 
        this.constUserPermissionEdit = 'permission-edit';
        this.constUserPermissionSpecialSections = 'permission-special-sections';
        // �������� ������
        this.Users = [];
        this.model = new user_1.User(0, '', '', []);
        this.submitted = false;
        this.Refresh();
    }
    UsersAdmin.prototype.Refresh = function () {
        var _this = this;
        this._service.loadDataPaged(this.skip, this.pageSize).then(function (data) {
            _this.Users = data.userList;
            _this.gridView = {
                data: _this.Users,
                total: data.count
            };
        });
    };
    // CRUD
    UsersAdmin.prototype.onSubmit = function () {
        var _this = this;
        console.log("Sumbitted Form ! ");
        this.submitted = true;
        this._service.AddOrUpdate(this.model).then(function (data) {
            _this._service.announceChange(1212);
            _this.Refresh();
        });
        this.InEdit = false;
    };
    UsersAdmin.prototype.onUpdate = function (elem) {
        var _this = this;
        console.log(elem);
        this._service.Update(elem).then(function (data) {
            _this.Refresh();
        });
        this.InEdit = false;
    };
    UsersAdmin.prototype.onDelete = function (elem) {
        var _this = this;
        console.log("Delete Form ! ");
        console.log(elem);
        this._service.Delete(elem).then(function (data) {
            _this.Refresh();
        });
    };
    UsersAdmin.prototype.onSelect = function (elem) {
        if (elem == 0) {
            this.model = new user_1.User(0, '', '', []);
            this.model.userPermissions = [];
        }
        else {
            this.model = elem;
        }
        this.InEdit = true;
    };
    /// ��������� ���������� ���� � ������������
    UsersAdmin.prototype.requiredPermissionExist = function (userPermissions, permissionName) {
        for (var i = 0; i < userPermissions.length; i++)
            if (userPermissions[i].permissionName == permissionName)
                return true;
        return false;
    };
    // ��������� ���������� � ������� ������
    UsersAdmin.prototype.setPermission = function (userPermissions, permissionName) {
        var exists = false;
        for (var i = 0; i < userPermissions.length; i++)
            if (userPermissions[i].permissionName == permissionName)
                exists = true;
        var newPermissions = [];
        if (exists) {
            for (var i = 0; i < userPermissions.length; i++)
                if (userPermissions[i].permissionName != permissionName)
                    newPermissions.push(userPermissions[i]);
        }
        else {
            //���� ��������
            for (var i = 0; i < userPermissions.length; i++)
                newPermissions.push(userPermissions[i]);
            var newPerm = new userpermission_1.UserPermission(this.model.id, permissionName);
            newPermissions.push(newPerm);
        }
        this.model.userPermissions = newPermissions;
    };
    // ��������
    UsersAdmin.prototype.pageChange = function (event) {
        this.skip = event.skip;
        this.Refresh();
    };
    return UsersAdmin;
}());
UsersAdmin = __decorate([
    core_1.Component({
        moduleId: __filename,
        selector: 'caform',
        templateUrl: './app/users-admin.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersAdmin);
exports.UsersAdmin = UsersAdmin;
//# sourceMappingURL=users-admin.js.map