(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-localizacao-localizacao-module"],{

/***/ "./src/app/pages/localizacao/localizacao.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/localizacao/localizacao.module.ts ***!
  \*********************************************************/
/*! exports provided: LocalizacaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizacaoPageModule", function() { return LocalizacaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _localizacao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localizacao.page */ "./src/app/pages/localizacao/localizacao.page.ts");







var routes = [
    {
        path: '',
        component: _localizacao_page__WEBPACK_IMPORTED_MODULE_6__["LocalizacaoPage"]
    }
];
var LocalizacaoPageModule = /** @class */ (function () {
    function LocalizacaoPageModule() {
    }
    LocalizacaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_localizacao_page__WEBPACK_IMPORTED_MODULE_6__["LocalizacaoPage"]]
        })
    ], LocalizacaoPageModule);
    return LocalizacaoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/localizacao/localizacao.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/localizacao/localizacao.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Localização</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <section>\n    <img src=\"../../../assets/imagens/localizacao.jpg\" alt=\"\">\n  </section>\n  <div>\n    <ion-button expand='block' (click)='checkGPSPermission()'>Ativar Localização</ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/localizacao/localizacao.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/localizacao/localizacao.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: var(--ion-color-padraoApp);\n  color: white; }\n  ion-toolbar ion-title {\n    text-align: center; }\n  section {\n  margin-top: 25%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n  section img {\n    width: 100%;\n    height: 100%; }\n  div {\n  margin-top: 20%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-button {\n  --border-radius: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9jYWxpemFjYW8vQzpcXFVzZXJzXFxJZ29yXFxEZXNrdG9wXFxJRlNDXFxJRlNDIDIwMTktMlxcVENDIElJXFxUQ0MtSUkgQXBsaWNhdGl2byBIb3JhcyBFeHRyYXNcXFRpbWVpc21vbmV5YXBwL3NyY1xcYXBwXFxwYWdlc1xcbG9jYWxpemFjYW9cXGxvY2FsaXphY2FvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFhO0VBQ2IsWUFBWSxFQUFBO0VBRmhCO0lBSVEsa0JBQWtCLEVBQUE7RUFJMUI7RUFDSSxlQUFlO0VBQ2Ysb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7RUFKdkI7SUFPUSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBSXBCO0VBQ0ksZUFBZTtFQUNmLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtFQUczQjtFQUNJLHFCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9jYWxpemFjYW8vbG9jYWxpemFjYW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wYWRyYW9BcHApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaW9uLXRpdGxle1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuc2VjdGlvbntcclxuICAgIG1hcmdpbi10b3A6IDI1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRpdntcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/localizacao/localizacao.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/localizacao/localizacao.page.ts ***!
  \*******************************************************/
/*! exports provided: LocalizacaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizacaoPage", function() { return LocalizacaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var LocalizacaoPage = /** @class */ (function () {
    function LocalizacaoPage(locationAccuracy, androidPermissions, navCtrl) {
        this.locationAccuracy = locationAccuracy;
        this.androidPermissions = androidPermissions;
        this.navCtrl = navCtrl;
    }
    LocalizacaoPage.prototype.ngOnInit = function () {
    };
    LocalizacaoPage.prototype.checkGPSPermission = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (result) {
            if (result.hasPermission) {
                _this.askToTurnOnGPS();
            }
            else {
                _this.requestGPSPermission();
            }
        }, function (err) {
            alert(err);
        });
    };
    LocalizacaoPage.prototype.requestGPSPermission = function () {
        var _this = this;
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                console.log("4");
            }
            else {
                _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                    .then(function () {
                    _this.askToTurnOnGPS();
                });
            }
        });
    };
    LocalizacaoPage.prototype.askToTurnOnGPS = function () {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
        this.navCtrl.navigateRoot('registro-deslocamento');
    };
    LocalizacaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-localizacao',
            template: __webpack_require__(/*! ./localizacao.page.html */ "./src/app/pages/localizacao/localizacao.page.html"),
            styles: [__webpack_require__(/*! ./localizacao.page.scss */ "./src/app/pages/localizacao/localizacao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_2__["LocationAccuracy"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], LocalizacaoPage);
    return LocalizacaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-localizacao-localizacao-module.js.map