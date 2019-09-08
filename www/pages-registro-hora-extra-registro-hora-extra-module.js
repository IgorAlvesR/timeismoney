(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-hora-extra-registro-hora-extra-module"],{

/***/ "./src/app/pages/registro-hora-extra/registro-hora-extra.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/registro-hora-extra/registro-hora-extra.module.ts ***!
  \*************************************************************************/
/*! exports provided: RegistroHoraExtraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroHoraExtraPageModule", function() { return RegistroHoraExtraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_hora_extra_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro-hora-extra.page */ "./src/app/pages/registro-hora-extra/registro-hora-extra.page.ts");







var routes = [
    {
        path: '',
        component: _registro_hora_extra_page__WEBPACK_IMPORTED_MODULE_6__["RegistroHoraExtraPage"]
    }
];
var RegistroHoraExtraPageModule = /** @class */ (function () {
    function RegistroHoraExtraPageModule() {
    }
    RegistroHoraExtraPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registro_hora_extra_page__WEBPACK_IMPORTED_MODULE_6__["RegistroHoraExtraPage"]]
        })
    ], RegistroHoraExtraPageModule);
    return RegistroHoraExtraPageModule;
}());



/***/ }),

/***/ "./src/app/pages/registro-hora-extra/registro-hora-extra.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/registro-hora-extra/registro-hora-extra.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <p class=\"ion-text-center\">REGISTRO INÍCIO <span (click)='logout()'>SAIR</span></p>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n\n  <div class=\"ion-padding horaData\">\n    <h1 class=\"horaData\">{{this.horaExtraInicio.horaInicial}}</h1>\n    <h5 class=\"horaData\">{{this.horaExtraInicio.dataInicial}}</h5>\n  </div>\n\n\n  <div class=\"ion-text-center ion-padding \">\n    <img class=\"logoRegistro\" src=\"../../../assets/imagens/logoRegistroHora.svg\">\n  </div>\n\n  <div class=\"ion-text-center ion-padding digitalHora\">\n    <img src=\"../../../assets/imagens/digitalRegistro.svg\" (click)=\"registrarInicioHoraExtra()\">\n    <p class=\"finalizarHora\"><strong>Toque para iniciar hora extra</strong></p>\n  </div>\n\n</ion-content>\n\n\n<ion-toolbar class=\"footer\">\n  <div class=\"menu\">\n    <ion-icon name=\"clock\" [routerLink]=\"['/relatorio-hora-extra']\"></ion-icon>\n    <ion-icon name=\"watch\" (click)=\"registrarHoraFinalPendente()\"></ion-icon>\n  </div>\n</ion-toolbar>"

/***/ }),

/***/ "./src/app/pages/registro-hora-extra/registro-hora-extra.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/registro-hora-extra/registro-hora-extra.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: var(--ion-color-padraoApp);\n  color: white; }\n  ion-toolbar span {\n    margin-left: 20%; }\n  .horaData {\n  text-align: center;\n  color: var(--ion-color-padraoApp);\n  margin: 0 auto; }\n  h5 {\n  color: var(--ion-color-padraoApp); }\n  .finalizarHora {\n  color: gray;\n  opacity: 0.8;\n  margin: 2px; }\n  .digitalHora {\n  margin-top: 15%; }\n  .logoRegistro {\n  margin-top: 15%;\n  width: 25%;\n  height: 25%;\n  border: 1px solid var(--ion-color-padraoApp);\n  border-radius: 5px; }\n  ion-icon {\n  width: 35px;\n  height: 35px;\n  margin-bottom: 5px; }\n  .menu {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8taG9yYS1leHRyYS9DOlxcVXNlcnNcXElnb3JcXERlc2t0b3BcXElGU0NcXElGU0MgMjAxOS0yXFxUQ0MgSUlcXFRDQy1JSSBBcGxpY2F0aXZvIEhvcmFzIEV4dHJhc1xcVGltZUlzTW9uZXlBcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3Ryby1ob3JhLWV4dHJhXFxyZWdpc3Ryby1ob3JhLWV4dHJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdDQUFhO0VBQ2IsWUFBWSxFQUFBO0VBRmhCO0lBS1EsZ0JBQWdCLEVBQUE7RUFLeEI7RUFDSSxrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLGNBQWMsRUFBQTtFQUdsQjtFQUNJLGlDQUFpQyxFQUFBO0VBR3JDO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXLEVBQUE7RUFJZjtFQUNJLGVBQWUsRUFBQTtFQUduQjtFQUNJLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLDRDQUE0QztFQUM1QyxrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7RUFHM0I7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Ryby1ob3JhLWV4dHJhL3JlZ2lzdHJvLWhvcmEtZXh0cmEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcGFkcmFvQXBwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgc3BhbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmhvcmFEYXRhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wYWRyYW9BcHApO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmg1e1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wYWRyYW9BcHApO1xyXG59XHJcblxyXG4uZmluYWxpemFySG9yYXtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4uZGlnaXRhbEhvcmF7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbn1cclxuXHJcbi5sb2dvUmVnaXN0cm97XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcGFkcmFvQXBwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLm1lbnV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/registro-hora-extra/registro-hora-extra.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/registro-hora-extra/registro-hora-extra.page.ts ***!
  \***********************************************************************/
/*! exports provided: RegistroHoraExtraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroHoraExtraPage", function() { return RegistroHoraExtraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_servicos_hora_extra_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicos/hora-extra.service */ "./src/app/servicos/hora-extra.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var RegistroHoraExtraPage = /** @class */ (function () {
    function RegistroHoraExtraPage(authService, horaSevice, loadingCtrl, toastCtrl, navCtrl, afs, router) {
        this.authService = authService;
        this.horaSevice = horaSevice;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.afs = afs;
        this.router = router;
        this.horaExtraInicio = {};
        this.navigationExtras = {};
        this.criarRelógio();
        this.navigationExtras = {
            state: {
                horaExtra: this.horaExtraInicio
            }
        };
    }
    RegistroHoraExtraPage.prototype.criarRelógio = function () {
        var _this = this;
        setInterval(function () {
            _this.horaExtraInicio.horaInicial = moment__WEBPACK_IMPORTED_MODULE_2__().locale('pt-br').format('LTS');
            _this.horaExtraInicio.dataInicial = moment__WEBPACK_IMPORTED_MODULE_2__().locale('pt-br').format('LL');
        }, 1000);
    };
    RegistroHoraExtraPage.prototype.ngOnInit = function () {
    };
    RegistroHoraExtraPage.prototype.registrarInicioHoraExtra = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var horas, minutos, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        horas = moment__WEBPACK_IMPORTED_MODULE_2__().hours();
                        minutos = moment__WEBPACK_IMPORTED_MODULE_2__().minute();
                        this.horaExtraInicio.horaCalculoInicial = horas;
                        this.horaExtraInicio.minutoCalculoInicial = minutos;
                        this.horaExtraInicio.horaInicial;
                        this.horaExtraInicio.userId = this.authService.getAuth().currentUser.uid;
                        this.horaExtraInicio.dataInicial = moment__WEBPACK_IMPORTED_MODULE_2__().locale('pt-br').format('L');
                        this.horaExtraInicio.id = this.afs.createId();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 6, , 7]);
                        return [4 /*yield*/, this.horaSevice.registrarHoraExtra(this.horaExtraInicio)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.carregando.dismiss()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.router.navigate(['registro-final-hora-extra'], this.navigationExtras)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        console.error(error_1);
                        this.presentToast(error_1);
                        this.carregando.dismiss();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    RegistroHoraExtraPage.prototype.registrarHoraFinalPendente = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.router.navigate(['registro-final-hora-extra'], this.navigationExtras)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegistroHoraExtraPage.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.carregando.dismiss()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.authService.logout()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        this.presentToast(error_3);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    RegistroHoraExtraPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({ message: 'Por favor, aguarde...' })];
                    case 1:
                        _a.carregando = _b.sent();
                        return [2 /*return*/, this.carregando.present()];
                }
            });
        });
    };
    RegistroHoraExtraPage.prototype.presentToast = function (mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({ message: mensagem, duration: 2000 })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistroHoraExtraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro-hora-extra',
            template: __webpack_require__(/*! ./registro-hora-extra.page.html */ "./src/app/pages/registro-hora-extra/registro-hora-extra.page.html"),
            styles: [__webpack_require__(/*! ./registro-hora-extra.page.scss */ "./src/app/pages/registro-hora-extra/registro-hora-extra.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"],
            src_app_servicos_hora_extra_service__WEBPACK_IMPORTED_MODULE_4__["HoraExtraService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], RegistroHoraExtraPage);
    return RegistroHoraExtraPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-registro-hora-extra-registro-hora-extra-module.js.map