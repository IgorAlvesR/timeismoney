(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-relatorio-hora-extra-relatorio-hora-extra-module"],{

/***/ "./src/app/pages/relatorio-hora-extra/relatorio-hora-extra.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/relatorio-hora-extra/relatorio-hora-extra.module.ts ***!
  \***************************************************************************/
/*! exports provided: RelatorioHoraExtraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioHoraExtraPageModule", function() { return RelatorioHoraExtraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _relatorio_hora_extra_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relatorio-hora-extra.page */ "./src/app/pages/relatorio-hora-extra/relatorio-hora-extra.page.ts");







var routes = [
    {
        path: '',
        component: _relatorio_hora_extra_page__WEBPACK_IMPORTED_MODULE_6__["RelatorioHoraExtraPage"]
    }
];
var RelatorioHoraExtraPageModule = /** @class */ (function () {
    function RelatorioHoraExtraPageModule() {
    }
    RelatorioHoraExtraPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_relatorio_hora_extra_page__WEBPACK_IMPORTED_MODULE_6__["RelatorioHoraExtraPage"]]
        })
    ], RelatorioHoraExtraPageModule);
    return RelatorioHoraExtraPageModule;
}());



/***/ }),

/***/ "./src/app/pages/relatorio-hora-extra/relatorio-hora-extra.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/relatorio-hora-extra/relatorio-hora-extra.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <div class=\"header-top\">\n      <ion-icon name=\"arrow-round-back\" button [routerLink]=\"['/registro-hora-extra']\"></ion-icon>\n      <p text-center>RELATÓRIO DE HORAS EXTRAS</p>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"filtroData\">\n    <ion-input class='data' [(ngModel)]=\"data.dataInicial\" type=\"date\" ><span class='dataValor'>Data Inicial</span></ion-input>\n    <ion-input   class='data' [(ngModel)]=\"data.dataFinal\" type=\"date\" ><span class='dataValor'>Data Final</span></ion-input>\n    <ion-icon class=\"buscarData\" name=\"checkmark\" (click)=\"getHoras(data.dataInicial,data.dataFinal)\"></ion-icon>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <strong>Período/Data</strong>\n      </ion-col>\n      <ion-col class=\"ion-text-center\">\n        <strong>Total</strong>\n      </ion-col>\n      <ion-col size=\"1\">\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor='let h of horasExtras'>\n      <ion-col *ngIf='h.horaFinal == null'>\n        {{h.horaInicial}} - <span class=\"horaPendente\">Hora Pendente</span>\n      </ion-col>\n      <ion-col *ngIf='h.horaFinal != \"\"' (click)='mostrarDescricaoCidade(h.descricao,h.localizacao)'>\n        {{h.horaInicial}} - {{h.horaFinal}} <br>\n        <span>{{h.dataInicial | date: 'dd/MM/y'}}</span>\n      </ion-col>\n      <ion-col *ngIf='h.horaFinal == \"\"'>\n        {{h.horaInicial}} - <span class=\"horaPendente\">PENDENTE</span> <br>\n        <span>{{h.dataInicial | date: 'dd/MM/y'}}</span>\n      </ion-col>\n\n      <ion-col class=\"ion-text-center total\" *ngIf='h.horaFinal != \"\"'>\n        {{h.total}}\n      </ion-col>\n      <ion-col size=\"1\" *ngIf='h.horaFinal != \"\"'>\n        <ion-icon class=\"delete\" name='trash' (click)=\"deleteConfirm(h.id)\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/relatorio-hora-extra/relatorio-hora-extra.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/relatorio-hora-extra/relatorio-hora-extra.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: var(--ion-color-padraoApp);\n  color: white; }\n\nion-row {\n  border-bottom: 1px solid #cecece;\n  color: black;\n  padding: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\nspan {\n  color: gray;\n  font-size: 10pt; }\n\n.total {\n  color: #017401; }\n\n.horaPendente {\n  color: #af0d0d; }\n\n.header-top {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.header-top p {\n    margin-left: 10%; }\n\nion-icon {\n  width: 25px;\n  height: 25px;\n  margin-left: 5px; }\n\n.delete {\n  width: 25px;\n  height: 25px;\n  color: #af0d0d; }\n\nion-col {\n  color: gray; }\n\n#filtroData {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n\n.data {\n  width: 10%;\n  margin: 5px;\n  padding: 5px;\n  border: 2px solid var(--ion-color-padraoApp);\n  color: gray;\n  border-radius: 20px; }\n\n.buscarData {\n  margin: 5px;\n  padding: 5px;\n  color: green;\n  width: 35px;\n  height: 35px; }\n\n.dataValor {\n  padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVsYXRvcmlvLWhvcmEtZXh0cmEvQzpcXFVzZXJzXFxJZ29yXFxEZXNrdG9wXFxJRlNDXFxJRlNDIDIwMTktMlxcVENDIElJXFxUQ0MtSUkgQXBsaWNhdGl2byBIb3JhcyBFeHRyYXNcXFRpbWVpc21vbmV5YXBwL3NyY1xcYXBwXFxwYWdlc1xccmVsYXRvcmlvLWhvcmEtZXh0cmFcXHJlbGF0b3Jpby1ob3JhLWV4dHJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdDQUEyQztFQUMzQyxZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksY0FBcUIsRUFBQTs7QUFHekI7RUFDSSxjQUF1QixFQUFBOztBQUczQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFGdkI7SUFJUSxnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBdUIsRUFBQTs7QUFHM0I7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osNENBQTZDO0VBQzdDLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVsYXRvcmlvLWhvcmEtZXh0cmEvcmVsYXRvcmlvLWhvcmEtZXh0cmEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wYWRyYW9BcHApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tcm93e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMDYsIDIwNiwgMjA2KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxufVxyXG5cclxuLnRvdGFse1xyXG4gICAgY29sb3I6IHJnYigxLCAxMTYsIDEpO1xyXG59XHJcblxyXG4uaG9yYVBlbmRlbnRle1xyXG4gICAgY29sb3I6IHJnYigxNzUsIDEzLCAxMyk7XHJcbn1cclxuXHJcbi5oZWFkZXItdG9we1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1pY29ue1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uZGVsZXRle1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBjb2xvcjogcmdiKDE3NSwgMTMsIDEzKTtcclxufVxyXG5cclxuaW9uLWNvbHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4jZmlsdHJvRGF0YXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5kYXRhe1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIHZhcigtLWlvbi1jb2xvci1wYWRyYW9BcHApO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYnVzY2FyRGF0YXtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5kYXRhVmFsb3J7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/relatorio-hora-extra/relatorio-hora-extra.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/relatorio-hora-extra/relatorio-hora-extra.page.ts ***!
  \*************************************************************************/
/*! exports provided: RelatorioHoraExtraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioHoraExtraPage", function() { return RelatorioHoraExtraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicos_hora_extra_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/hora-extra.service */ "./src/app/servicos/hora-extra.service.ts");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var RelatorioHoraExtraPage = /** @class */ (function () {
    function RelatorioHoraExtraPage(authService, horaService, toastCtrl, alertController) {
        this.authService = authService;
        this.horaService = horaService;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.horasExtras = new Array();
        this.data = {};
    }
    RelatorioHoraExtraPage.prototype.ngOnInit = function () {
        //this.getHoras()
    };
    RelatorioHoraExtraPage.prototype.ngOnDestroy = function () {
        if (this.horasExtrasSubscription) {
            this.horasExtrasSubscription.unsubscribe();
        }
    };
    RelatorioHoraExtraPage.prototype.getHoras = function (dataInicial, dataFinal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.data.dataInicial == '' || this.data.dataInicial == null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.presentToast('Preencha os campos com as datas')];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                    case 2:
                        _a = this;
                        return [4 /*yield*/, this.horaService.getHorasExtras(dataInicial, dataFinal).subscribe(function (dados) {
                                if (dados.length == 0) {
                                    _this.presentToast('Não possui horas extras realizadas nessa data');
                                }
                                else {
                                    dados.forEach(function (element) {
                                        var horaFinal = element.horaDataCalculoFinal;
                                        var horaInicial = element.horaDataCalculoInicio;
                                        var ms = moment__WEBPACK_IMPORTED_MODULE_4__(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment__WEBPACK_IMPORTED_MODULE_4__(horaInicial, "DD/MM/YYYY HH:mm:ss"));
                                        var d = moment__WEBPACK_IMPORTED_MODULE_4__["duration"](ms);
                                        var s = Math.floor(d.asHours()) + moment__WEBPACK_IMPORTED_MODULE_4__["utc"](ms).format(":mm:ss");
                                        element.total = s;
                                    });
                                }
                                return _this.horasExtras = dados;
                            })];
                    case 3:
                        _a.horasExtrasSubscription = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatorioHoraExtraPage.prototype.deleteHoraExtra = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.horaService.deleteHoraExtra(id)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.toastCtrl.create({ message: 'Erro ao tentar excluir hora extra' });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RelatorioHoraExtraPage.prototype.deleteConfirm = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Você deseja realmente excluir esse registro?',
                            buttons: [
                                {
                                    text: 'SIM',
                                    handler: function () {
                                        _this.deleteHoraExtra(id);
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
    RelatorioHoraExtraPage.prototype.mostrarDescricaoCidade = function (descricao, cidade) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            subHeader: cidade,
                            message: descricao
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
    RelatorioHoraExtraPage.prototype.presentToast = function (mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({ message: mensagem, duration: 3000 })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatorioHoraExtraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-relatorio-hora-extra',
            template: __webpack_require__(/*! ./relatorio-hora-extra.page.html */ "./src/app/pages/relatorio-hora-extra/relatorio-hora-extra.page.html"),
            styles: [__webpack_require__(/*! ./relatorio-hora-extra.page.scss */ "./src/app/pages/relatorio-hora-extra/relatorio-hora-extra.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"],
            src_app_servicos_hora_extra_service__WEBPACK_IMPORTED_MODULE_2__["HoraExtraService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], RelatorioHoraExtraPage);
    return RelatorioHoraExtraPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-relatorio-hora-extra-relatorio-hora-extra-module.js.map