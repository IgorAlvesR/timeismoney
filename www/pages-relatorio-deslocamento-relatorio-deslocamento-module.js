(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-relatorio-deslocamento-relatorio-deslocamento-module"],{

/***/ "./src/app/pages/relatorio-deslocamento/relatorio-deslocamento.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/relatorio-deslocamento/relatorio-deslocamento.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RelatorioDeslocamentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioDeslocamentoPageModule", function() { return RelatorioDeslocamentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _relatorio_deslocamento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relatorio-deslocamento.page */ "./src/app/pages/relatorio-deslocamento/relatorio-deslocamento.page.ts");







var routes = [
    {
        path: '',
        component: _relatorio_deslocamento_page__WEBPACK_IMPORTED_MODULE_6__["RelatorioDeslocamentoPage"]
    }
];
var RelatorioDeslocamentoPageModule = /** @class */ (function () {
    function RelatorioDeslocamentoPageModule() {
    }
    RelatorioDeslocamentoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_relatorio_deslocamento_page__WEBPACK_IMPORTED_MODULE_6__["RelatorioDeslocamentoPage"]]
        })
    ], RelatorioDeslocamentoPageModule);
    return RelatorioDeslocamentoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/relatorio-deslocamento/relatorio-deslocamento.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/relatorio-deslocamento/relatorio-deslocamento.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <div class=\"header-top\">\n      <ion-icon name=\"arrow-round-back\" button [routerLink]=\"['/registro-hora-extra']\"></ion-icon>\n      <p text-center>RELATÓRIO DE DESLOCAMENTO</p>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"filtroData\">\n    <ion-datetime value='DD/MM/YY' id=\"inicio\" class='data' done-text='OK' cancelText='Cancelar' displayFormat=\"DD/MM/YY\" placeholder='dd/mm/aaaa'\n      [(ngModel)]=\"dataInicial\"></ion-datetime>\n    <ion-datetime value='DD/MM/YY' id=\"fim\" class='data' done-text='OK' cancelText='Cancelar' displayFormat=\"DD/MM/YY\" placeholder='dd/mm/aaaa'\n      [(ngModel)]=\"dataFinal\" (ionBlur)='getDeslocamentosComFiltro(dataInicial,dataFinal)'>\n    </ion-datetime>\n  </div>\n  <div id=\"filtroDataDescricao\">\n    <label for=\"\">Data Início</label>\n    <label for=\"\">Data Fim</label>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='6'>\n        <strong>Descrição/Data</strong>\n      </ion-col>\n      <ion-col size='4' class=\"ion-text-center\">\n        <strong>Cidade</strong>\n      </ion-col>\n      <ion-col size=\"2\">\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor='let d of deslocamentos'>\n      <ion-row *ngIf='d == null'>\n            <p>Não possui deslocamentos</p>\n      </ion-row>\n      <ion-col size='6' class=\"dados\" (click)='mostrarHora(d.hora)'>\n        {{d.descricao}}<br>\n        <span>{{d.data | date: 'dd/MM/y'}}</span>\n      </ion-col>\n      <ion-col size='4' class=\"ion-text-center dados\">\n        {{d.localizacao}}\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-icon class=\"delete\" name='trash' (click)=\"deleteConfirm(d.id)\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/relatorio-deslocamento/relatorio-deslocamento.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/relatorio-deslocamento/relatorio-deslocamento.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: var(--ion-color-padraoApp);\n  color: white; }\n\nion-row {\n  border-bottom: 1px solid #cecece;\n  color: black;\n  padding: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\nspan {\n  color: gray;\n  font-size: 10pt; }\n\n.dados {\n  color: gray; }\n\n.header-top {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.header-top p {\n    margin-left: 10%; }\n\nion-icon {\n  width: 25px;\n  height: 25px;\n  margin-left: 5px; }\n\nion-col {\n  color: gray; }\n\n.delete {\n  width: 25px;\n  height: 25px;\n  color: #af0d0d; }\n\n#filtroData {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around; }\n\n.data {\n  border-bottom: 2px solid var(--ion-color-padraoApp);\n  color: gray;\n  padding-bottom: 5px;\n  width: 40%; }\n\n.buscarData {\n  margin: 5px;\n  padding: 5px;\n  color: green;\n  width: 35px;\n  height: 35px; }\n\n.dataValor {\n  padding-left: 5px; }\n\nlabel {\n  color: gray;\n  padding-right: 0px;\n  font-size: 10pt; }\n\n#filtroDataDescricao {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVsYXRvcmlvLWRlc2xvY2FtZW50by9DOlxcVXNlcnNcXElnb3JcXERlc2t0b3BcXElGU0NcXElGU0MgMjAxOS0yXFxUQ0MgSUlcXFRDQy1JSSBBcGxpY2F0aXZvIEhvcmFzIEV4dHJhc1xcVGltZWlzbW9uZXlhcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWxhdG9yaW8tZGVzbG9jYW1lbnRvXFxyZWxhdG9yaW8tZGVzbG9jYW1lbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdDQUEyQztFQUMzQyxZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUZ2QjtJQUlRLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixjQUF1QixFQUFBOztBQUkzQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLG1EQUFvRDtFQUNwRCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVsYXRvcmlvLWRlc2xvY2FtZW50by9yZWxhdG9yaW8tZGVzbG9jYW1lbnRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcGFkcmFvQXBwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXJvd3tcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjA2LCAyMDYsIDIwNik7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zcGFue1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbn1cclxuXHJcbi5kYWRvc3tcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uaGVhZGVyLXRvcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24taWNvbntcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuaW9uLWNvbHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uZGVsZXRle1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBjb2xvcjogcmdiKDE3NSwgMTMsIDEzKTtcclxufVxyXG5cclxuXHJcbiNmaWx0cm9EYXRhe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uZGF0YXtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgdmFyKC0taW9uLWNvbG9yLXBhZHJhb0FwcCk7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uYnVzY2FyRGF0YXtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5kYXRhVmFsb3J7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5sYWJlbHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4jZmlsdHJvRGF0YURlc2NyaWNhb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/relatorio-deslocamento/relatorio-deslocamento.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/relatorio-deslocamento/relatorio-deslocamento.page.ts ***!
  \*****************************************************************************/
/*! exports provided: RelatorioDeslocamentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioDeslocamentoPage", function() { return RelatorioDeslocamentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicos_deslocamento_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/deslocamento.service */ "./src/app/servicos/deslocamento.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);





var RelatorioDeslocamentoPage = /** @class */ (function () {
    function RelatorioDeslocamentoPage(deslocamentoService, alertController, toastController) {
        this.deslocamentoService = deslocamentoService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.deslocamentos = new Array();
        this.dataInicial = '';
        this.dataFinal = '';
        this.deslocamentoService.getDeslocamentos();
    }
    RelatorioDeslocamentoPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getDeslocamentos()];
                    case 1:
                        _c.sent();
                        _a = this;
                        return [4 /*yield*/, moment__WEBPACK_IMPORTED_MODULE_4__().subtract(30, 'days').format("YYYY-MM-26")];
                    case 2:
                        _a.dataInicial = _c.sent();
                        _b = this;
                        return [4 /*yield*/, moment__WEBPACK_IMPORTED_MODULE_4__().format("YYYY-MM-25")];
                    case 3:
                        _b.dataFinal = _c.sent();
                        return [4 /*yield*/, this.getDeslocamentosComFiltro(this.dataInicial, this.dataFinal)];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, this.getDeslocamentosComFiltro(this.dataInicial, this.dataFinal)];
                    case 5:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatorioDeslocamentoPage.prototype.ngOnDestroy = function () {
        if (this.deslocamentoSubscription) {
            this.deslocamentoSubscription.unsubscribe();
        }
    };
    RelatorioDeslocamentoPage.prototype.getDeslocamentos = function () {
        var _this = this;
        this.deslocamentoSubscription = this.deslocamentoService.getDeslocamentos().subscribe(function (result) {
            return _this.deslocamentos = result;
        });
    };
    RelatorioDeslocamentoPage.prototype.getDeslocamentosComFiltro = function (dataInicial, dataFinal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var di, df, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        di = moment__WEBPACK_IMPORTED_MODULE_4__(dataInicial).format('YYYY-MM-DD');
                        df = moment__WEBPACK_IMPORTED_MODULE_4__(dataFinal).format('YYYY-MM-DD');
                        _a = this;
                        return [4 /*yield*/, this.deslocamentoService.getDeslocamentosComFiltro(di, df).subscribe(function (dados) {
                                if (dados.length == 0) {
                                    _this.presentToast('Não possui deslocamentos nesse período!');
                                }
                                return _this.deslocamentos = dados;
                            })];
                    case 1:
                        _a.deslocamentoSubscription = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatorioDeslocamentoPage.prototype.deleteDeslocamento = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.deslocamentoService.deleteDeslocamento(id)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.toastCtrl.create({ message: 'Erro ao tentar excluir deslocamento' });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RelatorioDeslocamentoPage.prototype.deleteConfirm = function (id) {
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
                                        _this.deleteDeslocamento(id);
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
    RelatorioDeslocamentoPage.prototype.mostrarHora = function (hora) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            subHeader: "Horário do registro: " + hora,
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
    RelatorioDeslocamentoPage.prototype.presentToast = function (mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({ message: mensagem, duration: 3000 })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatorioDeslocamentoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-relatorio-deslocamento',
            template: __webpack_require__(/*! ./relatorio-deslocamento.page.html */ "./src/app/pages/relatorio-deslocamento/relatorio-deslocamento.page.html"),
            styles: [__webpack_require__(/*! ./relatorio-deslocamento.page.scss */ "./src/app/pages/relatorio-deslocamento/relatorio-deslocamento.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicos_deslocamento_service__WEBPACK_IMPORTED_MODULE_2__["DeslocamentoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], RelatorioDeslocamentoPage);
    return RelatorioDeslocamentoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-relatorio-deslocamento-relatorio-deslocamento-module.js.map