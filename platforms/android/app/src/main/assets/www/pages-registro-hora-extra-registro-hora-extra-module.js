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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <p class=\"ion-text-center\">REGISTRO INÍCIO <span (click)='logout()'>SAIR</span></p>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n\n  <div class=\"ion-padding horaData\">\n    <h1 class=\"horaData\">{{this.hora}}</h1>\n    <h5 class=\"horaData\">{{this.data}}</h5>\n  </div>\n\n\n  <div class=\"ion-text-center ion-padding \">\n    <img class=\"logoRegistro\" src=\"../../../assets/imagens/logoRegistroHora.svg\">\n  </div>\n\n  <div class=\"ion-text-center ion-padding digitalHora\">\n    <img src=\"../../../assets/imagens/digitalRegistro.svg\" (click)=\"registrarInicioHoraExtra()\">\n    <p class=\"finalizarHora\"><strong>Toque para iniciar hora extra</strong></p>\n  </div>\n\n</ion-content>\n\n\n<ion-toolbar class=\"footer\">\n  <div class=\"menu\">\n    <ion-icon name=\"clock\" [routerLink]=\"['/relatorio-hora-extra']\"></ion-icon>\n    <ion-icon name=\"paper\"  [routerLink]=\"['/relatorio-deslocamento']\"></ion-icon>\n    <ion-icon name=\"navigate\" [routerLink]=\"['/registro-deslocamento']\" ></ion-icon>\n  </div>\n</ion-toolbar>"

/***/ }),

/***/ "./src/app/pages/registro-hora-extra/registro-hora-extra.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/registro-hora-extra/registro-hora-extra.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: var(--ion-color-padraoApp);\n  color: white; }\n  ion-toolbar span {\n    margin-left: 20%; }\n  .horaData {\n  text-align: center;\n  color: var(--ion-color-padraoApp);\n  margin: 0 auto; }\n  h5 {\n  color: var(--ion-color-padraoApp); }\n  .finalizarHora {\n  color: gray;\n  opacity: 0.8;\n  margin: 2px; }\n  .digitalHora {\n  margin-top: 15%; }\n  .logoRegistro {\n  margin-top: 15%;\n  width: 25%;\n  height: 25%;\n  border: 1px solid var(--ion-color-padraoApp);\n  border-radius: 5px; }\n  ion-icon {\n  width: 35px;\n  height: 35px;\n  margin-bottom: 5px; }\n  .menu {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8taG9yYS1leHRyYS9DOlxcVXNlcnNcXElnb3JcXERlc2t0b3BcXElGU0NcXElGU0MgMjAxOS0yXFxUQ0MgSUlcXFRDQy1JSSBBcGxpY2F0aXZvIEhvcmFzIEV4dHJhc1xcVGltZWlzbW9uZXlhcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3Ryby1ob3JhLWV4dHJhXFxyZWdpc3Ryby1ob3JhLWV4dHJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdDQUFhO0VBQ2IsWUFBWSxFQUFBO0VBRmhCO0lBS1EsZ0JBQWdCLEVBQUE7RUFLeEI7RUFDSSxrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLGNBQWMsRUFBQTtFQUdsQjtFQUNJLGlDQUFpQyxFQUFBO0VBR3JDO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXLEVBQUE7RUFJZjtFQUNJLGVBQWUsRUFBQTtFQUduQjtFQUNJLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLDRDQUE0QztFQUM1QyxrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw2QkFBNkIsRUFBQTtFQUdqQztFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvLWhvcmEtZXh0cmEvcmVnaXN0cm8taG9yYS1leHRyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wYWRyYW9BcHApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICBzcGFue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uaG9yYURhdGF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXBhZHJhb0FwcCk7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuaDV7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXBhZHJhb0FwcCk7XHJcbn1cclxuXHJcbi5maW5hbGl6YXJIb3Jhe1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuXHJcbi5kaWdpdGFsSG9yYXtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxufVxyXG5cclxuLmxvZ29SZWdpc3Ryb3tcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wYWRyYW9BcHApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5pb24taWNvbntcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubWVudXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgXHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"

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






var RegistroHoraExtraPage = /** @class */ (function () {
    function RegistroHoraExtraPage(authService, horaSevice, loadingCtrl, toastCtrl, navCtrl, alertController) {
        this.authService = authService;
        this.horaSevice = horaSevice;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.horaExtraInicio = {};
        this.criarRelógio();
    }
    RegistroHoraExtraPage.prototype.criarRelógio = function () {
        var _this = this;
        setInterval(function () {
            _this.hora = moment__WEBPACK_IMPORTED_MODULE_2__().locale('pt-br').format('LTS');
            _this.data = moment__WEBPACK_IMPORTED_MODULE_2__().locale('pt-br').format('LL');
        }, 1000);
    };
    RegistroHoraExtraPage.prototype.ngOnInit = function () {
        var _this = this;
        var result = this.horaSevice.buscarHoraPendente();
        result.subscribe(function (doc) {
            if (doc.length != 0) {
                _this.navCtrl.navigateRoot('registro-final-hora-extra');
            }
        });
    };
    RegistroHoraExtraPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Lembrete',
                            subHeader: 'Você possui uma hora extra para ser finalizada!',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
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
                        this.horaExtraInicio.horaInicial = this.hora;
                        this.horaExtraInicio.horaFinal = '';
                        this.horaExtraInicio.userId = this.authService.getAuth().currentUser.uid;
                        this.horaExtraInicio.dataInicial = moment__WEBPACK_IMPORTED_MODULE_2__().locale('pt-br').format('L');
                        this.horaExtraInicio.cont = new Date().getTime();
                        this.horaExtraInicio.diaSemana = moment__WEBPACK_IMPORTED_MODULE_2__().day();
                        this.horaExtraInicio.diaSemana = moment__WEBPACK_IMPORTED_MODULE_2__().day();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 15, , 16]);
                        if (!(this.horaExtraInicio.diaSemana != 6 && this.horaExtraInicio.diaSemana != 7)) return [3 /*break*/, 10];
                        if (!(this.horaExtraInicio.horaCalculoInicial >= 12 || this.horaExtraInicio.horaCalculoInicial <= 13
                            && this.horaExtraInicio.minutoCalculoInicial <= 30 ||
                            this.horaExtraInicio.horaCalculoInicial >= 18)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.horaSevice.registrarHoraExtra(this.horaExtraInicio)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.navCtrl.navigateRoot('registro-final-hora-extra')];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.carregando.dismiss()];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 6: return [4 /*yield*/, this.presentToast("Não é possível realizar hora extra no período normal!")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.carregando.dismiss()];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [3 /*break*/, 14];
                    case 10: return [4 /*yield*/, this.horaSevice.registrarHoraExtra(this.horaExtraInicio)];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.navCtrl.navigateRoot('registro-final-hora-extra')];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, this.carregando.dismiss()];
                    case 13:
                        _a.sent();
                        _a.label = 14;
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        error_1 = _a.sent();
                        this.presentToast(error_1);
                        this.carregando.dismiss();
                        return [3 /*break*/, 16];
                    case 16: return [2 /*return*/];
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
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.carregando.dismiss()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.navCtrl.navigateRoot('registro-final-hora-extra')];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], RegistroHoraExtraPage);
    return RegistroHoraExtraPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-registro-hora-extra-registro-hora-extra-module.js.map