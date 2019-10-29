(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configuracao-configuracao-module"],{

/***/ "./src/app/pages/configuracao/configuracao.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/configuracao/configuracao.module.ts ***!
  \***********************************************************/
/*! exports provided: ConfiguracaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracaoPageModule", function() { return ConfiguracaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuracao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuracao.page */ "./src/app/pages/configuracao/configuracao.page.ts");







var routes = [
    {
        path: '',
        component: _configuracao_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracaoPage"]
    }
];
var ConfiguracaoPageModule = /** @class */ (function () {
    function ConfiguracaoPageModule() {
    }
    ConfiguracaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_configuracao_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracaoPage"]]
        })
    ], ConfiguracaoPageModule);
    return ConfiguracaoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/configuracao/configuracao.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/configuracao/configuracao.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <div class=\"header-top\">\n      <ion-icon name=\"arrow-round-back\" button [routerLink]=\"['/registro-hora-extra']\"></ion-icon>\n      <p text-center>CONFIGURAÇÕES</p>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id='salario'>\n    <label for=\"\">Alterar Salário: </label>\n    <ion-input [(ngModel)]=\"salario\" type='number' placeholder='R$'></ion-input>\n    <ion-button  (click)='alterarSalario()' color=\"success\" expand='block'  #botao>  <ion-icon name='md-checkmark'></ion-icon>  </ion-button>\n  </div>\n \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/configuracao/configuracao.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/configuracao/configuracao.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: var(--ion-color-padraoApp);\n  color: white; }\n\n.header-top {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.header-top p {\n    margin-left: 15%; }\n\nion-icon {\n  width: 25px;\n  height: 25px;\n  margin-left: 5px; }\n\nion-input {\n  --padding-start: 20px;\n  border: 2px solid var(--ion-color-padraoApp);\n  border-radius: 10px; }\n\nion-item {\n  padding-bottom: 15px;\n  padding-top: 15px; }\n\nlabel {\n  padding-right: 5px;\n  color: gray; }\n\n#salario {\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center; }\n\nion-button {\n  margin-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZmlndXJhY2FvL0M6XFxVc2Vyc1xcSWdvclxcRGVza3RvcFxcSUZTQ1xcSUZTQyAyMDE5LTJcXFRDQyBJSVxcVENDLUlJIEFwbGljYXRpdm8gSG9yYXMgRXh0cmFzXFxUaW1laXNtb25leWFwcC9zcmNcXGFwcFxccGFnZXNcXGNvbmZpZ3VyYWNhb1xcY29uZmlndXJhY2FvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFGdkI7SUFJUSxnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHFCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0ksb0JBQW9CO0VBQ3BCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxhQUFhO0VBQ2Isb0JBQWE7RUFBYixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNhby9jb25maWd1cmFjYW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wYWRyYW9BcHApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLXRvcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24taWNvbntcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXBhZHJhb0FwcCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG5sYWJlbHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4jc2FsYXJpb3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/configuracao/configuracao.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/configuracao/configuracao.page.ts ***!
  \*********************************************************/
/*! exports provided: ConfiguracaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracaoPage", function() { return ConfiguracaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ConfiguracaoPage = /** @class */ (function () {
    function ConfiguracaoPage(authService, toastCtrl) {
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.salario = 0;
        this.funcionario = {};
    }
    ConfiguracaoPage.prototype.ngOnInit = function () {
    };
    ConfiguracaoPage.prototype.alterarSalario = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.salario > 0)) return [3 /*break*/, 4];
                        _a = this.funcionario;
                        return [4 /*yield*/, Number(this.salario)];
                    case 1:
                        _a.salarioBruto = _b.sent();
                        return [4 /*yield*/, this.authService.update(this.funcionario)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.presentToast('Salário base atualizado com sucesso...')];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.presentToast("O valor deve ser maior que zero! ");
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ConfiguracaoPage.prototype.presentToast = function (mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({ message: mensagem, duration: 1000 })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfiguracaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuracao',
            template: __webpack_require__(/*! ./configuracao.page.html */ "./src/app/pages/configuracao/configuracao.page.html"),
            styles: [__webpack_require__(/*! ./configuracao.page.scss */ "./src/app/pages/configuracao/configuracao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], ConfiguracaoPage);
    return ConfiguracaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-configuracao-configuracao-module.js.map