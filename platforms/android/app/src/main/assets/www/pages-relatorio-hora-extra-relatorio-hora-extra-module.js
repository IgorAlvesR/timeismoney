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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <div class=\"header-top\">\n      <ion-icon name=\"arrow-round-back\" button [routerLink]=\"['/registro-hora-extra']\"></ion-icon>\n      <p text-center>RELATÓRIO DE HORAS EXTRAS</p>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div id=\"filtroData\">\n    <ion-datetime class='data' done-text='OK' cancelText='Cancelar' displayFormat=\"DD/MM/YY\" placeholder='dd/mm/aaaa'\n      [(ngModel)]=\"dataInicial\"></ion-datetime>\n    <ion-datetime class='data' done-text='OK' cancelText='Cancelar' displayFormat=\"DD/MM/YY\" placeholder='dd/mm/aaaa'\n      [(ngModel)]=\"dataFinal\" (ionBlur)='getHoras(dataInicial,dataFinal)'></ion-datetime>\n  </div>\n  <div id=\"filtroDataDescricao\">\n    <label for=\"\">Data Início</label>\n    <label for=\"\">Data Fim</label>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='6'>\n        <strong>Período/Data</strong>\n      </ion-col>\n      <ion-col size='4' class=\"ion-text-center\">\n        <strong>Total</strong>\n      </ion-col>\n      <ion-col size=\"2\">\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor='let h of horasExtras'>\n      <ion-col *ngIf='h.horaFinal == null'>\n        {{h.horaInicial}} - <span class=\"horaPendente\">Hora Pendente</span>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf='h.horaFinal != \"\"' (click)='mostrarDescricaoCidade(h.descricao,h.localizacao)'>\n        {{h.horaInicial}} - {{h.horaFinal}} <br>\n        <span>{{h.dataInicial | date: 'dd/MM/y'}}</span>\n      </ion-col>\n      <ion-col *ngIf='h.horaFinal == \"\"'>\n        {{h.horaInicial}} - <span class=\"horaPendente\">PENDENTE</span> <br>\n        <span>{{h.dataInicial | date: 'dd/MM/y'}}</span>\n      </ion-col>\n\n      <ion-col size=\"4\" class=\"ion-text-center total\" *ngIf='h.horaFinal != \"\"'>\n        {{h.total}}\n      </ion-col>\n      <ion-col size=\"2\" *ngIf='h.horaFinal != \"\"'>\n        <ion-icon class=\"delete\" name='trash' (click)=\"deleteConfirm(h.id)\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/relatorio-hora-extra/relatorio-hora-extra.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/relatorio-hora-extra/relatorio-hora-extra.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: var(--ion-color-padraoApp);\n  color: white; }\n\nion-row {\n  border-bottom: 1px solid #cecece;\n  color: black;\n  padding: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\nspan {\n  color: gray;\n  font-size: 10pt; }\n\n.total {\n  color: #017401; }\n\n.horaPendente {\n  color: #af0d0d; }\n\n.header-top {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.header-top p {\n    margin-left: 10%; }\n\nion-icon {\n  width: 25px;\n  height: 25px;\n  margin-left: 5px; }\n\n.delete {\n  width: 25px;\n  height: 25px;\n  color: #af0d0d; }\n\nion-col {\n  color: gray; }\n\n#filtroData {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around; }\n\n#filtroDataDescricao {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 20px; }\n\n.data {\n  /* width: 10%;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    border-bottom: 2px solid  var(--ion-color-padraoApp);\r\n    color: gray; */\n  border-bottom: 2px solid var(--ion-color-padraoApp);\n  color: gray;\n  padding-bottom: 5px;\n  width: 40%; }\n\nlabel {\n  color: gray;\n  padding-right: 0px;\n  font-size: 10pt; }\n\n.buscarData {\n  margin: 5px;\n  padding: 5px;\n  color: green;\n  width: 35px;\n  height: 35px; }\n\n.dataValor {\n  padding-left: 5px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVsYXRvcmlvLWhvcmEtZXh0cmEvQzpcXFVzZXJzXFxJZ29yXFxEZXNrdG9wXFxJRlNDXFxJRlNDIDIwMTktMlxcVENDIElJXFxUQ0MtSUkgQXBsaWNhdGl2byBIb3JhcyBFeHRyYXNcXFRpbWVpc21vbmV5YXBwL3NyY1xcYXBwXFxwYWdlc1xccmVsYXRvcmlvLWhvcmEtZXh0cmFcXHJlbGF0b3Jpby1ob3JhLWV4dHJhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVsYXRvcmlvLWhvcmEtZXh0cmEvcmVsYXRvcmlvLWhvcmEtZXh0cmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZ0NBQTJDO0VBQzNDLFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFxQixFQUFBOztBQUd6QjtFQUNJLGNBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUZ2QjtJQUlRLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixjQUF1QixFQUFBOztBQUczQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSTs7OztrQkNSYztFRGNkLG1EQUFvRDtFQUNwRCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWxhdG9yaW8taG9yYS1leHRyYS9yZWxhdG9yaW8taG9yYS1leHRyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXBhZHJhb0FwcCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1yb3d7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIwNiwgMjA2LCAyMDYpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuc3BhbntcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4udG90YWx7XHJcbiAgICBjb2xvcjogcmdiKDEsIDExNiwgMSk7XHJcbn1cclxuXHJcbi5ob3JhUGVuZGVudGV7XHJcbiAgICBjb2xvcjogcmdiKDE3NSwgMTMsIDEzKTtcclxufVxyXG5cclxuLmhlYWRlci10b3B7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5kZWxldGV7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGNvbG9yOiByZ2IoMTc1LCAxMywgMTMpO1xyXG59XHJcblxyXG5pb24tY29se1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbiNmaWx0cm9EYXRhe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4jZmlsdHJvRGF0YURlc2NyaWNhb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5kYXRhe1xyXG4gICAgLyogd2lkdGg6IDEwJTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICB2YXIoLS1pb24tY29sb3ItcGFkcmFvQXBwKTtcclxuICAgIGNvbG9yOiBncmF5OyAqL1xyXG5cclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgdmFyKC0taW9uLWNvbG9yLXBhZHJhb0FwcCk7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG5sYWJlbHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4uYnVzY2FyRGF0YXtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5kYXRhVmFsb3J7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wYWRyYW9BcHApO1xuICBjb2xvcjogd2hpdGU7IH1cblxuaW9uLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2VjZWNlO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuc3BhbiB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEwcHQ7IH1cblxuLnRvdGFsIHtcbiAgY29sb3I6ICMwMTc0MDE7IH1cblxuLmhvcmFQZW5kZW50ZSB7XG4gIGNvbG9yOiAjYWYwZDBkOyB9XG5cbi5oZWFkZXItdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuaGVhZGVyLXRvcCBwIHtcbiAgICBtYXJnaW4tbGVmdDogMTAlOyB9XG5cbmlvbi1pY29uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDsgfVxuXG4uZGVsZXRlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgY29sb3I6ICNhZjBkMGQ7IH1cblxuaW9uLWNvbCB7XG4gIGNvbG9yOiBncmF5OyB9XG5cbiNmaWx0cm9EYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cblxuI2ZpbHRyb0RhdGFEZXNjcmljYW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuXG4uZGF0YSB7XG4gIC8qIHdpZHRoOiAxMCU7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgdmFyKC0taW9uLWNvbG9yLXBhZHJhb0FwcCk7XHJcbiAgICBjb2xvcjogZ3JheTsgKi9cbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wYWRyYW9BcHApO1xuICBjb2xvcjogZ3JheTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgd2lkdGg6IDQwJTsgfVxuXG5sYWJlbCB7XG4gIGNvbG9yOiBncmF5O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTBwdDsgfVxuXG4uYnVzY2FyRGF0YSB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiBncmVlbjtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDsgfVxuXG4uZGF0YVZhbG9yIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7IH1cbiJdfQ== */"

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
        this.dataInicial = '';
        this.dataFinal = '';
    }
    RelatorioHoraExtraPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getHorasExtras()];
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
                        return [4 /*yield*/, this.getHoras(this.dataInicial, this.dataFinal)];
                    case 4:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatorioHoraExtraPage.prototype.ngOnDestroy = function () {
        if (this.horasExtrasSubscription) {
            this.horasExtrasSubscription.unsubscribe();
        }
    };
    RelatorioHoraExtraPage.prototype.getHoras = function (dataInicial, dataFinal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var di, df, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        di = moment__WEBPACK_IMPORTED_MODULE_4__(dataInicial).format('YYYY-MM-DD');
                        df = moment__WEBPACK_IMPORTED_MODULE_4__(dataFinal).format('YYYY-MM-DD');
                        _a = this;
                        return [4 /*yield*/, this.horaService.getHorasExtras(di, df).subscribe(function (dados) {
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
                    case 1:
                        _a.horasExtrasSubscription = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatorioHoraExtraPage.prototype.getHorasExtras = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.horaService.getHoras().subscribe(function (dados) {
                                dados.forEach(function (element) {
                                    var horaFinal = element.horaDataCalculoFinal;
                                    var horaInicial = element.horaDataCalculoInicio;
                                    var ms = moment__WEBPACK_IMPORTED_MODULE_4__(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment__WEBPACK_IMPORTED_MODULE_4__(horaInicial, "DD/MM/YYYY HH:mm:ss"));
                                    var d = moment__WEBPACK_IMPORTED_MODULE_4__["duration"](ms);
                                    var s = Math.floor(d.asHours()) + moment__WEBPACK_IMPORTED_MODULE_4__["utc"](ms).format(":mm:ss");
                                    element.total = s;
                                });
                                return _this.horasExtras = dados;
                            })];
                    case 1:
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