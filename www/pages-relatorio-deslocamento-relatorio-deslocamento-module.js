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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <div class=\"header-top\">\n      <ion-icon name=\"arrow-round-back\" button [routerLink]=\"['/registro-hora-extra']\"></ion-icon>\n      <p text-center>RELATÓRIO DE DESLOCAMENTO</p>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div id=\"filtroData\">\n        <ion-input placeholder='Data Início' class='data' [(ngModel)]=\"data.dataInicial\" type=\"date\"></ion-input>\n        <ion-input placeholder='Data Início' class='data' [(ngModel)]=\"data.dataFinal\" type=\"date\"></ion-input>\n        <ion-icon class=\"buscarData\" name=\"list-box\" (click)=\"getDeslocamentosComFiltro(data.dataInicial,data.dataFinal)\"></ion-icon>\n      </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <strong>Descrição/Data</strong>\n      </ion-col>\n      <ion-col class=\"ion-text-center\">\n        <strong>Cidade</strong>\n      </ion-col>\n      <ion-col size=\"1\">\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor='let d of deslocamentos'>\n      <ion-col class=\"dados\" (click)='mostrarHora(d.hora)'>\n        {{d.descricao}}<br>\n        <span>{{d.data | date: 'dd/MM/y'}}</span>\n      </ion-col>\n      <ion-col class=\"ion-text-center dados\">\n        {{d.localizacao}}\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon class=\"delete\" name='trash' (click)=\"deleteConfirm(d.id)\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf='deslocamentos == null'>\n      <p>Não possui deslocamentos</p>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/relatorio-deslocamento/relatorio-deslocamento.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/relatorio-deslocamento/relatorio-deslocamento.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: var(--ion-color-padraoApp);\n  color: white; }\n\nion-row {\n  border-bottom: 1px solid #cecece;\n  color: black;\n  padding: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\nspan {\n  color: gray;\n  font-size: 10pt; }\n\n.dados {\n  color: gray; }\n\n.header-top {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.header-top p {\n    margin-left: 10%; }\n\nion-icon {\n  width: 25px;\n  height: 25px;\n  margin-left: 5px; }\n\nion-col {\n  color: gray; }\n\n.delete {\n  width: 25px;\n  height: 25px;\n  color: #af0d0d; }\n\n#filtroData {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n\n.data {\n  width: 10%;\n  margin: 5px;\n  padding: 5px;\n  border-bottom: 2px solid var(--ion-color-padraoApp);\n  color: gray; }\n\n.buscarData {\n  margin: 5px;\n  padding: 5px;\n  color: green;\n  width: 35px;\n  height: 35px; }\n\n.dataValor {\n  padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVsYXRvcmlvLWRlc2xvY2FtZW50by9DOlxcVXNlcnNcXElnb3JcXERlc2t0b3BcXElGU0NcXElGU0MgMjAxOS0yXFxUQ0MgSUlcXFRDQy1JSSBBcGxpY2F0aXZvIEhvcmFzIEV4dHJhc1xcVGltZWlzbW9uZXlhcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWxhdG9yaW8tZGVzbG9jYW1lbnRvXFxyZWxhdG9yaW8tZGVzbG9jYW1lbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdDQUEyQztFQUMzQyxZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUZ2QjtJQUlRLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixjQUF1QixFQUFBOztBQUkzQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUE4QjtVQUE5Qiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixtREFBb0Q7RUFDcEQsV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlbGF0b3Jpby1kZXNsb2NhbWVudG8vcmVsYXRvcmlvLWRlc2xvY2FtZW50by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXBhZHJhb0FwcCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1yb3d7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIwNiwgMjA2LCAyMDYpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuc3BhbntcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4uZGFkb3N7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmhlYWRlci10b3B7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbmlvbi1jb2x7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmRlbGV0ZXtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgY29sb3I6IHJnYigxNzUsIDEzLCAxMyk7XHJcbn1cclxuXHJcblxyXG4jZmlsdHJvRGF0YXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5kYXRhe1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICB2YXIoLS1pb24tY29sb3ItcGFkcmFvQXBwKTtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uYnVzY2FyRGF0YXtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5kYXRhVmFsb3J7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufSJdfQ== */"

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




var RelatorioDeslocamentoPage = /** @class */ (function () {
    function RelatorioDeslocamentoPage(deslocamentoService, alertController, toastController) {
        this.deslocamentoService = deslocamentoService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.deslocamentos = new Array();
        this.data = {};
        this.deslocamentoService.getDeslocamentos();
    }
    RelatorioDeslocamentoPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDeslocamentos()];
                    case 1:
                        _a.sent();
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
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.data.dataInicial == '' || this.data.dataFinal == null || this.data.dataFinal == '' || this.data.dataFinal == null) {
                            this.presentToast('Preencha todos os campos');
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, this.deslocamentoService.getDeslocamentosComFiltro(dataInicial, dataFinal).subscribe(function (dados) {
                                if (dados.length == 0) {
                                    _this.presentToast('Não possui horas extras realizadas nessa data');
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