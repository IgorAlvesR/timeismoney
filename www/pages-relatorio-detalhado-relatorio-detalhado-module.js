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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <div class=\"header-top\">\n      <ion-icon id=\"back\" name=\"arrow-round-back\" button [routerLink]=\"['/registro-hora-extra']\"></ion-icon>\n      <p text-center>RELATÓRIO DETALHADO</p>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <h1 id=\"nome\" class=\"ion-text-center\">{{nomeFuncionario}} </h1> \n  \n  <p id=\"funcao\" class=\"ion-text-center\">{{funcao}}</p>\n  <p id=\"salarioBaseTexto\" class=\"ion-text-center\">{{salarioFunc | currency:'BRL'}}</p>\n\n  <div id=\"filtroData\">\n    <ion-datetime class='data' done-text='OK' cancelText='Cancelar' displayFormat=\"DD/MM/YY\" placeholder='dd/mm/aaaa'\n      [(ngModel)]=\"dataInicial\"></ion-datetime>\n    <ion-datetime class='data' done-text='OK' cancelText='Cancelar' displayFormat=\"DD/MM/YY\" placeholder='dd/mm/aaaa'\n      [(ngModel)]=\"dataFinal\" (ionBlur)='calculaValoresHorasExtras(dataInicial,dataFinal)'>\n    </ion-datetime>\n  </div>\n  <div id=\"filtroDataDescricao\">\n    <label for=\"\">Data Início</label>\n    <label for=\"\">Data Fim</label>\n  </div>\n\n\n  <ion-grid>\n    <div id=\"quantidadeHoras\">\n      <ion-row>\n        <ion-col>\n          <ion-icon name=\"time\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"time\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"time\"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col><span class=\"descricao\">60%</span></ion-col>\n        <ion-col><span class=\"descricao\">100%</span></ion-col>\n        <ion-col><span class=\"descricao\">Total</span></ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col *ngIf='totalDeHorasExtrasEmHoras == 0'><span class=\"horas60\"></span></ion-col>\n        <ion-col *ngIf='totalDeHorasExtrasEmHoras > 0'><span class=\"horas60\">{{horaFormatada}}</span></ion-col>\n        <ion-col *ngIf='totalDeHorasExtras100PoCento == 0'><span class=\"horas100\"></span></ion-col>\n        <ion-col *ngIf='totalDeHorasExtras100PoCento > 0'><span class=\"horas100\">{{horas100PorcentoFormatada}}</span></ion-col>\n        <ion-col *ngIf='totalDeHorasExtrasRealizadas > 0' ><span id=\"total\">{{totalDeHorasRealizadasFormatadas}}</span></ion-col>\n        <ion-col *ngIf='totalDeHorasExtrasRealizadas == 0' ><span id=\"total\"></span></ion-col>\n      </ion-row>\n    </div>\n\n  </ion-grid>\n  \n  <div id=\"totalHoras\">\n    <h4>Total</h4>\n    <h1 id='totalHorasValor'>{{valorEmReaisDeTodasHorasRealizadas | currency:'BRL'}}</h1>\n  </div>\n\n  \n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/relatorio-detalhado/relatorio-detalhado.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/relatorio-detalhado/relatorio-detalhado.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #0d0579;\n  color: white; }\n  ion-toolbar .header-top {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n  ion-toolbar .header-top p {\n      margin-left: 10%; }\n  #back {\n  width: 25px;\n  height: 25px;\n  margin-left: 5px; }\n  ion-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-icon {\n  width: 35px;\n  height: 35px;\n  padding: 0px 15px;\n  color: white; }\n  span {\n  padding: 0px 8px;\n  color: white; }\n  .descricao {\n  padding: 0px 15px;\n  color: #bdb6b6;\n  font-size: 13pt; }\n  #quantidadeHoras {\n  margin-top: 5%;\n  margin-bottom: 10%; }\n  #cash {\n  color: #006200; }\n  ion-col {\n  padding: 0px 15px; }\n  h1 {\n  color: white; }\n  #nome {\n  color: white; }\n  #funcao {\n  color: white; }\n  #totalHoras {\n  text-align: center;\n  width: 50%;\n  height: 30%;\n  border: 5px solid #4BE25A;\n  border-radius: 100%;\n  margin: 0 auto;\n  padding-top: 10px; }\n  ion-content {\n  --background: linear-gradient(to bottom, #0d0579, #64aaca 130%); }\n  h4 {\n  color: white; }\n  .horas60 {\n  color: #FBB52F; }\n  .horas100 {\n  color: #00F0FF; }\n  #total {\n  color: #4BE25A; }\n  #filtroData {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around; }\n  .data {\n  border-bottom: 2px solid var(--ion-color-padraoApp);\n  color: gray;\n  padding-bottom: 5px;\n  width: 40%;\n  text-align: center; }\n  .buscarData {\n  margin: 5px;\n  padding: 5px;\n  color: green;\n  width: 35px;\n  height: 35px; }\n  .dataValor {\n  padding-left: 5px; }\n  label {\n  color: gray;\n  padding-right: 0px;\n  font-size: 10pt; }\n  #filtroDataDescricao {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 20px; }\n  #atualizarSalario {\n  color: green;\n  margin: 0 auto; }\n  #salarioBaseTexto {\n  color: white;\n  text-align: center;\n  margin-bottom: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVsYXRvcmlvLWRldGFsaGFkby9DOlxcVXNlcnNcXElnb3JcXERlc2t0b3BcXElGU0NcXElGU0MgMjAxOS0yXFxUQ0MgSUlcXFRDQy1JSSBBcGxpY2F0aXZvIEhvcmFzIEV4dHJhc1xcVGltZWlzbW9uZXlhcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWxhdG9yaW8tZGV0YWxoYWRvXFxyZWxhdG9yaW8tZGV0YWxoYWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhO0VBQ2IsWUFBWSxFQUFBO0VBRmhCO0lBS1Esb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBTjNCO01BUVksZ0JBQWdCLEVBQUE7RUFLNUI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0VBRzNCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWSxFQUFBO0VBR2hCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVcsRUFBQTtFQUdmO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQXlCO0VBQ3pCLGVBQWUsRUFBQTtFQUduQjtFQUNJLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLGNBQW9CLEVBQUE7RUFHeEI7RUFDSSxpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLFlBQVksRUFBQTtFQUVoQjtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQixFQUFBO0VBR3JCO0VBQ0ksK0RBQWEsRUFBQTtFQUdqQjtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLGNBQWMsRUFBQTtFQUdsQjtFQUNJLGNBQWMsRUFBQTtFQUdsQjtFQUNJLGNBQWMsRUFBQTtFQUdsQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDZCQUE2QixFQUFBO0VBR2pDO0VBQ0ksbURBQW9EO0VBQ3BELFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTtFQUdoQjtFQUNJLGlCQUFpQixFQUFBO0VBRXJCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7RUFHbkI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CLEVBQUE7RUFHdkI7RUFDSSxZQUFZO0VBQ1osY0FBYyxFQUFBO0VBS2xCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlbGF0b3Jpby1kZXRhbGhhZG8vcmVsYXRvcmlvLWRldGFsaGFkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzBkMDU3OTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAuaGVhZGVyLXRvcHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNiYWNre1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5pb24tcm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pb24taWNvbntcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5kZXNjcmljYW97XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIGNvbG9yOiByZ2IoMTg5LCAxODIsIDE4Mik7XHJcbiAgICBmb250LXNpemU6IDEzcHQ7XHJcbn1cclxuXHJcbiNxdWFudGlkYWRlSG9yYXN7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG5cclxuI2Nhc2h7XHJcbiAgICBjb2xvcjogcmdiKDAsIDk4LCAwKTtcclxufVxyXG5cclxuaW9uLWNvbHtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG59XHJcblxyXG5oMXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI25vbWV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI2Z1bmNhb3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3RvdGFsSG9yYXN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjNEJFMjVBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMGQwNTc5LCAjNjRhYWNhIDEzMCUpO1xyXG59XHJcblxyXG5oNHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhvcmFzNjB7XHJcbiAgICBjb2xvcjogI0ZCQjUyRjtcclxufVxyXG5cclxuLmhvcmFzMTAwe1xyXG4gICAgY29sb3I6ICMwMEYwRkY7XHJcbn1cclxuXHJcbiN0b3RhbHtcclxuICAgIGNvbG9yOiAjNEJFMjVBO1xyXG59XHJcblxyXG4jZmlsdHJvRGF0YXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmRhdGF7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIHZhcigtLWlvbi1jb2xvci1wYWRyYW9BcHApO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1c2NhckRhdGF7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4uZGF0YVZhbG9ye1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxubGFiZWx7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxufVxyXG5cclxuI2ZpbHRyb0RhdGFEZXNjcmljYW97XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4jYXR1YWxpemFyU2FsYXJpb3tcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcbiNzYWxhcmlvQmFzZVRleHRve1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG5cclxuIl19 */"

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
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");






var RelatorioDetalhadoPage = /** @class */ (function () {
    function RelatorioDetalhadoPage(horasService, toastController, alertController, authService, route, loadingCtrl) {
        this.horasService = horasService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.authService = authService;
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.totalDeHorasExtras = 0;
        this.salarioFunc = 0;
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
        this.adicionalNoturno = 0;
        this.funcionario = {};
        this.valorAdicionalNoturno = 0;
        this.adicionalNoturnoNulo = 0;
        this.status = false;
        this.statusNulo = false;
    }
    RelatorioDetalhadoPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 4, , 5]);
                        _a = this;
                        return [4 /*yield*/, moment__WEBPACK_IMPORTED_MODULE_3__().subtract(30, 'days').format("YYYY-MM-26")];
                    case 1:
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
                        console.log(e_1.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 4, , 5]);
                        _a = this;
                        return [4 /*yield*/, moment__WEBPACK_IMPORTED_MODULE_3__().subtract(30, 'days').format("YYYY-MM-26")];
                    case 1:
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
                        e_2 = _c.sent();
                        console.log(e_2.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.ngOnDestroy = function () {
        this.zera();
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
        this.funcionario = {};
        this.adicionalNoturno = 0;
        this.valorAdicionalNoturno = 0;
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
                        return [4 /*yield*/, this.calculoAdicionalNoturno(di, df)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.calculototalDeHoras(di, df)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.calculototalDeHoras100PorCento(di, df)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.calculoValorTotalHorasExtras60PorCento(di, df)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.calculoValorTotalHorasExtras100PorCento(di, df)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.calculoTotalHorasRealizadas(di, df)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.calculoValorTotalHorasRealizadas()];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.calculoAdicionalNoturno = function (dataInicial, dataFinal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var di, df, milisegundos, duracaoMilisegundos, resultHoras;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, moment__WEBPACK_IMPORTED_MODULE_3__(dataInicial).format('YYYY-MM-DD')];
                    case 1:
                        di = _a.sent();
                        return [4 /*yield*/, moment__WEBPACK_IMPORTED_MODULE_3__(dataFinal).format('YYYY-MM-DD')];
                    case 2:
                        df = _a.sent();
                        milisegundos = 0;
                        duracaoMilisegundos = 0;
                        return [4 /*yield*/, this.horasService.getHorasExtras(di, df)];
                    case 3:
                        resultHoras = _a.sent();
                        return [4 /*yield*/, resultHoras.subscribe(function (result) {
                                result.forEach(function (element) {
                                    if (element.horaCalculoInicial >= 22 && element.horaCalculoFinal <= 5) {
                                        var horaFinal = element.horaDataCalculoFinal;
                                        var horaInicial = element.horaDataCalculoInicio;
                                        milisegundos = moment__WEBPACK_IMPORTED_MODULE_3__(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment__WEBPACK_IMPORTED_MODULE_3__(horaInicial, "DD/MM/YYYY HH:mm:ss"));
                                        duracaoMilisegundos = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](milisegundos).asHours();
                                        _this.valorAdicionalNoturno = duracaoMilisegundos;
                                        _this.adicionalNoturno = (_this.salarioFunc / 220) * 1.6 * 0.20;
                                        _this.status = true;
                                    }
                                    if (element.horaCalculoInicial <= 22 && element.horaCalculoFinal >= 5) {
                                        _this.statusNulo = true;
                                    }
                                });
                                return _this.adicionalNoturno * _this.valorAdicionalNoturno;
                            })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.calculoValorTotalHorasExtras60PorCento = function (dataInicial, dataFinal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resultadoAdicionalNoturno, resultadoAdicionalNoturnoNulo, resultFuncionario;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getQuantidadeHorasExtrasEmHoras(dataInicial, dataFinal)];
                    case 1:
                        _a.sent();
                        resultadoAdicionalNoturno = 0;
                        resultadoAdicionalNoturnoNulo = 0;
                        return [4 /*yield*/, this.horasService.buscarFuncionario()];
                    case 2:
                        resultFuncionario = _a.sent();
                        return [4 /*yield*/, resultFuncionario.subscribe(function (result) {
                                if (_this.status) {
                                    resultadoAdicionalNoturno = _this.adicionalNoturno * _this.valorAdicionalNoturno;
                                }
                                if (_this.statusNulo) {
                                    resultadoAdicionalNoturnoNulo = ((result[0].salarioBruto / 220) * 1.6) * _this.totalDeHorasExtrasEmHoras;
                                }
                                return _this.valorEmReais = resultadoAdicionalNoturno + resultadoAdicionalNoturnoNulo;
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
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
                        return [4 /*yield*/, resultFuncionario.subscribe(function (result) {
                                _this.salarioFunc = result[0].salarioBruto;
                                _this.funcao = result[0].funcao;
                                _this.nomeFuncionario = result[0].nome;
                                _this.valorHora100PorCentoEmReais = ((result[0].salarioBruto / 220) * 2 + _this.adicionalNoturno) * _this.totalDeHorasExtras100PorCentoEmHoras;
                            })];
                    case 3:
                        _a.sent();
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
                    case 0: return [4 /*yield*/, moment__WEBPACK_IMPORTED_MODULE_3__(dataInicial).format('YYYY-MM-DD')];
                    case 1:
                        di = _a.sent();
                        return [4 /*yield*/, moment__WEBPACK_IMPORTED_MODULE_3__(dataFinal).format('YYYY-MM-DD')];
                    case 2:
                        df = _a.sent();
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
                                return _this.horaFormatada = Math.floor(_this.totalDeHorasExtras) + moment__WEBPACK_IMPORTED_MODULE_3__["utc"](somaMilisegundos).format(":mm:ss");
                            })];
                    case 3:
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
                                _this.horas100PorcentoFormatada = Math.floor(_this.totalDeHorasExtras100PoCento) + moment__WEBPACK_IMPORTED_MODULE_3__["utc"](somaMilisegundos).format(":mm:ss");
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
                                _this.totalDeHorasRealizadasFormatadas = Math.floor(_this.totalDeHorasExtrasRealizadas) + moment__WEBPACK_IMPORTED_MODULE_3__["utc"](somaMilisegundos).format(":mm:ss");
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatorioDetalhadoPage.prototype.presentLoading = function () {
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
    RelatorioDetalhadoPage.prototype.presentToast = function (mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({ message: mensagem, duration: 2000 })];
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicos_hora_extra_service__WEBPACK_IMPORTED_MODULE_2__["HoraExtraService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], RelatorioDetalhadoPage);
    return RelatorioDetalhadoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-relatorio-detalhado-relatorio-detalhado-module.js.map