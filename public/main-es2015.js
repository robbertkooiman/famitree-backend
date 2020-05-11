(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-person-dialog/add-person-dialog.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-person-dialog/add-person-dialog.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>New person</h1>\n<div mat-dialog-content>\n  <mat-form-field>\n    <mat-label>First name</mat-label>\n    <input matInput [(ngModel)]=\"person.firstName\">\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Last name</mat-label>\n    <input matInput [(ngModel)]=\"person.lastName\">\n  </mat-form-field>\n  <mat-radio-group aria-label=\"Status\" [(ngModel)]=\"person.status\">\n    <mat-radio-button value=\"ALIVE\">Alive</mat-radio-button>\n    <mat-radio-button value=\"DECEASED\">Deceased</mat-radio-button>\n    <mat-radio-button value=\"UNKNOWN\">Unknown</mat-radio-button>\n  </mat-radio-group>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"birth\" [(ngModel)]=\"person.birthDate\" placeholder=\"Birthdate\">\n    <mat-datepicker-toggle matSuffix [for]=\"birth\"></mat-datepicker-toggle>\n    <mat-datepicker #birth></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"death\" [(ngModel)]=\"person.deathDate\" placeholder=\"Date of death\">\n    <mat-datepicker-toggle matSuffix [for]=\"death\"></mat-datepicker-toggle>\n    <mat-datepicker #death></mat-datepicker>\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"dialogRef.close(null)\">Cancel</button>\n  <button mat-button (click)=\"dialogRef.close(person)\" color=\"accent\" cdkFocusInitial>Add</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-person/add-person.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-person/add-person.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-button color=\"accent\" (click)=\"add()\"><mat-icon>add</mat-icon> {{buttonText}}</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-relation-dialog/add-relation-dialog.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-relation-dialog/add-relation-dialog.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Add relation</h1>\n<div mat-dialog-content>\n  {{data.person.firstName}} is a\n  <mat-form-field>\n    <mat-label>relation</mat-label>\n    <mat-select [(ngModel)]=\"selectedRelation\">\n      <mat-option *ngFor=\"let relationship of relationships\" [value]=\"relationship\">\n        {{relationship}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  of\n  <mat-form-field>\n    <mat-label>person</mat-label>\n    <mat-select [(ngModel)]=\"selectedPerson\">\n      <mat-option *ngFor=\"let person of persons\" [value]=\"person.id\">\n        {{person.firstName + ' ' + person.lastName}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"dialogRef.close(null)\">Cancel</button>\n  <button mat-button (click)=\"add()\" color=\"accent\" cdkFocusInitial>Add</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-navigation></app-navigation>\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-delete-dialog/confirm-delete-dialog.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-delete-dialog/confirm-delete-dialog.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Confirm</h1>\n<p mat-dialog-text>Are you sure you want to remove {{data.name}} permanently?</p>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"dialogRef.close(false)\">Cancel</button>\n  <button mat-button (click)=\"dialogRef.close(true)\" color=\"warn\" cdkFocusInitial>Remove</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/family-tree-person/family-tree-person.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/family-tree-person/family-tree-person.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>family-tree-person works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/family-tree/family-tree.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/family-tree/family-tree.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search\" *ngIf=\"!id\">\n  <h1>Search for a starting person</h1>\n  <p>Search for a person as a starting point:</p>\n  <mat-form-field>\n    <input matInput (input)=\"search($event.target.value)\" placeholder=\"Search by first name\"></mat-form-field>\n  <div class=\"persons\">\n\n    <app-person *ngFor=\"let person of persons\" [person]=\"person\" [plain]=\"true\"\n      [routerLink]=\"'/family-tree/'+person.id\"></app-person>\n  </div>\n  <h1>Can't find yourself?</h1>\n  <p>If you can't find yourself, create your person information here:</p>\n  <app-add-person></app-add-person>\n</div>\n<div class=\"tree\" *ngIf=\"id\">\n  <h1>{{centerPerson.firstName}}'s family tree</h1>\n  <div class=\"parents\">\n    <app-person *ngFor=\"let person of parents\" [person]=\"person\" [plain]=\"true\"\n      [routerLink]=\"'/family-tree/' + person.id\"></app-person>\n    <!-- <app-add-person buttonText=\"Add parent\"></app-add-person> -->\n  </div>\n  <div class=\"siblings\">\n    <app-person *ngIf=\"centerPerson\" [person]=\"centerPerson\" [plain]=\"true\" class=\"centerPerson\"></app-person>\n    <app-person *ngFor=\"let person of siblings\" [person]=\"person\" [plain]=\"true\"\n      [routerLink]=\"'/family-tree/' + person.id\"></app-person>\n    <!-- <app-add-person buttonText=\"Add sibling\"></app-add-person> -->\n  </div>\n  <div class=\"children\">\n    <app-person *ngFor=\"let person of children\" [person]=\"person\" [plain]=\"true\"\n      [routerLink]=\"'/family-tree/' + person.id\"></app-person>\n    <!-- <app-add-person buttonText=\"Add child\"></app-add-person> -->\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <h1>Famitree</h1>\n  <h2>The geneological database for everyone</h2>\n  <p>On this web application, you can find yourself and add family tree information to the public database. Help build\n    the\n    public geneological database by adding your family members, and discover your past!</p>\n  <a mat-raised-button color=\"accent\" routerLink=\"/family-tree\">Get started <mat-icon>keyboard_arrow_right</mat-icon>\n  </a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <h1 class=\"title\">Famitree</h1>\n    <span class=\"fill\">\n\n    </span>\n    <button mat-icon-button [matMenuTriggerFor]=\"nav\">\n      <mat-icon>\n        menu\n      </mat-icon>\n    </button>\n    <mat-menu #nav>\n      <button mat-menu-item routerLink=\"/\">Home</button>\n      <button mat-menu-item routerLink=\"/family-tree\">Family tree</button>\n      <button mat-menu-item routerLink=\"/persons\">All persons</button>\n    </mat-menu>\n  </mat-toolbar-row>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/person/person.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/person/person.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-title>{{ person?.firstName }} {{ person?.lastName }}</mat-card-title>\n  <mat-card-content>\n    <p>{{ person.birthDate?.toDate() | date:'dd-MM-yyyy'}}</p>\n    <p>{{ person.status === 'DECEASED' ? '†' : '' }}{{ person.deathDate?.toDate() | date:'dd-MM-yyyy'}}</p>\n    <ul *ngIf=\"!plain\">\n      <li *ngFor=\"let relation of person.relations\">{{formatRelation(relation)}}\n        <button mat-icon-button color=\"warn\" (click)=\"deleteRelation(relation.id)\">\n          <mat-icon>delete</mat-icon>\n        </button></li>\n    </ul>\n  </mat-card-content>\n  <mat-card-actions *ngIf=\"!plain\">\n    <button mat-button (click)=\"addRelation()\">\n      Add relation\n    </button>\n    <button mat-button color=\"warn\" (click)=\"delete()\">\n      Remove\n    </button>\n  </mat-card-actions>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/persons/persons.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/persons/persons.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-person *ngFor=\"let person of persons\" [person]=\"person\"></app-person>\n<app-add-person></app-add-person>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/add-person-dialog/add-person-dialog.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/add-person-dialog/add-person-dialog.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px;\n}\n\n.mat-radio-group {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXBlcnNvbi1kaWFsb2cvQzpcXFVzZXJzXFxSb2JiZXJ0XFxEZXNrdG9wXFxmYW1pdHJlZVxcZnJvbnRlbmQvc3JjXFxhcHBcXGFkZC1wZXJzb24tZGlhbG9nXFxhZGQtcGVyc29uLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRkLXBlcnNvbi1kaWFsb2cvYWRkLXBlcnNvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWRkLXBlcnNvbi1kaWFsb2cvYWRkLXBlcnNvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOztcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxufVxyXG5cclxuLm1hdC1yYWRpby1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59IiwiLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLm1hdC1yYWRpby1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/add-person-dialog/add-person-dialog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/add-person-dialog/add-person-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: AddPersonDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPersonDialogComponent", function() { return AddPersonDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../person */ "./src/app/person.ts");




let AddPersonDialogComponent = class AddPersonDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.person = new _person__WEBPACK_IMPORTED_MODULE_3__["Person"]({ status: 'UNKNOWN' });
    }
};
AddPersonDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AddPersonDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-person-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-person-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-person-dialog/add-person-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-person-dialog.component.scss */ "./src/app/add-person-dialog/add-person-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AddPersonDialogComponent);



/***/ }),

/***/ "./src/app/add-person/add-person.component.scss":
/*!******************************************************!*\
  !*** ./src/app/add-person/add-person.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXBlcnNvbi9DOlxcVXNlcnNcXFJvYmJlcnRcXERlc2t0b3BcXGZhbWl0cmVlXFxmcm9udGVuZC9zcmNcXGFwcFxcYWRkLXBlcnNvblxcYWRkLXBlcnNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRkLXBlcnNvbi9hZGQtcGVyc29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wZXJzb24vYWRkLXBlcnNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsImJ1dHRvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/add-person/add-person.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-person/add-person.component.ts ***!
  \****************************************************/
/*! exports provided: AddPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPersonComponent", function() { return AddPersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _add_person_dialog_add_person_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-person-dialog/add-person-dialog.component */ "./src/app/add-person-dialog/add-person-dialog.component.ts");





let AddPersonComponent = class AddPersonComponent {
    constructor(api, dialog) {
        this.api = api;
        this.dialog = dialog;
        this.buttonText = "Add person";
    }
    ngOnInit() {
    }
    add() {
        this.dialog.open(_add_person_dialog_add_person_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddPersonDialogComponent"]).afterClosed().subscribe(person => {
            if (person) {
                this.api.createPerson(person);
            }
        });
    }
};
AddPersonComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddPersonComponent.prototype, "buttonText", void 0);
AddPersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-person',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-person.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-person/add-person.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-person.component.scss */ "./src/app/add-person/add-person.component.scss")).default]
    })
], AddPersonComponent);



/***/ }),

/***/ "./src/app/add-relation-dialog/add-relation-dialog.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/add-relation-dialog/add-relation-dialog.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1yZWxhdGlvbi1kaWFsb2cvYWRkLXJlbGF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/add-relation-dialog/add-relation-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/add-relation-dialog/add-relation-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddRelationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRelationDialogComponent", function() { return AddRelationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _relation_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../relation-type.enum */ "./src/app/relation-type.enum.ts");
/* harmony import */ var _relation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../relation */ "./src/app/relation.ts");






let AddRelationDialogComponent = class AddRelationDialogComponent {
    constructor(dialogRef, data, api) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.api = api;
        this.relationships = ["Parent", "Child", "Sibling", "Partner"];
        this.persons = [];
        this.selectedRelation = null;
        this.selectedPerson = null;
    }
    ngOnInit() {
        this.api.getPersons().subscribe(persons => {
            this.persons = persons;
        });
    }
    add() {
        let relation = null;
        if (this.selectedRelation && this.selectedPerson) {
            switch (this.selectedRelation) {
                case OneWayRelationTypes.PARENT:
                    relation = new _relation__WEBPACK_IMPORTED_MODULE_5__["Relation"]({
                        type: _relation_type_enum__WEBPACK_IMPORTED_MODULE_4__["RelationType"].PARENT_CHILD,
                        person1: this.data.person.id,
                        person2: this.selectedPerson
                    });
                    break;
                case OneWayRelationTypes.CHILD:
                    relation = new _relation__WEBPACK_IMPORTED_MODULE_5__["Relation"]({
                        type: _relation_type_enum__WEBPACK_IMPORTED_MODULE_4__["RelationType"].PARENT_CHILD,
                        person1: this.selectedPerson,
                        person2: this.data.person.id,
                    });
                    break;
                case OneWayRelationTypes.SIBLING:
                    relation = new _relation__WEBPACK_IMPORTED_MODULE_5__["Relation"]({
                        type: _relation_type_enum__WEBPACK_IMPORTED_MODULE_4__["RelationType"].SIBLING,
                        person1: this.data.person.id,
                        person2: this.selectedPerson
                    });
                    break;
                case OneWayRelationTypes.PARTNER:
                    relation = new _relation__WEBPACK_IMPORTED_MODULE_5__["Relation"]({
                        type: _relation_type_enum__WEBPACK_IMPORTED_MODULE_4__["RelationType"].PARTNER,
                        person1: this.data.person.id,
                        person2: this.selectedPerson
                    });
                    break;
            }
        }
        this.dialogRef.close(relation);
    }
};
AddRelationDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
AddRelationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-relation-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-relation-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-relation-dialog/add-relation-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-relation-dialog.component.scss */ "./src/app/add-relation-dialog/add-relation-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AddRelationDialogComponent);

var OneWayRelationTypes;
(function (OneWayRelationTypes) {
    OneWayRelationTypes["PARENT"] = "Parent";
    OneWayRelationTypes["CHILD"] = "Child";
    OneWayRelationTypes["SIBLING"] = "Sibling";
    OneWayRelationTypes["PARTNER"] = "Partner";
})(OneWayRelationTypes || (OneWayRelationTypes = {}));


/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let ApiService = class ApiService {
    constructor(db) {
        this.db = db;
    }
    getPersons(q) {
        if (q) {
            const start = q;
            const end = q + "\uf8ff";
            return this.db.collection('persons', ref => ref.orderBy('firstName').startAt(start).endAt(end)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return Object.assign({ id }, data);
                });
            }));
        }
        return this.db.collection('persons').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getRelations() {
        return this.db.collection('relations').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    createPerson(person) {
        return this.db.collection('persons').add(person);
    }
    createRelation(relation) {
        relation.person1 = this.db.doc('persons/' + relation.person1).ref;
        relation.person2 = this.db.doc('persons/' + relation.person2).ref;
        return this.db.collection('relations').add(relation);
    }
    deletePerson(personId) {
        return this.db.collection('persons').doc(personId).delete();
    }
    deleteRelation(relationId) {
        return this.db.collection('relations').doc(relationId).delete();
    }
    getPersonsWithRelations() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.getPersons(), this.getRelations()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([persons, relations]) => {
            relations.forEach(relation => {
                persons.forEach(person => {
                    if (person.id === relation.person1.id) {
                        relation.person1 = person;
                    }
                    else if (person.id === relation.person2.id) {
                        relation.person2 = person;
                    }
                });
                persons.forEach(person => {
                    if ((person.id === relation.person1.id || person.id === relation.person2.id)) {
                        !person.relations ? person.relations = [relation] : !person.relations.find(find => find.id === relation.id) ? person.relations.push(relation) : null;
                    }
                });
            });
            return persons;
        }));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _persons_persons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./persons/persons.component */ "./src/app/persons/persons.component.ts");
/* harmony import */ var _family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./family-tree/family-tree.component */ "./src/app/family-tree/family-tree.component.ts");






const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'family-tree',
        component: _family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_5__["FamilyTreeComponent"]
    },
    {
        path: 'family-tree/:id',
        component: _family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_5__["FamilyTreeComponent"]
    },
    {
        path: 'persons',
        component: _persons_persons_component__WEBPACK_IMPORTED_MODULE_4__["PersonsComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  display: block;\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxSb2JiZXJ0XFxEZXNrdG9wXFxmYW1pdHJlZVxcZnJvbnRlbmQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIiwibWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'famitree';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _persons_persons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./persons/persons.component */ "./src/app/persons/persons.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var _add_person_add_person_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-person/add-person.component */ "./src/app/add-person/add-person.component.ts");
/* harmony import */ var _confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./confirm-delete-dialog/confirm-delete-dialog.component */ "./src/app/confirm-delete-dialog/confirm-delete-dialog.component.ts");
/* harmony import */ var _add_person_dialog_add_person_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-person-dialog/add-person-dialog.component */ "./src/app/add-person-dialog/add-person-dialog.component.ts");
/* harmony import */ var _add_relation_dialog_add_relation_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-relation-dialog/add-relation-dialog.component */ "./src/app/add-relation-dialog/add-relation-dialog.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./family-tree/family-tree.component */ "./src/app/family-tree/family-tree.component.ts");
/* harmony import */ var _family_tree_person_family_tree_person_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./family-tree-person/family-tree-person.component */ "./src/app/family-tree-person/family-tree-person.component.ts");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
            _persons_persons_component__WEBPACK_IMPORTED_MODULE_9__["PersonsComponent"],
            _person_person_component__WEBPACK_IMPORTED_MODULE_14__["PersonComponent"],
            _add_person_add_person_component__WEBPACK_IMPORTED_MODULE_15__["AddPersonComponent"],
            _confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmDeleteDialogComponent"],
            _add_person_dialog_add_person_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AddPersonDialogComponent"],
            _add_relation_dialog_add_relation_dialog_component__WEBPACK_IMPORTED_MODULE_18__["AddRelationDialogComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
            _family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_20__["FamilyTreeComponent"],
            _family_tree_person_family_tree_person_component__WEBPACK_IMPORTED_MODULE_21__["FamilyTreePersonComponent"]
        ],
        imports: [
            _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [
            _confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmDeleteDialogComponent"],
            _add_person_dialog_add_person_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AddPersonDialogComponent"],
            _add_relation_dialog_add_relation_dialog_component__WEBPACK_IMPORTED_MODULE_18__["AddRelationDialogComponent"],
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/confirm-delete-dialog/confirm-delete-dialog.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/confirm-delete-dialog/confirm-delete-dialog.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-actions {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybS1kZWxldGUtZGlhbG9nL0M6XFxVc2Vyc1xcUm9iYmVydFxcRGVza3RvcFxcZmFtaXRyZWVcXGZyb250ZW5kL3NyY1xcYXBwXFxjb25maXJtLWRlbGV0ZS1kaWFsb2dcXGNvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29uZmlybS1kZWxldGUtZGlhbG9nL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO1VBQUEseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy9jb25maXJtLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn0iLCIubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/confirm-delete-dialog/confirm-delete-dialog.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/confirm-delete-dialog/confirm-delete-dialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: ConfirmDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeleteDialogComponent", function() { return ConfirmDeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let ConfirmDeleteDialogComponent = class ConfirmDeleteDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
};
ConfirmDeleteDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ConfirmDeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-delete-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-delete-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-delete-dialog/confirm-delete-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-delete-dialog.component.scss */ "./src/app/confirm-delete-dialog/confirm-delete-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ConfirmDeleteDialogComponent);



/***/ }),

/***/ "./src/app/family-tree-person/family-tree-person.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/family-tree-person/family-tree-person.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhbWlseS10cmVlLXBlcnNvbi9mYW1pbHktdHJlZS1wZXJzb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/family-tree-person/family-tree-person.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/family-tree-person/family-tree-person.component.ts ***!
  \********************************************************************/
/*! exports provided: FamilyTreePersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyTreePersonComponent", function() { return FamilyTreePersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FamilyTreePersonComponent = class FamilyTreePersonComponent {
    constructor() { }
    ngOnInit() {
    }
};
FamilyTreePersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-family-tree-person',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./family-tree-person.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/family-tree-person/family-tree-person.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./family-tree-person.component.scss */ "./src/app/family-tree-person/family-tree-person.component.scss")).default]
    })
], FamilyTreePersonComponent);



/***/ }),

/***/ "./src/app/family-tree/family-tree.component.scss":
/*!********************************************************!*\
  !*** ./src/app/family-tree/family-tree.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".persons {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.parents,\n.children, .siblings {\n  min-height: 110px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.parents > *,\n.children > *, .siblings > * {\n  -webkit-box-flex: 0;\n          flex: 0 1 300px;\n  margin: 5px;\n}\n\n.centerPerson {\n  border: 2px solid blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFtaWx5LXRyZWUvQzpcXFVzZXJzXFxSb2JiZXJ0XFxEZXNrdG9wXFxmYW1pdHJlZVxcZnJvbnRlbmQvc3JjXFxhcHBcXGZhbWlseS10cmVlXFxmYW1pbHktdHJlZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmFtaWx5LXRyZWUvZmFtaWx5LXRyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDREQUFBO0FDQ0Y7O0FERUE7O0VBRUUsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FEQ0U7O0VBQ0UsbUJBQUE7VUFBQSxlQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREVBO0VBQ0Usc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2ZhbWlseS10cmVlL2ZhbWlseS10cmVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcnNvbnMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxufVxyXG5cclxuLnBhcmVudHMsXHJcbi5jaGlsZHJlbiwgLnNpYmxpbmdzIHtcclxuICBtaW4taGVpZ2h0OiAxMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICA+KiB7XHJcbiAgICBmbGV4OiAwIDEgMzAwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5jZW50ZXJQZXJzb24ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XHJcbn0iLCIucGVyc29ucyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xufVxuXG4ucGFyZW50cyxcbi5jaGlsZHJlbiwgLnNpYmxpbmdzIHtcbiAgbWluLWhlaWdodDogMTEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnBhcmVudHMgPiAqLFxuLmNoaWxkcmVuID4gKiwgLnNpYmxpbmdzID4gKiB7XG4gIGZsZXg6IDAgMSAzMDBweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5jZW50ZXJQZXJzb24ge1xuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/family-tree/family-tree.component.ts":
/*!******************************************************!*\
  !*** ./src/app/family-tree/family-tree.component.ts ***!
  \******************************************************/
/*! exports provided: FamilyTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyTreeComponent", function() { return FamilyTreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _relation_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../relation-type.enum */ "./src/app/relation-type.enum.ts");







let FamilyTreeComponent = class FamilyTreeComponent {
    constructor(api, activatedRoute) {
        this.api = api;
        this.activatedRoute = activatedRoute;
        this.id = null;
        this.q$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.persons = [];
        this.parents = [];
        this.children = [];
        this.centerPerson = null;
    }
    ngOnInit() {
        this.q$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(q => this.api.getPersons(q))).subscribe(results => {
            this.persons = results;
        });
        const id$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(params => params.get('id')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(id => this.id = id));
        const persons$ = id$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.api.getPersonsWithRelations()));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(id$, persons$).subscribe(([id, persons]) => {
            console.log(persons);
            this.centerPerson = persons.find(person => id === person.id);
            this.parents = this.getParents(this.centerPerson);
            this.children = this.getChildren(this.centerPerson);
        });
    }
    getParents(person) {
        if (person && person.relations) {
            const persons = [];
            person.relations.forEach(relation => {
                if (relation.type === _relation_type_enum__WEBPACK_IMPORTED_MODULE_6__["RelationType"].PARENT_CHILD && relation.person2.id === person.id) {
                    persons.push(relation.person1);
                }
            });
            return persons;
        }
        return [];
    }
    getChildren(person) {
        if (person && person.relations) {
            const persons = [];
            person.relations.forEach(relation => {
                if (relation.type === _relation_type_enum__WEBPACK_IMPORTED_MODULE_6__["RelationType"].PARENT_CHILD && relation.person1.id === person.id) {
                    persons.push(relation.person2);
                }
            });
            return persons;
        }
        return [];
    }
    search(event) {
        this.q$.next(event);
    }
};
FamilyTreeComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
FamilyTreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-family-tree',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./family-tree.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/family-tree/family-tree.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./family-tree.component.scss */ "./src/app/family-tree/family-tree.component.scss")).default]
    })
], FamilyTreeComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");














const IMPORTS = [
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: IMPORTS,
        exports: IMPORTS,
        providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"], useValue: 'en-GB' }]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fill {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9DOlxcVXNlcnNcXFJvYmJlcnRcXERlc2t0b3BcXGZhbWl0cmVlXFxmcm9udGVuZC9zcmNcXGFwcFxcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7VUFBQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsbCB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn0iLCIuZmlsbCB7XG4gIGZsZXgtZ3JvdzogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavigationComponent = class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/person.ts":
/*!***************************!*\
  !*** ./src/app/person.ts ***!
  \***************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status */ "./src/app/status.ts");


class Person {
    constructor(person) {
        return {
            firstName: person.firstName || '',
            lastName: person.lastName || '',
            birthDate: person.birthDate || null,
            deathDate: person.deathDate || null,
            status: person.status || _status__WEBPACK_IMPORTED_MODULE_1__["Status"].UNKNOWN,
        };
    }
}


/***/ }),

/***/ "./src/app/person/person.component.scss":
/*!**********************************************!*\
  !*** ./src/app/person/person.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: -webkit-box;\n  display: flex;\n  text-align: center;\n}\n:host .mat-card {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .mat-card .mat-card-actions {\n  text-align: right;\n}\n:host .mat-card .mat-card-actions, :host .mat-card li .mat-icon-button {\n  opacity: 0;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n:host .mat-card .mat-card-content {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .mat-card:hover .mat-card-actions, :host .mat-card:hover li .mat-icon-button {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uL0M6XFxVc2Vyc1xcUm9iYmVydFxcRGVza3RvcFxcZmFtaXRyZWVcXGZyb250ZW5kL3NyY1xcYXBwXFxwZXJzb25cXHBlcnNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGVyc29uL3BlcnNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0VKO0FEREk7RUFDRSxpQkFBQTtBQ0dOO0FEREk7RUFDRSxVQUFBO0VBQ0EsaUNBQUE7RUFBQSx5QkFBQTtBQ0dOO0FEREk7RUFDRSxtQkFBQTtVQUFBLE9BQUE7QUNHTjtBRERJO0VBQ0UsVUFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvcGVyc29uL3BlcnNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAubWF0LWNhcmQge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jYXJkLWFjdGlvbnMsIGxpIC5tYXQtaWNvbi1idXR0b24ge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgfVxyXG4gICAgLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciAubWF0LWNhcmQtYWN0aW9ucywgJjpob3ZlciBsaSAubWF0LWljb24tYnV0dG9uIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAubWF0LWNhcmQge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAubWF0LWNhcmQgLm1hdC1jYXJkLWFjdGlvbnMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbjpob3N0IC5tYXQtY2FyZCAubWF0LWNhcmQtYWN0aW9ucywgOmhvc3QgLm1hdC1jYXJkIGxpIC5tYXQtaWNvbi1idXR0b24ge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuOmhvc3QgLm1hdC1jYXJkIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgZmxleDogMTtcbn1cbjpob3N0IC5tYXQtY2FyZDpob3ZlciAubWF0LWNhcmQtYWN0aW9ucywgOmhvc3QgLm1hdC1jYXJkOmhvdmVyIGxpIC5tYXQtaWNvbi1idXR0b24ge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/person/person.component.ts":
/*!********************************************!*\
  !*** ./src/app/person/person.component.ts ***!
  \********************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirm-delete-dialog/confirm-delete-dialog.component */ "./src/app/confirm-delete-dialog/confirm-delete-dialog.component.ts");
/* harmony import */ var _relation_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../relation-type.enum */ "./src/app/relation-type.enum.ts");
/* harmony import */ var _add_relation_dialog_add_relation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-relation-dialog/add-relation-dialog.component */ "./src/app/add-relation-dialog/add-relation-dialog.component.ts");







let PersonComponent = class PersonComponent {
    constructor(api, dialog) {
        this.api = api;
        this.dialog = dialog;
        this.plain = false;
    }
    ngOnInit() {
    }
    formatStatus(status) {
        return status.substr(0, 1) + status.substr(1).toLowerCase();
    }
    formatRelation(relation) {
        switch (relation.type) {
            case _relation_type_enum__WEBPACK_IMPORTED_MODULE_5__["RelationType"].PARENT_CHILD:
                return relation.person1.id === this.person.id ? "Parent of " + relation.person2.firstName : "Child of " + relation.person1.firstName;
            case _relation_type_enum__WEBPACK_IMPORTED_MODULE_5__["RelationType"].SIBLING:
                return relation.person1.id === this.person.id ? "Sibling of " + relation.person2.firstName : "Sibling of " + relation.person1.firstName;
            case _relation_type_enum__WEBPACK_IMPORTED_MODULE_5__["RelationType"].PARTNER:
                return relation.person1.id === this.person.id ? "Partner of " + relation.person2.firstName : "Partner of " + relation.person1.firstName;
        }
    }
    addRelation() {
        this.dialog.open(_add_relation_dialog_add_relation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddRelationDialogComponent"], { data: { person: this.person } }).afterClosed().subscribe(relation => {
            if (relation) {
                this.api.createRelation(relation);
            }
        });
    }
    delete() {
        this.dialog.open(_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDeleteDialogComponent"], { data: { name: this.person.firstName + ' ' + this.person.lastName } }).afterClosed().subscribe(result => {
            if (result) {
                this.api.deletePerson(this.person.id);
            }
        });
    }
    deleteRelation(relationId) {
        this.dialog.open(_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDeleteDialogComponent"], { data: { name: this.person.firstName + '\'s relation' } }).afterClosed().subscribe(result => {
            if (result) {
                this.api.deleteRelation(relationId);
            }
        });
    }
};
PersonComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('person')
], PersonComponent.prototype, "person", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('plain')
], PersonComponent.prototype, "plain", void 0);
PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-person',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./person.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/person/person.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./person.component.scss */ "./src/app/person/person.component.scss")).default]
    })
], PersonComponent);



/***/ }),

/***/ "./src/app/persons/persons.component.scss":
/*!************************************************!*\
  !*** ./src/app/persons/persons.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29ucy9DOlxcVXNlcnNcXFJvYmJlcnRcXERlc2t0b3BcXGZhbWl0cmVlXFxmcm9udGVuZC9zcmNcXGFwcFxccGVyc29uc1xccGVyc29ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGVyc29ucy9wZXJzb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSw0REFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGVyc29ucy9wZXJzb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/persons/persons.component.ts":
/*!**********************************************!*\
  !*** ./src/app/persons/persons.component.ts ***!
  \**********************************************/
/*! exports provided: PersonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonsComponent", function() { return PersonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



let PersonsComponent = class PersonsComponent {
    constructor(api) {
        this.api = api;
        this.persons = [];
        this.relations = [];
        this.api.getPersonsWithRelations().subscribe(persons => {
            this.persons = persons;
        });
    }
    ngOnInit() {
    }
};
PersonsComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
PersonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-persons',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./persons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/persons/persons.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./persons.component.scss */ "./src/app/persons/persons.component.scss")).default]
    })
], PersonsComponent);



/***/ }),

/***/ "./src/app/relation-type.enum.ts":
/*!***************************************!*\
  !*** ./src/app/relation-type.enum.ts ***!
  \***************************************/
/*! exports provided: RelationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationType", function() { return RelationType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var RelationType;
(function (RelationType) {
    RelationType["PARENT_CHILD"] = "PARENT_CHILD";
    RelationType["SIBLING"] = "SIBLING";
    RelationType["PARTNER"] = "PARTNER";
})(RelationType || (RelationType = {}));


/***/ }),

/***/ "./src/app/relation.ts":
/*!*****************************!*\
  !*** ./src/app/relation.ts ***!
  \*****************************/
/*! exports provided: Relation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Relation", function() { return Relation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Relation {
    constructor(relation) {
        return {
            type: relation.type,
            person1: relation.person1,
            person2: relation.person2,
        };
    }
}


/***/ }),

/***/ "./src/app/status.ts":
/*!***************************!*\
  !*** ./src/app/status.ts ***!
  \***************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Status;
(function (Status) {
    Status["ALIVE"] = "ALIVE";
    Status["DECEASED"] = "DECEASED";
    Status["UNKNOWN"] = "UNKNOWN";
})(Status || (Status = {}));


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    api: '/api/',
    firebase: {
        apiKey: "AIzaSyC6mvIQzIWM6JAFi3iagByFbt7gPCZNynw",
        authDomain: "famitree-app.firebaseapp.com",
        databaseURL: "https://famitree-app.firebaseio.com",
        projectId: "famitree-app",
        storageBucket: "famitree-app.appspot.com",
        messagingSenderId: "912108061486",
        appId: "1:912108061486:web:3fde4e7a56d31404ec30bf"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Robbert\Desktop\famitree\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map