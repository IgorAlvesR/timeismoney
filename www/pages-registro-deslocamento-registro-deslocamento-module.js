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

module.exports = "ion-toolbar {\n  --background: var(--ion-color-padraoApp);\n  color: white; }\n\nion-icon {\n  width: 20px;\n  height: 20px;\n  color: white; }\n\n.header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.header p {\n    margin-left: 25px; }\n\n.map {\n  width: 50%;\n  height: 50%; }\n\nion-textarea {\n  border: 2px solid #4F9AF5;\n  padding: 5px;\n  border-radius: 15px;\n  width: 80%;\n  margin: 25px auto;\n  text-align: left; }\n\nion-button {\n  border-radius: 20%;\n  width: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8tZGVzbG9jYW1lbnRvL0M6XFxVc2Vyc1xcSWdvclxcRGVza3RvcFxcSUZTQ1xcSUZTQyAyMDE5LTJcXFRDQyBJSVxcVENDLUlJIEFwbGljYXRpdm8gSG9yYXMgRXh0cmFzXFxUaW1laXNtb25leWFwcC9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdHJvLWRlc2xvY2FtZW50b1xccmVnaXN0cm8tZGVzbG9jYW1lbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUloQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdoQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFGdkI7SUFLUSxpQkFBaUIsRUFBQTs7QUFLekI7RUFDSSxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdmO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0cm8tZGVzbG9jYW1lbnRvL3JlZ2lzdHJvLWRlc2xvY2FtZW50by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXBhZHJhb0FwcCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5pb24taWNvbntcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubWFwe1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG5pb24tdGV4dGFyZWF7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNEY5QUY1O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDI1cHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG59Il19 */"

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







var RegistroDeslocamentoPage = /** @class */ (function () {
    function RegistroDeslocamentoPage(platform, loadingCtrl, nativeGeocoder, geolocation, deslocamentoService, navCtrl) {
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.geolocation = geolocation;
        this.deslocamentoService = deslocamentoService;
        this.navCtrl = navCtrl;
        this.reserveGeocodingResults = "";
        this.deslocamento = {};
    }
    RegistroDeslocamentoPage.prototype.ngOnInit = function () {
        this.mapElement = this.mapElement.nativeElement;
        this.mapElement.style.width = '100%';
        this.mapElement.style.height = '50%';
        this.loadMap();
    };
    /*reverseGeolocation() {
      this.geolocation.getCurrentPosition().then((position) => {
        var latitude = position.coords.latitude
        var longitude = position.coords.longitude
        this.reverseGeocoding(latitude, longitude)
        return this.reserveGeocodingResults
      })
    }*/
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
                                console.log(_this.reverseGeocoding(latitude, longitude));
                            })];
                    case 3:
                        _b.sent();
                        this.deslocamento.data = "teste";
                        console.log(this.deslocamento.localizacao);
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
                        console.log(error_1);
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
                        _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["Environment"].setEnv({
                            'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyClpig7cd7BKXZTeN93Xi7mUn57uzSFcqc',
                            'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyClpig7cd7BKXZTeN93Xi7mUn57uzSFcqc'
                        });
                        mapOptions = {
                            controls: {
                                zoom: false
                            }
                        };
                        _b = this;
                        return [4 /*yield*/, _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMaps"].create(this.mapElement, mapOptions)];
                    case 3:
                        _b.map = _c.sent();
                        _c.label = 4;
                    case 4:
                        _c.trys.push([4, 7, , 8]);
                        return [4 /*yield*/, this.map.one(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].MAP_READY)];
                    case 5:
                        _c.sent();
                        return [4 /*yield*/, this.addOriginMarker()];
                    case 6:
                        _c.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        error_2 = _c.sent();
                        console.error(error_2);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
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
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
            src_app_servicos_deslocamento_service__WEBPACK_IMPORTED_MODULE_6__["DeslocamentoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], RegistroDeslocamentoPage);
    return RegistroDeslocamentoPage;
}());



/***/ }),

/***/ "./src/app/servicos/deslocamento.service.ts":
/*!**************************************************!*\
  !*** ./src/app/servicos/deslocamento.service.ts ***!
  \**************************************************/
/*! exports provided: DeslocamentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeslocamentoService", function() { return DeslocamentoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");




var DeslocamentoService = /** @class */ (function () {
    function DeslocamentoService(afs, authService) {
        this.afs = afs;
        this.authService = authService;
        var userId = this.authService.getAuth().currentUser.uid;
        this.deslocamento = this.afs.collection('Deslocamento');
    }
    DeslocamentoService.prototype.registrar = function (deslocamento) {
        return this.deslocamento.add(deslocamento);
    };
    DeslocamentoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"]])
    ], DeslocamentoService);
    return DeslocamentoService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-registro-deslocamento-registro-deslocamento-module.js.map