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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <p id=\"sair\" class=\"ion-text-center\">REGISTRO INÍCIO <span (click)='logout()'>SAIR </span></p> -->\n    <div id=\"registroInicial\">\n    <p>REGISTRO INICIAL</p>\n    <span ><ion-icon (click)='logout()' name=\"exit\"></ion-icon></span>\n  </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n\n  <div class=\"ion-padding horaData\">\n    <h1 class=\"horaData\">{{this.hora}}</h1>\n    <h5 class=\"horaData\">{{this.data}}</h5>\n  </div>\n\n\n  <div class=\"ion-text-center ion-padding \">\n    <img class=\"logoRegistro\" src=\"../../../assets/imagens/logoRegistroHora.svg\">\n  </div>\n\n  <div class=\"ion-text-center ion-padding digitalHora\">\n    <img id=\"botao\" src=\"../../../assets/imagens/digitalRegistro.svg\">\n    <p class=\"finalizarHora\"><strong>Toque para iniciar hora extra</strong></p>\n  </div>\n\n</ion-content>\n\n<ion-toolbar class=\"footer\">\n  <div class=\"menu\">\n    <ion-icon class=\"icones\" name=\"clock\" [routerLink]=\"['/relatorio-hora-extra']\"></ion-icon>\n    <ion-icon class=\"icones\" name=\"ios-paper\"  [routerLink]=\"['/relatorio-deslocamento']\"></ion-icon>\n    <ion-icon class=\"icones\" name=\"navigate\" [routerLink]=\"['/registro-deslocamento']\" ></ion-icon>\n    <ion-icon class=\"icones\" name=\"ios-contact\" [routerLink]=\"['/relatorio-detalhado']\" ></ion-icon>\n    <ion-icon class=\"icones\" name=\"md-settings\" [routerLink]=\"['/configuracao']\" ></ion-icon>\n  </div>\n</ion-toolbar>\n\n"

/***/ }),

/***/ "./src/app/pages/registro-hora-extra/registro-hora-extra.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/registro-hora-extra/registro-hora-extra.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: var(--ion-color-padraoApp);\n  color: white; }\n  ion-toolbar span {\n    margin-left: 15%;\n    padding: 5px 10px; }\n  ion-toolbar #registroInicial {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center; }\n  ion-toolbar #registroInicial p {\n      margin-left: 30%; }\n  ion-toolbar #registroInicial ion-icon {\n      width: 30px;\n      height: 30px; }\n  .horaData {\n  text-align: center;\n  color: var(--ion-color-padraoApp);\n  margin: 0 auto; }\n  h5 {\n  color: var(--ion-color-padraoApp); }\n  .finalizarHora {\n  color: gray;\n  opacity: 0.8;\n  margin: 2px; }\n  .digitalHora {\n  margin-top: 11%; }\n  .logoRegistro {\n  margin-top: 15%;\n  width: 30%;\n  height: 30%; }\n  ion-icon {\n  width: 35px;\n  height: 35px;\n  margin-bottom: 5px; }\n  .menu {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8taG9yYS1leHRyYS9DOlxcVXNlcnNcXElnb3JcXERlc2t0b3BcXElGU0NcXElGU0MgMjAxOS0yXFxUQ0MgSUlcXFRDQy1JSSBBcGxpY2F0aXZvIEhvcmFzIEV4dHJhc1xcVGltZWlzbW9uZXlhcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3Ryby1ob3JhLWV4dHJhXFxyZWdpc3Ryby1ob3JhLWV4dHJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdDQUFhO0VBQ2IsWUFBWSxFQUFBO0VBRmhCO0lBS1EsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBTnpCO0lBVVEsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5Qix5QkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFaM0I7TUFjWSxnQkFBZ0IsRUFBQTtFQWQ1QjtNQWlCWSxXQUFXO01BQ1gsWUFBWSxFQUFBO0VBTXhCO0VBQ0ksa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxjQUFjLEVBQUE7RUFHbEI7RUFDSSxpQ0FBaUMsRUFBQTtFQUdyQztFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVyxFQUFBO0VBSWY7RUFDSSxlQUFlLEVBQUE7RUFHbkI7RUFDSSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVcsRUFBQTtFQUdmO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDZCQUE2QixFQUFBO0VBR2pDO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0cm8taG9yYS1leHRyYS9yZWdpc3Ryby1ob3JhLWV4dHJhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXBhZHJhb0FwcCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgIHNwYW57XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAjcmVnaXN0cm9JbmljaWFse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmhvcmFEYXRhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wYWRyYW9BcHApO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmg1e1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wYWRyYW9BcHApO1xyXG59XHJcblxyXG4uZmluYWxpemFySG9yYXtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4uZGlnaXRhbEhvcmF7XHJcbiAgICBtYXJnaW4tdG9wOiAxMSU7XHJcbn1cclxuXHJcbi5sb2dvUmVnaXN0cm97XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbn1cclxuXHJcbmlvbi1pY29ue1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyBcclxufVxyXG5cclxuLmZvb3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"

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
/* harmony import */ var src_app_servicos_internet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicos/internet.service */ "./src/app/servicos/internet.service.ts");









var RegistroHoraExtraPage = /** @class */ (function () {
    function RegistroHoraExtraPage(authService, horaSevice, loadingCtrl, toastCtrl, navCtrl, alertController, angularFirestore, route, internetService, verificaConexao) {
        this.authService = authService;
        this.horaSevice = horaSevice;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.angularFirestore = angularFirestore;
        this.route = route;
        this.internetService = internetService;
        this.verificaConexao = verificaConexao;
        this.horaExtraInicio = {};
    }
    RegistroHoraExtraPage.prototype.criarRelógio = function () {
        var _this = this;
        this.hora = moment__WEBPACK_IMPORTED_MODULE_2__().locale('pt-br').format('LTS');
        this.data = moment__WEBPACK_IMPORTED_MODULE_2__().locale('pt-br').format('LL');
        setInterval(function () {
            _this.hora = moment__WEBPACK_IMPORTED_MODULE_2__().locale('pt-br').format('LTS');
            _this.data = moment__WEBPACK_IMPORTED_MODULE_2__().locale('pt-br').format('LL');
        }, 1000);
    };
    RegistroHoraExtraPage.prototype.ionViewDidEnter = function () {
        this.criarRelógio();
    };
    RegistroHoraExtraPage.prototype.ngOnInit = function () {
        this.verificaConexao.verificaConexao();
        this.verificarHoraExtraPendente();
    };
    RegistroHoraExtraPage.prototype.verificarHoraExtraPendente = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, botao;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.horaSevice.buscarHoraPendente()];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, document.getElementById('botao')];
                    case 2:
                        botao = _a.sent();
                        return [4 /*yield*/, result.subscribe(function (doc) {
                                if (doc.length > 0) {
                                    botao.onclick = function () { return (_this.presentAlert()); };
                                }
                                else {
                                    botao.onclick = function () { return _this.registrarInicioHoraExtra(); };
                                }
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistroHoraExtraPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Lembrete',
                            subHeader: 'Você possui hora extra para ser finalizada, deseja finaliza-la ?',
                            buttons: [
                                {
                                    text: 'SIM',
                                    handler: function () {
                                        _this.navCtrl.navigateRoot('registro-final-hora-extra');
                                    }
                                }, {
                                    text: 'NÃO'
                                }
                            ]
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
                        this.horaExtraInicio.id = this.angularFirestore.createId();
                        this.horaExtraInicio.horaCalculoInicial = horas;
                        this.horaExtraInicio.minutoCalculoInicial = minutos;
                        this.horaExtraInicio.horaInicial = this.hora;
                        this.horaExtraInicio.horaFinal = '';
                        this.horaExtraInicio.userId = this.authService.getAuth().currentUser.uid;
                        this.horaExtraInicio.dataInicial = moment__WEBPACK_IMPORTED_MODULE_2__().locale('pt-br').format('YYYY-MM-DD');
                        this.horaExtraInicio.cont = new Date().getTime();
                        this.horaExtraInicio.diaSemana = moment__WEBPACK_IMPORTED_MODULE_2__().day();
                        this.horaExtraInicio.horaDataCalculoInicio = moment__WEBPACK_IMPORTED_MODULE_2__().locale('pt-br').format('DD/MM/YYYY HH:mm:ss');
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 15, , 16]);
                        if (!(this.horaExtraInicio.diaSemana != 6 && this.horaExtraInicio.diaSemana != 0)) return [3 /*break*/, 10];
                        if (!((this.horaExtraInicio.horaCalculoInicial >= 8 && this.horaExtraInicio.horaCalculoInicial < 12)
                            || (this.horaExtraInicio.horaCalculoInicial == 13 && this.horaExtraInicio.minutoCalculoInicial > 30)
                            || (this.horaExtraInicio.horaCalculoInicial > 13 && this.horaExtraInicio.horaCalculoInicial < 18))) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.presentToast("Não é possível realizar hora extra no período normal!")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.carregando.dismiss()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 5: return [4 /*yield*/, this.horaSevice.registrarHoraExtra(this.horaExtraInicio)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.navCtrl.navigateRoot('registro-final-hora-extra')];
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
    RegistroHoraExtraPage.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, this.authService.logout()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.carregando.dismiss()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_2 = _a.sent();
                        this.presentToast(error_2);
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_servicos_internet_service__WEBPACK_IMPORTED_MODULE_8__["InternetService"],
            src_app_servicos_internet_service__WEBPACK_IMPORTED_MODULE_8__["InternetService"]])
    ], RegistroHoraExtraPage);
    return RegistroHoraExtraPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-registro-hora-extra-registro-hora-extra-module.js.map