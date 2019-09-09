(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-deslocamento-registro-deslocamento-module"],{

/***/ "./src/app/pages/registro-deslocamento/registro-deslocamento.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/registro-deslocamento/registro-deslocamento.module.ts ***!
  \*****************************************************************************/
/*! exports provided: RegistroDeslocamentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroDeslocamentoPageModule", function() { return RegistroDeslocamentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_deslocamento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro-deslocamento.page */ "./src/app/pages/registro-deslocamento/registro-deslocamento.page.ts");







var routes = [
    {
        path: '',
        component: _registro_deslocamento_page__WEBPACK_IMPORTED_MODULE_6__["RegistroDeslocamentoPage"]
    }
];
var RegistroDeslocamentoPageModule = /** @class */ (function () {
    function RegistroDeslocamentoPageModule() {
    }
    RegistroDeslocamentoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registro_deslocamento_page__WEBPACK_IMPORTED_MODULE_6__["RegistroDeslocamentoPage"]]
        })
    ], RegistroDeslocamentoPageModule);
    return RegistroDeslocamentoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/registro-deslocamento/registro-deslocamento.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/registro-deslocamento/registro-deslocamento.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>RegistroDeslocamento</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/registro-deslocamento/registro-deslocamento.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/registro-deslocamento/registro-deslocamento.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvLWRlc2xvY2FtZW50by9yZWdpc3Ryby1kZXNsb2NhbWVudG8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/registro-deslocamento/registro-deslocamento.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/registro-deslocamento/registro-deslocamento.page.ts ***!
  \***************************************************************************/
/*! exports provided: RegistroDeslocamentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroDeslocamentoPage", function() { return RegistroDeslocamentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");






var RegistroDeslocamentoPage = /** @class */ (function () {
    function RegistroDeslocamentoPage(platform, loadingCtrl, nativeGeocoder, geolocation) {
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.geolocation = geolocation;
        this.reserveGeocodingResults = "";
    }
    RegistroDeslocamentoPage.prototype.ngOnInit = function () {
        this.mapElement = this.mapElement.nativeElement;
        this.mapElement.style.width = '100%';
        this.mapElement.style.height = '50%';
        this.loadMap();
    };
    RegistroDeslocamentoPage.prototype.reverseGeolocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            _this.reverseGeocoding(latitude, longitude);
            alert(_this.reserveGeocodingResults);
        });
    };
    RegistroDeslocamentoPage.prototype.reverseGeocoding = function (latitude, longitude) {
        var _this = this;
        var options = {
            useLocale: true,
            maxResults: 1
        };
        this.nativeGeocoder.reverseGeocode(latitude, longitude, options).then(function (results) {
            _this.reserveGeocodingResults = JSON.stringify(results[0]);
        });
    };
    RegistroDeslocamentoPage.prototype.loadMap = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, mapOptions, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({ message: 'Por favor, aguarde...' })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["Environment"].setEnv({
                            'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyClpig7cd7BKXZTeN93Xi7mUn57uzSFcqc',
                            'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyClpig7cd7BKXZTeN93Xi7mUn57uzSFcqc'
                        });
                        mapOptions = {
                            controls: {
                                zoom: false
                            }
                        };
                        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMaps"].create(this.mapElement, mapOptions);
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 6, , 7]);
                        return [4 /*yield*/, this.map.one(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].MAP_READY)];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.addOriginMarker()];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        console.error(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    RegistroDeslocamentoPage.prototype.addOriginMarker = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var myLocation, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 5]);
                        return [4 /*yield*/, this.map.getMyLocation()];
                    case 1:
                        myLocation = _a.sent();
                        return [4 /*yield*/, this.map.moveCamera({
                                target: myLocation.latLng,
                                zoom: 18
                            })];
                    case 2:
                        _a.sent();
                        this.map.addMarkerSync({
                            title: 'Localização Atual',
                            icon: '#000',
                            animation: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsAnimation"].DROP,
                            position: myLocation.latLng
                        });
                        return [3 /*break*/, 5];
                    case 3:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading.dismiss();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegistroDeslocamentoPage.prototype, "mapElement", void 0);
    RegistroDeslocamentoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro-deslocamento',
            template: __webpack_require__(/*! ./registro-deslocamento.page.html */ "./src/app/pages/registro-deslocamento/registro-deslocamento.page.html"),
            styles: [__webpack_require__(/*! ./registro-deslocamento.page.scss */ "./src/app/pages/registro-deslocamento/registro-deslocamento.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]])
    ], RegistroDeslocamentoPage);
    return RegistroDeslocamentoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-registro-deslocamento-registro-deslocamento-module.js.map