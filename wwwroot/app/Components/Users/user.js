"use strict";
var User = (function () {
    function User(id, email, password, userPermissions) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.userPermissions = userPermissions;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map