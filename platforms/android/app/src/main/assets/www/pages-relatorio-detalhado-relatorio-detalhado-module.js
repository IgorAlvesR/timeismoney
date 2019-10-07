(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-relatorio-detalhado-relatorio-detalhado-module"],{

/***/ "./src/app/pages/relatorio-detalhado/relatorio-detalhado.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/relatorio-detalhado/relatorio-detalhado.module.ts ***!
  \*************************************************************************/
/*! exports provided: RelatorioDetalhadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioDetalhadoPageModule", function() { return RelatorioDetalhadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _relatorio_detalhado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relatorio-detalhado.page */ "./src/app/pages/relatorio-detalhado/relatorio-detalhado.page.ts");







var routes = [
    {
        path: '',
        component: _relatorio_detalhado_page__WEBPACK_IMPORTED_MODULE_6__["RelatorioDetalhadoPage"]
    }
];
var RelatorioDetalhadoPageModule = /** @class */ (function () {
    function RelatorioDetalhadoPageModule() {
    }
    RelatorioDetalhadoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_relatorio_detalhado_page__WEBPACK_IMPORTED_MODULE_6__["RelatorioDetalhadoPage"]]
        })
    ], RelatorioDetalhadoPageModule);
    return RelatorioDetalhadoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/relatorio-detalhado/relatorio-detalhado.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/relatorio-detalhado/relatorio-detalhado.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <div class=\"header-top\">\n      <ion-icon id=\"back\" name=\"arrow-round-back\" button [routerLink]=\"['/registro-hora-extra']\"></ion-icon>\n      <p text-center>RELATÓRIO DETALHADO</p>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h1 id=\"nome\" class=\"ion-text-center\">{{nomeFuncionario}}</h1>\n  <p id=\"funcao\" class=\"ion-text-center\">{{funcao}}</p>\n \n  <ion-grid>\n    <div id=\"quantidadeHoras\">\n      <ion-row>\n        <ion-col>\n          <ion-icon name=\"time\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"time\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"time\"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col><span class=\"descricao\">60%</span></ion-col>\n        <ion-col><span class=\"descricao\">100%</span></ion-col>\n        <ion-col><span class=\"descricao\">Total</span></ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col><span id=\"horas60\">{{horaFormatada}}</span></ion-col>\n        <ion-col><span id=\"horas100\">{{horas100PorcentoFormatada}}</span></ion-col>\n        <ion-col><span id=\"total\">{{totalDeHorasRealizadasFormatadas}}</span></ion-col>\n      </ion-row>\n    </div>\n\n    <!-- <div id=\"quantidadeReais\">\n      <ion-row id=\"cash\">\n        <ion-col>\n          <ion-icon name=\"cash\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"cash\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"cash\"></ion-icon>\n        </ion-col>\n      </ion-row> -->\n\n      <!-- <ion-row>\n        <ion-col><span class=\"descricao\">60%</span></ion-col>\n        <ion-col><span class=\"descricao\">100%</span></ion-col>\n        <ion-col><span class=\"descricao\">Total</span></ion-col>\n      </ion-row> -->\n\n      <!-- <ion-row>\n        <ion-col><span> {{valorEmReais | currency:'BRL':true:'1.2-2'}}</span></ion-col>\n        <ion-col><span>{{valorHora100PorCentoEmReais | currency:'BRL':true:'1.2-2'}}</span></ion-col>\n        <ion-col><span> {{valorEmReaisDeTodasHorasRealizadas | currency:'BRL':true:'1.2-2'}}</span></ion-col>\n      </ion-row> -->\n    <!-- </div> -->\n\n  </ion-grid>\n\n  <div id=\"totalHoras\">\n      <h4>Total</h4>\n      <h1>{{valorEmReaisDeTodasHorasRealizadas | currency:'BRL':true:'1.2-2'}}</h1>\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/relatorio-detalhado/relatorio-detalhado.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/relatorio-detalhado/relatorio-detalhado.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #1106ac;\n  color: white; }\n  ion-toolbar .header-top {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n  ion-toolbar .header-top p {\n      margin-left: 10%; }\n  #back {\n  width: 25px;\n  height: 25px;\n  margin-left: 5px; }\n  ion-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-icon {\n  width: 35px;\n  height: 35px;\n  padding: 0px 15px;\n  color: white; }\n  span {\n  padding: 0px 8px;\n  color: white; }\n  .descricao {\n  padding: 0px 15px;\n  color: #bdb6b6;\n  font-size: 13pt; }\n  #quantidadeHoras {\n  margin-top: 0%;\n  margin-bottom: 20%; }\n  #cash {\n  color: #006200; }\n  ion-col {\n  padding: 0px 15px; }\n  h1 {\n  color: white; }\n  #nome {\n  color: white; }\n  #funcao {\n  margin-bottom: 15%;\n  color: white; }\n  #totalHoras {\n  text-align: center;\n  width: 50%;\n  height: 30%;\n  border: 5px solid #4BE25A;\n  border-radius: 100%;\n  margin: 0 auto;\n  padding-top: 15px; }\n  ion-content {\n  --background: linear-gradient(to bottom, #1106ac, #c4d3da 130%); }\n  h4 {\n  color: white; }\n  #horas60 {\n  color: #FBB52F; }\n  #horas100 {\n  color: #00F0FF; }\n  #total {\n  color: #4BE25A; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVsYXRvcmlvLWRldGFsaGFkby9DOlxcVXNlcnNcXElnb3JcXERlc2t0b3BcXElGU0NcXElGU0MgMjAxOS0yXFxUQ0MgSUlcXFRDQy1JSSBBcGxpY2F0aXZvIEhvcmFzIEV4dHJhc1xcVGltZWlzbW9uZXlhcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWxhdG9yaW8tZGV0YWxoYWRvXFxyZWxhdG9yaW8tZGV0YWxoYWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhO0VBQ2IsWUFBWSxFQUFBO0VBRmhCO0lBS1Esb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBTjNCO01BUVksZ0JBQWdCLEVBQUE7RUFLNUI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0VBRzNCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWSxFQUFBO0VBR2hCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVcsRUFBQTtFQUdmO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQXlCO0VBQ3pCLGVBQWUsRUFBQTtFQUduQjtFQUNJLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLGNBQW9CLEVBQUE7RUFHeEI7RUFDSSxpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLFlBQVksRUFBQTtFQUVoQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7RUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLCtEQUFhLEVBQUE7RUFHakI7RUFDSSxZQUFZLEVBQUE7RUFHaEI7RUFDSSxjQUFjLEVBQUE7RUFHbEI7RUFDSSxjQUFjLEVBQUE7RUFHbEI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWxhdG9yaW8tZGV0YWxoYWRvL3JlbGF0b3Jpby1kZXRhbGhhZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxMTA2YWM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgLmhlYWRlci10b3B7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4jYmFja3tcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuaW9uLXJvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5zcGFue1xyXG4gICAgcGFkZGluZzogMHB4IDhweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uZGVzY3JpY2Fve1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBjb2xvcjogcmdiKDE4OSwgMTgyLCAxODIpO1xyXG4gICAgZm9udC1zaXplOiAxM3B0O1xyXG59XHJcblxyXG4jcXVhbnRpZGFkZUhvcmFze1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMCU7XHJcbn1cclxuXHJcbiNjYXNoe1xyXG4gICAgY29sb3I6IHJnYigwLCA5OCwgMCk7XHJcbn1cclxuXHJcbmlvbi1jb2x7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxufVxyXG5cclxuaDF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNub21le1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiNmdW5jYW97XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiN0b3RhbEhvcmFze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzRCRTI1QTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzExMDZhYywgI2M0ZDNkYSAxMzAlKTtcclxufVxyXG5cclxuaDR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNob3JhczYwe1xyXG4gICAgY29sb3I6ICNGQkI1MkY7XHJcbn1cclxuXHJcbiNob3JhczEwMHtcclxuICAgIGNvbG9yOiAjMDBGMEZGO1xyXG59XHJcblxyXG4jdG90YWx7XHJcbiAgICBjb2xvcjogIzRCRTI1QTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/relatorio-detalhado/relatorio-detalhado.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/relatorio-detalhado/relatorio-detalhado.page.ts ***!
  \***********************************************************************/
/*! exports provided: RelatorioDetalhadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioDetalhadoPage", function() { return RelatorioDetalhadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicos_hora_extra_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/hora-extra.service */ "./src/app/servicos/hora-extra.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");





var RelatorioDetalhadoPage = /** @class */ (function () {
    function RelatorioDetalhadoPage(horasService, statusBar) {
        this.horasService = horasService;
        this.statusBar = statusBar;
        this.totalDeHorasExtras = 0;
        this.horaFormatada = '';
        this.totalDeHorasExtrasEmHoras = 0;
        this.valorEmReais = 0;
        this.horas100PorcentoFormatada = '';
        this.totalDeHorasExtras100PorCentoEmHoras = 0;
        this.valorHora100PorCentoEmReais = 0;
        this.totalDeHorasExtras100PoCento = 0;
        this.horaFormatadaTotal = '';
        this.totalDeHorasExtrasRealizadas = 0;
        this.totalDeHorasExtrasRealizadasEmHoras = 0;
        this.valorEmReaisDeTodasHorasRealizadas = 0;
        this.totalDeHorasRealizadasFormatadas = '';
        this.nomeFuncionario = '';
        this.funcao = '';
        this.hora = {};
        this.statusBar.backgroundColorByName('#1106ac');
    }
    RelatorioDetalhadoPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, this.calculototalDeHoras()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.calculototalDeHoras100PorCento()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.calculoValorTotalHorasExtras60PorCento()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.calculoValorTotalHorasExtras100PorCento()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.calculoValorTotalHorasRealizadas()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.calculoTotalHorasRealizadas()];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.calculoValorTotalHorasExtras60PorCento = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resultFuncionario;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getQuantidadeHorasExtrasEmHoras()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.horasService.buscarFuncionario()];
                    case 2:
                        resultFuncionario = _a.sent();
                        resultFuncionario.subscribe(function (result) {
                            _this.valorEmReais = ((result[0].salarioBruto / 220) * 1.6) * _this.totalDeHorasExtrasEmHoras;
                        });
                        return [2 /*return*/, this.valorEmReais];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.calculoValorTotalHorasRealizadas = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resultFuncionario;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.horasService.buscarFuncionario()];
                    case 1:
                        resultFuncionario = _a.sent();
                        resultFuncionario.subscribe(function (result) {
                            _this.valorEmReaisDeTodasHorasRealizadas = _this.valorEmReais + _this.valorHora100PorCentoEmReais;
                        });
                        return [2 /*return*/, this.valorEmReaisDeTodasHorasRealizadas];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.calculoValorTotalHorasExtras100PorCento = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resultFuncionario;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getQuantidadeHorasExtras100PorCentoEmHoras()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.horasService.buscarFuncionario()];
                    case 2:
                        resultFuncionario = _a.sent();
                        resultFuncionario.subscribe(function (result) {
                            _this.funcao = result[0].funcao;
                            _this.nomeFuncionario = result[0].nome;
                            _this.valorHora100PorCentoEmReais = ((result[0].salarioBruto / 220) * 2) * _this.totalDeHorasExtras100PorCentoEmHoras;
                        });
                        return [2 /*return*/, this.valorHora100PorCentoEmReais];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.getQuantidadeHorasExtrasEmHoras = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var duracaoMilisegundos, milisegundos;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        duracaoMilisegundos = 0;
                        milisegundos = 0;
                        return [4 /*yield*/, this.horasService.getHorasExtras60porCento().subscribe(function (dados) {
                                dados.forEach(function (element) {
                                    var horaFinal = element.horaDataCalculoFinal;
                                    var horaInicial = element.horaDataCalculoInicio;
                                    milisegundos = moment__WEBPACK_IMPORTED_MODULE_3__(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment__WEBPACK_IMPORTED_MODULE_3__(horaInicial, "DD/MM/YYYY HH:mm:ss"));
                                    duracaoMilisegundos = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](milisegundos).asHours();
                                    _this.totalDeHorasExtrasEmHoras += duracaoMilisegundos;
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.totalDeHorasExtrasEmHoras];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.getQuantidadeHorasExtras100PorCentoEmHoras = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var duracaoMilisegundos, milisegundos;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        duracaoMilisegundos = 0;
                        milisegundos = 0;
                        return [4 /*yield*/, this.horasService.getHorasExtras100porCento().subscribe(function (dados) {
                                dados.forEach(function (element) {
                                    var horaFinal = element.horaDataCalculoFinal;
                                    var horaInicial = element.horaDataCalculoInicio;
                                    milisegundos = moment__WEBPACK_IMPORTED_MODULE_3__(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment__WEBPACK_IMPORTED_MODULE_3__(horaInicial, "DD/MM/YYYY HH:mm:ss"));
                                    duracaoMilisegundos = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](milisegundos).asHours();
                                    _this.totalDeHorasExtras100PorCentoEmHoras += duracaoMilisegundos;
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.totalDeHorasExtras100PorCentoEmHoras];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.calculototalDeHoras = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var duracaoMilisegundos, milisegundos, somaMilisegundos;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        duracaoMilisegundos = 0;
                        milisegundos = 0;
                        somaMilisegundos = 0;
                        return [4 /*yield*/, this.horasService.getHorasExtras60porCento().subscribe(function (dados) {
                                dados.forEach(function (element) {
                                    var horaFinal = element.horaDataCalculoFinal;
                                    var horaInicial = element.horaDataCalculoInicio;
                                    milisegundos = moment__WEBPACK_IMPORTED_MODULE_3__(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment__WEBPACK_IMPORTED_MODULE_3__(horaInicial, "DD/MM/YYYY HH:mm:ss"));
                                    duracaoMilisegundos = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](milisegundos).asHours();
                                    _this.totalDeHorasExtras += duracaoMilisegundos;
                                    somaMilisegundos += milisegundos;
                                });
                                _this.horaFormatada = Math.floor(duracaoMilisegundos) + moment__WEBPACK_IMPORTED_MODULE_3__["utc"](somaMilisegundos).format(":mm:ss");
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.calculototalDeHoras100PorCento = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var duracaoMilisegundos, milisegundos, somaMilisegundos;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        duracaoMilisegundos = 0;
                        milisegundos = 0;
                        somaMilisegundos = 0;
                        return [4 /*yield*/, this.horasService.getHorasExtras100porCento().subscribe(function (dados) {
                                dados.forEach(function (element) {
                                    var horaFinal = element.horaDataCalculoFinal;
                                    var horaInicial = element.horaDataCalculoInicio;
                                    milisegundos = moment__WEBPACK_IMPORTED_MODULE_3__(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment__WEBPACK_IMPORTED_MODULE_3__(horaInicial, "DD/MM/YYYY HH:mm:ss"));
                                    duracaoMilisegundos = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](milisegundos).asHours();
                                    _this.totalDeHorasExtras100PoCento += duracaoMilisegundos;
                                    somaMilisegundos += milisegundos;
                                });
                                _this.horas100PorcentoFormatada = Math.floor(duracaoMilisegundos) + moment__WEBPACK_IMPORTED_MODULE_3__["utc"](somaMilisegundos).format(":mm:ss");
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.calculoTotalHorasRealizadas = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var duracaoMilisegundos, milisegundos, somaMilisegundos;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        duracaoMilisegundos = 0;
                        milisegundos = 0;
                        somaMilisegundos = 0;
                        return [4 /*yield*/, this.horasService.getHorasExtrasTotais().subscribe(function (dados) {
                                dados.forEach(function (element) {
                                    var horaFinal = element.horaDataCalculoFinal;
                                    var horaInicial = element.horaDataCalculoInicio;
                                    milisegundos = moment__WEBPACK_IMPORTED_MODULE_3__(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment__WEBPACK_IMPORTED_MODULE_3__(horaInicial, "DD/MM/YYYY HH:mm:ss"));
                                    duracaoMilisegundos = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](milisegundos).asHours();
                                    _this.totalDeHorasExtrasRealizadas += duracaoMilisegundos;
                                    somaMilisegundos += milisegundos;
                                });
                                _this.totalDeHorasRealizadasFormatadas = Math.floor(duracaoMilisegundos) + moment__WEBPACK_IMPORTED_MODULE_3__["utc"](somaMilisegundos).format(":mm:ss");
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatorioDetalhadoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-relatorio-detalhado',
            template: __webpack_require__(/*! ./relatorio-detalhado.page.html */ "./src/app/pages/relatorio-detalhado/relatorio-detalhado.page.html"),
            styles: [__webpack_require__(/*! ./relatorio-detalhado.page.scss */ "./src/app/pages/relatorio-detalhado/relatorio-detalhado.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicos_hora_extra_service__WEBPACK_IMPORTED_MODULE_2__["HoraExtraService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])
    ], RelatorioDetalhadoPage);
    return RelatorioDetalhadoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-relatorio-detalhado-relatorio-detalhado-module.js.map