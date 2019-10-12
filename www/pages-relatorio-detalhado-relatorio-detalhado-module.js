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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <div class=\"header-top\">\n      <ion-icon id=\"back\" name=\"arrow-round-back\" button [routerLink]=\"['/registro-hora-extra']\"></ion-icon>\n      <p text-center>RELATÓRIO DETALHADO</p>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <h1 id=\"nome\" class=\"ion-text-center\">{{nomeFuncionario}}</h1>\n  <p id=\"funcao\" class=\"ion-text-center\">{{funcao}}</p>\n\n  <div id=\"filtroData\">\n    <ion-datetime class='data' done-text='OK' cancelText='Cancelar' displayFormat=\"DD/MM/YY\" placeholder='dd/mm/aaaa'\n      [(ngModel)]=\"dataInicial\"></ion-datetime>\n    <ion-datetime class='data' done-text='OK' cancelText='Cancelar' displayFormat=\"DD/MM/YY\" placeholder='dd/mm/aaaa'\n      [(ngModel)]=\"dataFinal\" (ionChange)='calculaValoresHorasExtras(dataInicial,dataFinal)'>\n    </ion-datetime>\n  </div>\n  <div id=\"filtroDataDescricao\">\n    <label for=\"\">Data Início</label>\n    <label for=\"\">Data Fim</label>\n  </div>\n\n\n  <ion-grid>\n    <div id=\"quantidadeHoras\">\n      <ion-row>\n        <ion-col>\n          <ion-icon name=\"time\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"time\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"time\"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col><span class=\"descricao\">60%</span></ion-col>\n        <ion-col><span class=\"descricao\">100%</span></ion-col>\n        <ion-col><span class=\"descricao\">Total</span></ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col><span id=\"horas60\">{{horaFormatada}}</span></ion-col>\n        <ion-col><span id=\"horas100\">{{horas100PorcentoFormatada}}</span></ion-col>\n        <ion-col><span id=\"total\">{{totalDeHorasRealizadasFormatadas}}</span></ion-col>\n      </ion-row>\n    </div>\n\n  </ion-grid>\n\n  <div id=\"totalHoras\">\n    <h4>Total</h4>\n    <h1>{{valorEmReaisDeTodasHorasRealizadas | currency:'BRL'}}</h1>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/relatorio-detalhado/relatorio-detalhado.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/relatorio-detalhado/relatorio-detalhado.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #0d0579;\n  color: white; }\n  ion-toolbar .header-top {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n  ion-toolbar .header-top p {\n      margin-left: 10%; }\n  #back {\n  width: 25px;\n  height: 25px;\n  margin-left: 5px; }\n  ion-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-icon {\n  width: 35px;\n  height: 35px;\n  padding: 0px 15px;\n  color: white; }\n  span {\n  padding: 0px 8px;\n  color: white; }\n  .descricao {\n  padding: 0px 15px;\n  color: #bdb6b6;\n  font-size: 13pt; }\n  #quantidadeHoras {\n  margin-top: 5%;\n  margin-bottom: 20%; }\n  #cash {\n  color: #006200; }\n  ion-col {\n  padding: 0px 15px; }\n  h1 {\n  color: white; }\n  #nome {\n  color: white; }\n  #funcao {\n  margin-bottom: 10%;\n  color: white; }\n  #totalHoras {\n  text-align: center;\n  width: 50%;\n  height: 30%;\n  border: 5px solid #4BE25A;\n  border-radius: 100%;\n  margin: 0 auto;\n  padding-top: 15px; }\n  ion-content {\n  --background: linear-gradient(to bottom, #0d0579, #64aaca 130%); }\n  h4 {\n  color: white; }\n  #horas60 {\n  color: #FBB52F; }\n  #horas100 {\n  color: #00F0FF; }\n  #total {\n  color: #4BE25A; }\n  #filtroData {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around; }\n  .data {\n  border-bottom: 2px solid var(--ion-color-padraoApp);\n  color: gray;\n  padding-bottom: 5px;\n  width: 40%;\n  text-align: center; }\n  .buscarData {\n  margin: 5px;\n  padding: 5px;\n  color: green;\n  width: 35px;\n  height: 35px; }\n  .dataValor {\n  padding-left: 5px; }\n  label {\n  color: gray;\n  padding-right: 0px;\n  font-size: 10pt; }\n  #filtroDataDescricao {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVsYXRvcmlvLWRldGFsaGFkby9DOlxcVXNlcnNcXElnb3JcXERlc2t0b3BcXElGU0NcXElGU0MgMjAxOS0yXFxUQ0MgSUlcXFRDQy1JSSBBcGxpY2F0aXZvIEhvcmFzIEV4dHJhc1xcVGltZWlzbW9uZXlhcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWxhdG9yaW8tZGV0YWxoYWRvXFxyZWxhdG9yaW8tZGV0YWxoYWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhO0VBQ2IsWUFBWSxFQUFBO0VBRmhCO0lBS1Esb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBTjNCO01BUVksZ0JBQWdCLEVBQUE7RUFLNUI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0VBRzNCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWSxFQUFBO0VBR2hCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVcsRUFBQTtFQUdmO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQXlCO0VBQ3pCLGVBQWUsRUFBQTtFQUduQjtFQUNJLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLGNBQW9CLEVBQUE7RUFHeEI7RUFDSSxpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLFlBQVksRUFBQTtFQUVoQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7RUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLCtEQUFhLEVBQUE7RUFHakI7RUFDSSxZQUFZLEVBQUE7RUFHaEI7RUFDSSxjQUFjLEVBQUE7RUFHbEI7RUFDSSxjQUFjLEVBQUE7RUFHbEI7RUFDSSxjQUFjLEVBQUE7RUFHbEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw2QkFBNkIsRUFBQTtFQUdqQztFQUNJLG1EQUFvRDtFQUNwRCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFHaEI7RUFDSSxpQkFBaUIsRUFBQTtFQUVyQjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBO0VBR25CO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVsYXRvcmlvLWRldGFsaGFkby9yZWxhdG9yaW8tZGV0YWxoYWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMGQwNTc5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIC5oZWFkZXItdG9we1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI2JhY2t7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbmlvbi1yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1pY29ue1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuc3BhbntcclxuICAgIHBhZGRpbmc6IDBweCA4cHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmRlc2NyaWNhb3tcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgY29sb3I6IHJnYigxODksIDE4MiwgMTgyKTtcclxuICAgIGZvbnQtc2l6ZTogMTNwdDtcclxufVxyXG5cclxuI3F1YW50aWRhZGVIb3Jhc3tcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xyXG59XHJcblxyXG4jY2FzaHtcclxuICAgIGNvbG9yOiByZ2IoMCwgOTgsIDApO1xyXG59XHJcblxyXG5pb24tY29se1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbm9tZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jZnVuY2Fve1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jdG90YWxIb3Jhc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICM0QkUyNUE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwZDA1NzksICM2NGFhY2EgMTMwJSk7XHJcbn1cclxuXHJcbmg0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jaG9yYXM2MHtcclxuICAgIGNvbG9yOiAjRkJCNTJGO1xyXG59XHJcblxyXG4jaG9yYXMxMDB7XHJcbiAgICBjb2xvcjogIzAwRjBGRjtcclxufVxyXG5cclxuI3RvdGFse1xyXG4gICAgY29sb3I6ICM0QkUyNUE7XHJcbn1cclxuXHJcbiNmaWx0cm9EYXRhe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uZGF0YXtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgdmFyKC0taW9uLWNvbG9yLXBhZHJhb0FwcCk7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnVzY2FyRGF0YXtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5kYXRhVmFsb3J7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5sYWJlbHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4jZmlsdHJvRGF0YURlc2NyaWNhb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var RelatorioDetalhadoPage = /** @class */ (function () {
    function RelatorioDetalhadoPage(horasService, toastController) {
        this.horasService = horasService;
        this.toastController = toastController;
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
        this.valorEmReaisDeTodasHorasRealizadasSemFiltro = 0;
        this.totalDeHorasRealizadasFormatadas = '';
        this.nomeFuncionario = '';
        this.funcao = '';
        this.hora = {};
        this.dataInicial = '';
        this.dataFinal = '';
    }
    RelatorioDetalhadoPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 4, , 5]);
                        /* await this.calculototalDeHorasSemFiltro()
                        await this.calculototalDeHoras100PorCentoSemFiltro()
                        await this.calculoValorTotalHorasExtras60PorCentoSemFiltro()
                        await this.calculoValorTotalHorasExtras100PorCentoSemFiltro()
                        await this.calculoTotalHorasRealizadasSemFiltro()
                        await this.calculoValorTotalHorasRealizadas() */
                        _a = this;
                        return [4 /*yield*/, moment__WEBPACK_IMPORTED_MODULE_3__().subtract(30, 'days').format("YYYY-11-12")];
                    case 1:
                        /* await this.calculototalDeHorasSemFiltro()
                        await this.calculototalDeHoras100PorCentoSemFiltro()
                        await this.calculoValorTotalHorasExtras60PorCentoSemFiltro()
                        await this.calculoValorTotalHorasExtras100PorCentoSemFiltro()
                        await this.calculoTotalHorasRealizadasSemFiltro()
                        await this.calculoValorTotalHorasRealizadas() */
                        _a.dataInicial = _c.sent();
                        _b = this;
                        return [4 /*yield*/, moment__WEBPACK_IMPORTED_MODULE_3__().format("YYYY-MM-25")];
                    case 2:
                        _b.dataFinal = _c.sent();
                        return [4 /*yield*/, this.calculaValoresHorasExtras(this.dataInicial, this.dataFinal)];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _c.sent();
                        console.log(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.zera = function () {
        this.valorEmReaisDeTodasHorasRealizadas = 0;
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
        this.valorEmReaisDeTodasHorasRealizadasSemFiltro = 0;
        this.totalDeHorasRealizadasFormatadas = '';
    };
    RelatorioDetalhadoPage.prototype.calculaValoresHorasExtras = function (dataInicial, dataFinal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var di, df;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.zera()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, moment__WEBPACK_IMPORTED_MODULE_3__(dataInicial).format('YYYY-MM-DD')];
                    case 2:
                        di = _a.sent();
                        return [4 /*yield*/, moment__WEBPACK_IMPORTED_MODULE_3__(dataFinal).format('YYYY-MM-DD')];
                    case 3:
                        df = _a.sent();
                        return [4 /*yield*/, this.calculototalDeHoras(di, df)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.calculototalDeHoras100PorCento(di, df)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.calculoValorTotalHorasExtras60PorCento(di, df)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.calculoValorTotalHorasExtras100PorCento(di, df)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.calculoTotalHorasRealizadas(di, df)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.calculoValorTotalHorasRealizadas()];
                    case 9:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.calculoValorTotalHorasExtras60PorCento = function (dataInicial, dataFinal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resultFuncionario;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getQuantidadeHorasExtrasEmHoras(dataInicial, dataFinal)];
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
    RelatorioDetalhadoPage.prototype.calculoValorTotalHorasExtras60PorCentoSemFiltro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resultFuncionario;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getQuantidadeHorasExtrasEmHorasSemFiltro()];
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
    RelatorioDetalhadoPage.prototype.getQuantidadeHorasExtrasEmHorasSemFiltro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var duracaoMilisegundos, milisegundos;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        duracaoMilisegundos = 0;
                        milisegundos = 0;
                        return [4 /*yield*/, this.horasService.getHorasExtras60porCentoSemFiltro().subscribe(function (dados) {
                                dados.forEach(function (element) {
                                    if (dados.length == 0) {
                                        _this.presentToast('Não possui horas extras realizadas nessa data');
                                    }
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
    RelatorioDetalhadoPage.prototype.calculoValorTotalHorasRealizadas = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.horasService.buscarFuncionario()];
                    case 1:
                        _a.resultFuncionario = _b.sent();
                        return [4 /*yield*/, this.resultFuncionario.subscribe(function () {
                                _this.valorEmReaisDeTodasHorasRealizadas = _this.valorEmReais + _this.valorHora100PorCentoEmReais;
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.calculoValorTotalHorasExtras100PorCentoSemFiltro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resultFuncionario;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getQuantidadeHorasExtras100PorCentoEmHorasSemFiltro()];
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
    RelatorioDetalhadoPage.prototype.getQuantidadeHorasExtras100PorCentoEmHorasSemFiltro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var duracaoMilisegundos, milisegundos;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        duracaoMilisegundos = 0;
                        milisegundos = 0;
                        return [4 /*yield*/, this.horasService.getHorasExtras100porCentoSemFiltro().subscribe(function (dados) {
                                dados.forEach(function (element) {
                                    if (dados.length == 0) {
                                        _this.presentToast('Não possui horas extras realizadas nessa data');
                                    }
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
    RelatorioDetalhadoPage.prototype.calculoValorTotalHorasExtras100PorCento = function (dataInicial, dataFinal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var di, df, resultFuncionario;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.valorHora100PorCentoEmReais = 0;
                        di = moment__WEBPACK_IMPORTED_MODULE_3__(dataInicial).format('YYYY-MM-DD');
                        df = moment__WEBPACK_IMPORTED_MODULE_3__(dataFinal).format('YYYY-MM-DD');
                        return [4 /*yield*/, this.getQuantidadeHorasExtras100PorCentoEmHoras(di, df)];
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
    RelatorioDetalhadoPage.prototype.getQuantidadeHorasExtrasEmHoras = function (dataInicial, dataFinal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var di, df, duracaoMilisegundos, milisegundos;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        di = moment__WEBPACK_IMPORTED_MODULE_3__(dataInicial).format('YYYY-MM-DD');
                        df = moment__WEBPACK_IMPORTED_MODULE_3__(dataFinal).format('YYYY-MM-DD');
                        duracaoMilisegundos = 0;
                        milisegundos = 0;
                        return [4 /*yield*/, this.horasService.getHorasExtras60porCento(di, df).subscribe(function (dados) {
                                dados.forEach(function (element) {
                                    if (dados.length == 0) {
                                        _this.presentToast('Não possui horas extras realizadas nessa data');
                                    }
                                    if (element.diaSemana > 0) {
                                        var horaFinal = element.horaDataCalculoFinal;
                                        var horaInicial = element.horaDataCalculoInicio;
                                        milisegundos = moment__WEBPACK_IMPORTED_MODULE_3__(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment__WEBPACK_IMPORTED_MODULE_3__(horaInicial, "DD/MM/YYYY HH:mm:ss"));
                                        duracaoMilisegundos = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](milisegundos).asHours();
                                        _this.totalDeHorasExtrasEmHoras += duracaoMilisegundos;
                                    }
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.totalDeHorasExtrasEmHoras];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.getQuantidadeHorasExtras100PorCentoEmHoras = function (dataInicial, dataFinal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var di, df, duracaoMilisegundos, milisegundos;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        di = moment__WEBPACK_IMPORTED_MODULE_3__(dataInicial).format('YYYY-MM-DD');
                        df = moment__WEBPACK_IMPORTED_MODULE_3__(dataFinal).format('YYYY-MM-DD');
                        duracaoMilisegundos = 0;
                        milisegundos = 0;
                        return [4 /*yield*/, this.horasService.getHorasExtras100porCento(di, df).subscribe(function (dados) {
                                dados.forEach(function (element) {
                                    if (dados.length == 0) {
                                        _this.presentToast('Não possui horas extras realizadas nessa data');
                                    }
                                    if (element.diaSemana == 0) {
                                        var horaFinal = element.horaDataCalculoFinal;
                                        var horaInicial = element.horaDataCalculoInicio;
                                        milisegundos = moment__WEBPACK_IMPORTED_MODULE_3__(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment__WEBPACK_IMPORTED_MODULE_3__(horaInicial, "DD/MM/YYYY HH:mm:ss"));
                                        duracaoMilisegundos = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](milisegundos).asHours();
                                        _this.totalDeHorasExtras100PorCentoEmHoras += duracaoMilisegundos;
                                    }
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.totalDeHorasExtras100PorCentoEmHoras];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.calculototalDeHoras = function (dataInicial, dataFinal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var di, df, duracaoMilisegundos, milisegundos, somaMilisegundos;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        di = moment__WEBPACK_IMPORTED_MODULE_3__(dataInicial).format('YYYY-MM-DD');
                        df = moment__WEBPACK_IMPORTED_MODULE_3__(dataFinal).format('YYYY-MM-DD');
                        duracaoMilisegundos = 0;
                        milisegundos = 0;
                        somaMilisegundos = 0;
                        return [4 /*yield*/, this.horasService.getHorasExtras60porCento(di, df).subscribe(function (dados) {
                                dados.forEach(function (element) {
                                    if (dados.length == 0) {
                                        _this.presentToast('Não possui horas extras realizadas nessa data');
                                    }
                                    if (element.diaSemana > 0) {
                                        var horaFinal = element.horaDataCalculoFinal;
                                        var horaInicial = element.horaDataCalculoInicio;
                                        milisegundos = moment__WEBPACK_IMPORTED_MODULE_3__(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment__WEBPACK_IMPORTED_MODULE_3__(horaInicial, "DD/MM/YYYY HH:mm:ss"));
                                        duracaoMilisegundos = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](milisegundos).asHours();
                                        _this.totalDeHorasExtras += duracaoMilisegundos;
                                        somaMilisegundos += milisegundos;
                                    }
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
    RelatorioDetalhadoPage.prototype.calculototalDeHorasSemFiltro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var duracaoMilisegundos, milisegundos, somaMilisegundos;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        duracaoMilisegundos = 0;
                        milisegundos = 0;
                        somaMilisegundos = 0;
                        return [4 /*yield*/, this.horasService.getHorasExtras60porCentoSemFiltro().subscribe(function (dados) {
                                dados.forEach(function (element) {
                                    if (dados.length == 0) {
                                        _this.presentToast('Não possui horas extras realizadas nessa data');
                                    }
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
    RelatorioDetalhadoPage.prototype.calculototalDeHoras100PorCento = function (dataInicial, dataFinal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var di, df, duracaoMilisegundos, milisegundos, somaMilisegundos;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        di = moment__WEBPACK_IMPORTED_MODULE_3__(dataInicial).format('YYYY-MM-DD');
                        df = moment__WEBPACK_IMPORTED_MODULE_3__(dataFinal).format('YYYY-MM-DD');
                        duracaoMilisegundos = 0;
                        milisegundos = 0;
                        somaMilisegundos = 0;
                        return [4 /*yield*/, this.horasService.getHorasExtras100porCento(di, df).subscribe(function (dados) {
                                dados.forEach(function (element) {
                                    if (dados.length == 0) {
                                        _this.presentToast('Não possui horas extras realizadas nessa data');
                                    }
                                    if (element.diaSemana == 0) {
                                        var horaFinal = element.horaDataCalculoFinal;
                                        var horaInicial = element.horaDataCalculoInicio;
                                        milisegundos = moment__WEBPACK_IMPORTED_MODULE_3__(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment__WEBPACK_IMPORTED_MODULE_3__(horaInicial, "DD/MM/YYYY HH:mm:ss"));
                                        duracaoMilisegundos = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](milisegundos).asHours();
                                        _this.totalDeHorasExtras100PoCento += duracaoMilisegundos;
                                        somaMilisegundos += milisegundos;
                                    }
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
    RelatorioDetalhadoPage.prototype.calculototalDeHoras100PorCentoSemFiltro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var duracaoMilisegundos, milisegundos, somaMilisegundos;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        duracaoMilisegundos = 0;
                        milisegundos = 0;
                        somaMilisegundos = 0;
                        return [4 /*yield*/, this.horasService.getHorasExtras100porCentoSemFiltro().subscribe(function (dados) {
                                dados.forEach(function (element) {
                                    if (dados.length == 0) {
                                        _this.presentToast('Não possui horas extras realizadas nessa data');
                                    }
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
    RelatorioDetalhadoPage.prototype.calculoTotalHorasRealizadas = function (dataInicial, dataFinal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var di, df, duracaoMilisegundos, milisegundos, somaMilisegundos;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        di = moment__WEBPACK_IMPORTED_MODULE_3__(dataInicial).format('YYYY-MM-DD');
                        df = moment__WEBPACK_IMPORTED_MODULE_3__(dataFinal).format('YYYY-MM-DD');
                        duracaoMilisegundos = 0;
                        milisegundos = 0;
                        somaMilisegundos = 0;
                        return [4 /*yield*/, this.horasService.getHorasExtrasTotais(di, df).subscribe(function (dados) {
                                dados.forEach(function (element) {
                                    if (dados.length == 0) {
                                        _this.presentToast('Não possui horas extras realizadas nessa data');
                                    }
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
    RelatorioDetalhadoPage.prototype.calculoTotalHorasRealizadasSemFiltro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var duracaoMilisegundos, milisegundos, somaMilisegundos;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        duracaoMilisegundos = 0;
                        milisegundos = 0;
                        somaMilisegundos = 0;
                        return [4 /*yield*/, this.horasService.getHorasExtrasTotaisSemFiltro().subscribe(function (dados) {
                                dados.forEach(function (element) {
                                    if (dados.length == 0) {
                                        _this.presentToast('Não possui horas extras realizadas nessa data');
                                    }
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
    RelatorioDetalhadoPage.prototype.presentToast = function (mensagem) {
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
    RelatorioDetalhadoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-relatorio-detalhado',
            template: __webpack_require__(/*! ./relatorio-detalhado.page.html */ "./src/app/pages/relatorio-detalhado/relatorio-detalhado.page.html"),
            styles: [__webpack_require__(/*! ./relatorio-detalhado.page.scss */ "./src/app/pages/relatorio-detalhado/relatorio-detalhado.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicos_hora_extra_service__WEBPACK_IMPORTED_MODULE_2__["HoraExtraService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], RelatorioDetalhadoPage);
    return RelatorioDetalhadoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-relatorio-detalhado-relatorio-detalhado-module.js.map