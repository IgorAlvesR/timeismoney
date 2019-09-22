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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <div class=\"header\">\n      <ion-icon name=\"arrow-round-back\" button [routerLink]=\"['/registro-hora-extra']\"></ion-icon>\n      <p class=\"ion-text-center\">REGISTRO DESLOCAMENTOS</p>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #map></div>\n  <div class=\"ion-text-center\">\n    <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Descrição...\" [(ngModel)]='deslocamento.descricao'></ion-textarea>\n    <ion-button color=\"primary\" (click)='registrarDeslocamento()'>Registrar Deslocamento</ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/registro-deslocamento/registro-deslocamento.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/registro-deslocamento/registro-deslocamento.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: var(--ion-color-padraoApp);\n  color: white; }\n\nion-icon {\n  width: 25px;\n  height: 25px;\n  color: white;\n  margin-left: 5px; }\n\n.header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.header p {\n    margin-left: 25px; }\n\n.map {\n  width: 50%;\n  height: 50%; }\n\nion-textarea {\n  border: 2px solid #4F9AF5;\n  padding: 5px;\n  border-radius: 15px;\n  width: 80%;\n  margin: 25px auto;\n  text-align: left; }\n\nion-button {\n  border-radius: 20%;\n  width: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8tZGVzbG9jYW1lbnRvL0M6XFxVc2Vyc1xcSWdvclxcRGVza3RvcFxcSUZTQ1xcSUZTQyAyMDE5LTJcXFRDQyBJSVxcVENDLUlJIEFwbGljYXRpdm8gSG9yYXMgRXh0cmFzXFxUaW1laXNtb25leWFwcC9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdHJvLWRlc2xvY2FtZW50b1xccmVnaXN0cm8tZGVzbG9jYW1lbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUloQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFGdkI7SUFLUSxpQkFBaUIsRUFBQTs7QUFLekI7RUFDSSxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdmO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0cm8tZGVzbG9jYW1lbnRvL3JlZ2lzdHJvLWRlc2xvY2FtZW50by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXBhZHJhb0FwcCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5pb24taWNvbntcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLm1hcHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxuaW9uLXRleHRhcmVhe1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzRGOUFGNTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufSJdfQ== */"

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
/* harmony import */ var src_app_servicos_deslocamento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/deslocamento.service */ "./src/app/servicos/deslocamento.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");












var RegistroDeslocamentoPage = /** @class */ (function () {
    function RegistroDeslocamentoPage(loadingCtrl, nativeGeocoder, geolocation, deslocamentoService, toastCtrl, navCtrl, locationAccuracy, authService, androidPermissions, angularFirestore) {
        this.loadingCtrl = loadingCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.geolocation = geolocation;
        this.deslocamentoService = deslocamentoService;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.locationAccuracy = locationAccuracy;
        this.authService = authService;
        this.androidPermissions = androidPermissions;
        this.angularFirestore = angularFirestore;
        this.reserveGeocodingResults = "";
        this.deslocamento = {};
    }
    RegistroDeslocamentoPage.prototype.ngOnInit = function () {
        this.mapElement = this.mapElement.nativeElement;
        this.mapElement.style.width = '100%';
        this.mapElement.style.height = '50%';
    };
    RegistroDeslocamentoPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadMap()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.checkGPSPermission()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadMap()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistroDeslocamentoPage.prototype.reverseGeocoding = function (latitude, longitude) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            useLocale: true,
                            maxResults: 1
                        };
                        return [4 /*yield*/, this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
                                .then(function (result) { return _this.deslocamento.localizacao = result[0].subAdministrativeArea; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistroDeslocamentoPage.prototype.registrarDeslocamento = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, error_1;
            var _this = this;
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
                        return [4 /*yield*/, this.geolocation.getCurrentPosition().then(function (position) {
                                var latitude = position.coords.latitude;
                                var longitude = position.coords.longitude;
                                _this.reverseGeocoding(latitude, longitude);
                            })];
                    case 3:
                        _b.sent();
                        this.deslocamento.id = this.angularFirestore.createId();
                        this.deslocamento.data = moment__WEBPACK_IMPORTED_MODULE_7__().locale('pt-br').format('L');
                        this.deslocamento.hora = moment__WEBPACK_IMPORTED_MODULE_7__().locale('pt-br').format('LTS');
                        this.deslocamento.userId = this.authService.getAuth().currentUser.uid;
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 8, , 9]);
                        return [4 /*yield*/, this.deslocamentoService.registrar(this.deslocamento)];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, this.navCtrl.navigateRoot('registro-hora-extra')];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, this.loading.dismiss()];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        error_1 = _b.sent();
                        this.toastCtrl.create({ message: error_1, duration: 2000 });
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    RegistroDeslocamentoPage.prototype.loadMap = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, mapOptions, _b, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({ message: 'Por favor, aguarde...' })];
                    case 1:
                        _a.loading = _c.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _c.sent();
                        mapOptions = {
                            controls: {
                                zoom: false
                            }
                        };
                        _b = this;
                        return [4 /*yield*/, _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMaps"].create(this.mapElement, mapOptions)];
                    case 3:
                        _b.map = _c.sent();
                        return [4 /*yield*/, this.addOriginMarker()];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 8, , 9]);
                        return [4 /*yield*/, this.map.one(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].MAP_READY)];
                    case 6:
                        _c.sent();
                        return [4 /*yield*/, this.addOriginMarker()];
                    case 7:
                        _c.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        error_2 = _c.sent();
                        console.error(error_2);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    RegistroDeslocamentoPage.prototype.addOriginMarker = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var myLocation, error_3;
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
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading.dismiss();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RegistroDeslocamentoPage.prototype.checkGPSPermission = function () {
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
    RegistroDeslocamentoPage.prototype.requestGPSPermission = function () {
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
    RegistroDeslocamentoPage.prototype.askToTurnOnGPS = function () {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
            src_app_servicos_deslocamento_service__WEBPACK_IMPORTED_MODULE_6__["DeslocamentoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__["LocationAccuracy"],
            src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_9__["AutenticacaoService"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__["AndroidPermissions"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"]])
    ], RegistroDeslocamentoPage);
    return RegistroDeslocamentoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-registro-deslocamento-registro-deslocamento-module.js.map