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

module.exports = "<ion-header>\n  <ion-toolbar>\n      <div class=\"header-top\">\n          <ion-icon name=\"arrow-round-back\" button [routerLink]=\"['/registro-hora-extra']\"></ion-icon>\n          <p text-center>RELATÓRIO DE HORAS EXTRAS</p>\n        </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col >\n        <strong>Período/Data</strong>\n      </ion-col>\n      <ion-col class=\"ion-text-center\" >\n        <strong>Total</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor='let h of horasExtras'>\n        <ion-col *ngIf='h.horaFinal == null'>\n            {{h.horaInicial}} - <span class=\"horaPendente\">Hora Pendente</span>\n        </ion-col>\n        <ion-col *ngIf='h.horaFinal != null'>\n          {{h.horaInicial}} - {{h.horaFinal}} <br>\n          <span>{{h.dataInicial}}</span>\n        </ion-col>\n        <ion-col class=\"ion-text-center total\" *ngIf='h.horaFinal != null'>\n          {{h.total}}\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/relatorio-hora-extra/relatorio-hora-extra.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/relatorio-hora-extra/relatorio-hora-extra.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: var(--ion-color-padraoApp);\n  color: white; }\n\nion-row {\n  border-bottom: 1px solid #cecece;\n  color: black;\n  padding: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\nspan {\n  color: gray;\n  font-size: 10pt; }\n\n.total {\n  color: #017401; }\n\n.horaPendente {\n  color: #e92f2f; }\n\n.header-top {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.header-top p {\n    margin-left: 10%; }\n\nion-icon {\n  width: 20px;\n  height: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVsYXRvcmlvLWhvcmEtZXh0cmEvQzpcXFVzZXJzXFxJZ29yXFxEZXNrdG9wXFxJRlNDXFxJRlNDIDIwMTktMlxcVENDIElJXFxUQ0MtSUkgQXBsaWNhdGl2byBIb3JhcyBFeHRyYXNcXFRpbWVpc21vbmV5YXBwL3NyY1xcYXBwXFxwYWdlc1xccmVsYXRvcmlvLWhvcmEtZXh0cmFcXHJlbGF0b3Jpby1ob3JhLWV4dHJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdDQUEyQztFQUMzQyxZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUduQjtFQUNJLGNBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksY0FBdUIsRUFBQTs7QUFHM0I7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBRnZCO0lBSVEsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlbGF0b3Jpby1ob3JhLWV4dHJhL3JlbGF0b3Jpby1ob3JhLWV4dHJhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcGFkcmFvQXBwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXJvd3tcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjA2LCAyMDYsIDIwNik7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxufVxyXG5cclxuLnRvdGFse1xyXG4gICAgY29sb3I6IHJnYigxLCAxMTYsIDEpO1xyXG59XHJcblxyXG4uaG9yYVBlbmRlbnRle1xyXG4gICAgY29sb3I6IHJnYigyMzMsIDQ3LCA0Nyk7XHJcbn1cclxuXHJcbi5oZWFkZXItdG9we1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1pY29ue1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn0iXX0= */"

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





var RelatorioHoraExtraPage = /** @class */ (function () {
    function RelatorioHoraExtraPage(authService, horaService) {
        this.authService = authService;
        this.horaService = horaService;
        this.horasExtras = new Array();
    }
    RelatorioHoraExtraPage.prototype.ngOnInit = function () {
        this.getHoras();
    };
    RelatorioHoraExtraPage.prototype.ngOnDestroy = function () {
        this.horasExtrasSubscription.unsubscribe();
    };
    RelatorioHoraExtraPage.prototype.getHoras = function () {
        var _this = this;
        this.horasExtrasSubscription = this.horaService.getHorasExtras().subscribe(function (dados) {
            dados.forEach(function (element) {
                var horaFinal = element.horaFinal;
                var horaInicial = element.horaInicial;
                var ms = moment__WEBPACK_IMPORTED_MODULE_4__(horaFinal, "HH:mm:ss").diff(moment__WEBPACK_IMPORTED_MODULE_4__(horaInicial, "HH:mm:ss"));
                var d = moment__WEBPACK_IMPORTED_MODULE_4__["duration"](ms);
                var s = Math.floor(d.asHours()) + moment__WEBPACK_IMPORTED_MODULE_4__["utc"](ms).format(":mm:ss");
                element.total = s;
            });
            return _this.horasExtras = dados;
        });
    };
    RelatorioHoraExtraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-relatorio-hora-extra',
            template: __webpack_require__(/*! ./relatorio-hora-extra.page.html */ "./src/app/pages/relatorio-hora-extra/relatorio-hora-extra.page.html"),
            styles: [__webpack_require__(/*! ./relatorio-hora-extra.page.scss */ "./src/app/pages/relatorio-hora-extra/relatorio-hora-extra.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"], src_app_servicos_hora_extra_service__WEBPACK_IMPORTED_MODULE_2__["HoraExtraService"]])
    ], RelatorioHoraExtraPage);
    return RelatorioHoraExtraPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-relatorio-hora-extra-relatorio-hora-extra-module.js.map