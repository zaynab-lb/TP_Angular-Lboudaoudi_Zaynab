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
    function User(userId, firstName, lastName, age, email, password) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.userType = UserType.Member;
        this.email = email;
        this.password = password;
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
    Object.defineProperty(User.prototype, "UserId", {
        get: function () {
            return this.userId;
        },
        set: function (userId) {
            this.userId = userId;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    Object.defineProperty(User.prototype, "FirstName", {
        set: function (firstName) {
            this.firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "LastName", {
        get: function () {
            return this.lastName;
        },
        set: function (lastName) {
            this.lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Age", {
        get: function () {
            return this.age;
        },
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "UserType", {
        get: function () {
            return this.userType;
        },
        set: function (userType) {
            this.userType = userType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Email", {
        get: function () {
            return this.email;
        },
        set: function (email) {
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Password", {
        get: function () {
            return this.password;
        },
        set: function (password) {
            this.password = password;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.User = User;
