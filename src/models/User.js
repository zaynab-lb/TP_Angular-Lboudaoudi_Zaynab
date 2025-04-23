"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var UserType;
(function (UserType) {
    UserType["Admin"] = "Admin";
    UserType["Member"] = "Member";
    UserType["Guest"] = "Guest";
})(UserType || (UserType = {}));
var User = /** @class */ (function () {
    function User(userId, firstName, lastName, age) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.userType = UserType.Member; // Default user type
    }
    User.prototype.fullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    User.prototype.greetUser = function () {
        switch (this.userType) {
            case UserType.Admin:
                return "Welcome Admin ".concat(this.fullName(), ", you have full access.");
            case UserType.Member:
                return "Welcome Member ".concat(this.fullName(), ", enjoy your shopping.");
            default:
                return "Welcome Guest, feel free to explore.";
        }
    };
    User.prototype.getUserId = function () {
        return this.userId;
    };
    User.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setAge = function (age) {
        this.age = age;
    };
    User.prototype.getUserType = function () {
        return this.userType;
    };
    User.prototype.setUserType = function (userType) {
        this.userType = userType;
    };
    return User;
}());
exports.User = User;
