(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-implicit-auth-callback-auth-callback-module"],{

/***/ "./src/app/auth/implicit/auth-callback/auth-callback.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/auth/implicit/auth-callback/auth-callback.module.ts ***!
  \*********************************************************************/
/*! exports provided: AuthCallbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCallbackPageModule", function() { return AuthCallbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_callback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-callback.page */ "./src/app/auth/implicit/auth-callback/auth-callback.page.ts");







var routes = [
    {
        path: '',
        component: _auth_callback_page__WEBPACK_IMPORTED_MODULE_6__["AuthCallbackPage"]
    }
];
var AuthCallbackPageModule = /** @class */ (function () {
    function AuthCallbackPageModule() {
    }
    AuthCallbackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_auth_callback_page__WEBPACK_IMPORTED_MODULE_6__["AuthCallbackPage"]]
        })
    ], AuthCallbackPageModule);
    return AuthCallbackPageModule;
}());



/***/ }),

/***/ "./src/app/auth/implicit/auth-callback/auth-callback.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/implicit/auth-callback/auth-callback.page.ts ***!
  \*******************************************************************/
/*! exports provided: AuthCallbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCallbackPage", function() { return AuthCallbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-appauth */ "./node_modules/ionic-appauth/lib/index.js");
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ionic_appauth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth/auth.service.ts");







var AuthCallbackPage = /** @class */ (function () {
    function AuthCallbackPage(authService, navCtrl, router) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.router = router;
    }
    AuthCallbackPage.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.AuthorizationCallBack(this.router.url);
        this.authService.authObservable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skipWhile"])(function (action) { return action.action !== ionic_appauth__WEBPACK_IMPORTED_MODULE_4__["AuthActions"].SignInSuccess
            && action.action !== ionic_appauth__WEBPACK_IMPORTED_MODULE_4__["AuthActions"].SignInFailed; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function (action) {
            if (action.action === ionic_appauth__WEBPACK_IMPORTED_MODULE_4__["AuthActions"].SignInSuccess) {
                _this.navCtrl.navigateRoot('tabs');
            }
            else {
                _this.navCtrl.navigateRoot('login');
            }
        });
    };
    AuthCallbackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: '<p style="margin-left: 10px">Authorizing...</p>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthCallbackPage);
    return AuthCallbackPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-implicit-auth-callback-auth-callback-module.js.map