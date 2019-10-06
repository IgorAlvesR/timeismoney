(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-teste-data-teste-data-module"],{

/***/ "./src/app/pages/teste-data/teste-data.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/teste-data/teste-data.module.ts ***!
  \*******************************************************/
/*! exports provided: TesteDataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesteDataPageModule", function() { return TesteDataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _teste_data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teste-data.page */ "./src/app/pages/teste-data/teste-data.page.ts");







var routes = [
    {
        path: '',
        component: _teste_data_page__WEBPACK_IMPORTED_MODULE_6__["TesteDataPage"]
    }
];
var TesteDataPageModule = /** @class */ (function () {
    function TesteDataPageModule() {
    }
    TesteDataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_teste_data_page__WEBPACK_IMPORTED_MODULE_6__["TesteDataPage"]]
        })
    ], TesteDataPageModule);
    return TesteDataPageModule;
}());



/***/ }),

/***/ "./src/app/pages/teste-data/teste-data.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/teste-data/teste-data.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>testeData</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-input [(ngModel)]=\"teste.dataInicial\" type=\"date\"></ion-input>\n    <ion-input [(ngModel)]=\"teste.dataFinal\" type=\"date\"></ion-input>\n    <ion-button id=\"botao\" (click)='filtrarData(teste.dataInicial, teste.dataFinal)'>click</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/teste-data/teste-data.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/teste-data/teste-data.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3RlLWRhdGEvdGVzdGUtZGF0YS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/teste-data/teste-data.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/teste-data/teste-data.page.ts ***!
  \*****************************************************/
/*! exports provided: TesteDataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesteDataPage", function() { return TesteDataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicos_hora_extra_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/hora-extra.service */ "./src/app/servicos/hora-extra.service.ts");



var TesteDataPage = /** @class */ (function () {
    function TesteDataPage(horaService) {
        this.horaService = horaService;
        this.teste = {};
    }
    TesteDataPage.prototype.ngOnInit = function () {
    };
    TesteDataPage.prototype.filtrarData = function (dataInicio, dataFinal) {
        var result = this.horaService.filtrarDatas(dataInicio, dataFinal);
        result.subscribe(function (r) {
            console.log(r);
        });
    };
    TesteDataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teste-data',
            template: __webpack_require__(/*! ./teste-data.page.html */ "./src/app/pages/teste-data/teste-data.page.html"),
            styles: [__webpack_require__(/*! ./teste-data.page.scss */ "./src/app/pages/teste-data/teste-data.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicos_hora_extra_service__WEBPACK_IMPORTED_MODULE_2__["HoraExtraService"]])
    ], TesteDataPage);
    return TesteDataPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-teste-data-teste-data-module.js.map