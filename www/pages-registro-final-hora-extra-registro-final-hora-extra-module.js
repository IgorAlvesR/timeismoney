(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-final-hora-extra-registro-final-hora-extra-module"],{

/***/ "./src/app/pages/registro-final-hora-extra/registro-final-hora-extra.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/registro-final-hora-extra/registro-final-hora-extra.module.ts ***!
  \*************************************************************************************/
/*! exports provided: RegistroFinalHoraExtraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroFinalHoraExtraPageModule", function() { return RegistroFinalHoraExtraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_final_hora_extra_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro-final-hora-extra.page */ "./src/app/pages/registro-final-hora-extra/registro-final-hora-extra.page.ts");







var routes = [
    {
        path: '',
        component: _registro_final_hora_extra_page__WEBPACK_IMPORTED_MODULE_6__["RegistroFinalHoraExtraPage"]
    }
];
var RegistroFinalHoraExtraPageModule = /** @class */ (function () {
    function RegistroFinalHoraExtraPageModule() {
    }
    RegistroFinalHoraExtraPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registro_final_hora_extra_page__WEBPACK_IMPORTED_MODULE_6__["RegistroFinalHoraExtraPage"]]
        })
    ], RegistroFinalHoraExtraPageModule);
    return RegistroFinalHoraExtraPageModule;
}());



/***/ }),

/***/ "./src/app/pages/registro-final-hora-extra/registro-final-hora-extra.page.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/registro-final-hora-extra/registro-final-hora-extra.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-top\">\n    <div class=\"header-top\">\n      <p text-center>REGISTRO FINAL</p>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <div class=\"relogio\">\n    <div class=\"ion-padding horaData\">\n      <h1 class=\"horaData\">{{this.horaExtraFinal.horaFinal}}</h1>\n      <h5 class=\"horaData\">{{this.horaExtraFinal.dataFinal}}</h5>\n    </div>\n  </div>\n  \n\n  <div>\n      <ion-select placeholder=\"Selecione a cidade...\" [(ngModel)]=\"horaExtraFinal.localizacao\">\n        <ion-select-option value=\"Tubarão\">Tubarão</ion-select-option>\n        <ion-select-option value=\"Imbituba\">Imbituba</ion-select-option>\n        <ion-select-option value=\"Orleans\">Orleans</ion-select-option>\n        <ion-select-option value=\"Cricíuma\">Cricíuma</ion-select-option>\n      </ion-select>\n    <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Descrição...\" [(ngModel)]=\"horaExtraFinal.descricao\"></ion-textarea>\n  </div>\n\n  <div class=\"ion-text-center ion-padding digitalHora\" [hidden]=\"keyboard.isVisible\" >\n    <img src=\"../../../assets/imagens/digitalRegistro.svg\" (click)=\"registrarFinalHoraExtra()\">\n    <p class=\"finalizarHora\"><strong>Toque para finalizar  hora extra</strong></p>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/registro-final-hora-extra/registro-final-hora-extra.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/registro-final-hora-extra/registro-final-hora-extra.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: var(--ion-color-padraoApp);\n  color: white; }\n\nion-select {\n  border: 2px solid #4F9AF5;\n  border-radius: 30px;\n  width: 80%;\n  margin: 5px auto;\n  text-align: left;\n  height: 40px; }\n\nion-textarea {\n  border: 2px solid #4F9AF5;\n  padding: 5px;\n  border-radius: 15px;\n  width: 80%;\n  margin: 25px auto; }\n\n.header-top {\n  display: -webkit-box;\n  display: flex;\n  align-content: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.horaData {\n  text-align: center;\n  color: var(--ion-color-padraoApp);\n  margin: 0 auto; }\n\n.finalizarHora {\n  color: gray;\n  opacity: 0.8;\n  margin: 2px; }\n\n.digitalHora {\n  margin-top: 15%; }\n\n.relogio {\n  margin-top: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8tZmluYWwtaG9yYS1leHRyYS9DOlxcVXNlcnNcXElnb3JcXERlc2t0b3BcXElGU0NcXElGU0MgMjAxOS0yXFxUQ0MgSUlcXFRDQy1JSSBBcGxpY2F0aXZvIEhvcmFzIEV4dHJhc1xcVGltZUlzTW9uZXlBcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3Ryby1maW5hbC1ob3JhLWV4dHJhXFxyZWdpc3Ryby1maW5hbC1ob3JhLWV4dHJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdDQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUloQjtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFJckI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUkzQjtFQUNJLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsY0FBYyxFQUFBOztBQUdsQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUtmO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvLWZpbmFsLWhvcmEtZXh0cmEvcmVnaXN0cm8tZmluYWwtaG9yYS1leHRyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wYWRyYW9BcHApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tc2VsZWN0e1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzRGOUFGNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcblxyXG5pb24tdGV4dGFyZWF7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNEY5QUY1O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDI1cHggYXV0bztcclxufVxyXG5cclxuXHJcbi5oZWFkZXItdG9we1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuLmhvcmFEYXRhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wYWRyYW9BcHApO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5maW5hbGl6YXJIb3Jhe1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuXHJcblxyXG4uZGlnaXRhbEhvcmF7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbn1cclxuXHJcbi5yZWxvZ2lve1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/registro-final-hora-extra/registro-final-hora-extra.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/registro-final-hora-extra/registro-final-hora-extra.page.ts ***!
  \***********************************************************************************/
/*! exports provided: RegistroFinalHoraExtraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroFinalHoraExtraPage", function() { return RegistroFinalHoraExtraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_servicos_hora_extra_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicos/hora-extra.service */ "./src/app/servicos/hora-extra.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");








var RegistroFinalHoraExtraPage = /** @class */ (function () {
    function RegistroFinalHoraExtraPage(authService, horaSevice, loadingCtrl, toastCtrl, navCtrl, route, router, keyboard) {
        var _this = this;
        this.authService = authService;
        this.horaSevice = horaSevice;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.keyboard = keyboard;
        this.horaExtraFinal = {};
        this.criarRelogio();
        this.route.queryParams.subscribe(function (params) {
            var getNav = _this.router.getCurrentNavigation();
            if (getNav.extras.state) {
                _this.dados = getNav.extras.state.horaExtra;
            }
        });
    }
    RegistroFinalHoraExtraPage.prototype.ngOnInit = function () {
    };
    RegistroFinalHoraExtraPage.prototype.criarRelogio = function () {
        var _this = this;
        setInterval(function () {
            _this.horaExtraFinal.horaFinal = moment__WEBPACK_IMPORTED_MODULE_2__().locale('pt-br').format('LTS');
            _this.horaExtraFinal.dataFinal = moment__WEBPACK_IMPORTED_MODULE_2__().locale('pt-br').format('LL');
        }, 1000);
    };
    RegistroFinalHoraExtraPage.prototype.registrarFinalHoraExtra = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var horas, minutos, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        horas = moment__WEBPACK_IMPORTED_MODULE_2__().hour();
                        minutos = moment__WEBPACK_IMPORTED_MODULE_2__().minute();
                        this.horaExtraFinal.horaCalculoFinal = horas;
                        this.horaExtraFinal.minutoCalculoFinal = minutos;
                        this.horaExtraFinal.horaFinal;
                        this.horaExtraFinal.userId = this.authService.getAuth().currentUser.uid;
                        this.horaExtraFinal.dataFinal = moment__WEBPACK_IMPORTED_MODULE_2__().locale('pt-br').format('L');
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 8, , 9]);
                        if (!(this.horaExtraFinal.descricao == null || this.horaExtraFinal.localizacao == null)) return [3 /*break*/, 3];
                        this.presentToast("Preenha todos os campos!");
                        this.carregando.dismiss();
                        return [3 /*break*/, 7];
                    case 3: return [4 /*yield*/, this.horaSevice.updateHoraExtra(this.dados.id, this.horaExtraFinal)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.carregando.dismiss()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.navCtrl.navigateRoot('registro-hora-extra')];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_1 = _a.sent();
                        this.presentToast(error_1);
                        this.carregando.dismiss();
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    RegistroFinalHoraExtraPage.prototype.presentLoading = function () {
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
    RegistroFinalHoraExtraPage.prototype.presentToast = function (mensagem) {
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
    RegistroFinalHoraExtraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro-final-hora-extra',
            template: __webpack_require__(/*! ./registro-final-hora-extra.page.html */ "./src/app/pages/registro-final-hora-extra/registro-final-hora-extra.page.html"),
            styles: [__webpack_require__(/*! ./registro-final-hora-extra.page.scss */ "./src/app/pages/registro-final-hora-extra/registro-final-hora-extra.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"],
            src_app_servicos_hora_extra_service__WEBPACK_IMPORTED_MODULE_4__["HoraExtraService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Keyboard"]])
    ], RegistroFinalHoraExtraPage);
    return RegistroFinalHoraExtraPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-registro-final-hora-extra-registro-final-hora-extra-module.js.map