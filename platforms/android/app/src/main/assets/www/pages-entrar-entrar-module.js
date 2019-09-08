(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-entrar-entrar-module"],{

/***/ "./src/app/pages/entrar/entrar.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/entrar/entrar.module.ts ***!
  \***********************************************/
/*! exports provided: EntrarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrarPageModule", function() { return EntrarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _entrar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entrar.page */ "./src/app/pages/entrar/entrar.page.ts");







var routes = [
    {
        path: '',
        component: _entrar_page__WEBPACK_IMPORTED_MODULE_6__["EntrarPage"]
    }
];
var EntrarPageModule = /** @class */ (function () {
    function EntrarPageModule() {
    }
    EntrarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_entrar_page__WEBPACK_IMPORTED_MODULE_6__["EntrarPage"]]
        })
    ], EntrarPageModule);
    return EntrarPageModule;
}());



/***/ }),

/***/ "./src/app/pages/entrar/entrar.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/entrar/entrar.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-margin-bottom\" id=\"conteudo\">\n  <div class=\"ion-text-center logo\">\n    <img src=\"../../../assets/imagens/logoInicial.svg\">\n  </div>\n\n  <div class=\"ion-text-center\">\n    <h6 >Faça seu login</h6>\n    <ion-input class=\"inputLogin ion-padding\"  type=\"text\" placeholder=\"Email\" [(ngModel)]=\"funcionario.email\"></ion-input>\n    <ion-input class=\"inputLogin ion-padding\" type=\"password\" placeholder=\"Senha\" [(ngModel)]=\"funcionario.senha\"></ion-input>\n    <ion-input class=\"inputLoginSubmit\" type=\"submit\" value=\"Entrar\" (click)=\"login()\" [hidden]=\"keyboard.isVisible\"></ion-input>\n    <h6>Esqueceu sua senha?</h6>\n  </div>\n\n  <div class=\"ion-text-center \" id=\"divCadastro\" [hidden]=\"keyboard.isVisible\">\n    <h6>Não perca mais dinheiro!</h6>\n    <p class=\"cadastrar\" button [routerLink]=\"['/cadastro-usuario']\"><i>Cadastre-se agora</i></p>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/entrar/entrar.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/entrar/entrar.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url('superior.svg') no-repeat top / 100% ,url('inferior.svg') no-repeat bottom / 100%; }\n\n.logo {\n  margin-top: 20%; }\n\n.inputLogin {\n  border: 2px solid #4F9AF5;\n  border-radius: 30px;\n  width: 60%;\n  margin: 5px auto;\n  text-align: left;\n  height: 35px; }\n\n.inputLoginSubmit {\n  background-color: #4F9AF5;\n  border-radius: 30px;\n  width: 60%;\n  margin: 5px auto;\n  color: white; }\n\nh6 {\n  color: #4F9AF5; }\n\n.cadastrar {\n  padding: 7px;\n  border-radius: 20px;\n  color: var(--ion-color-padraoApp);\n  border: 2px solid #4F9AF5;\n  width: 50%;\n  margin: 5px auto; }\n\n#divCadastro {\n  margin-top: 15%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW50cmFyL0M6XFxVc2Vyc1xcSWdvclxcRGVza3RvcFxcSUZTQ1xcSUZTQyAyMDE5LTJcXFRDQyBJSVxcVENDLUlJIEFwbGljYXRpdm8gSG9yYXMgRXh0cmFzXFxUaW1lSXNNb25leUFwcC9zcmNcXGFwcFxccGFnZXNcXGVudHJhclxcZW50cmFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1HQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZW50cmFyL2VudHJhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2Vucy9zdXBlcmlvci5zdmcnKSBuby1yZXBlYXQgdG9wIC8gMTAwJSAsdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2Vucy9pbmZlcmlvci5zdmcnKSBuby1yZXBlYXQgYm90dG9tIC8gMTAwJTtcclxufVxyXG5cclxuLmxvZ297XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7IFxyXG59XHJcblxyXG4uaW5wdXRMb2dpbntcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0RjlBRjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4uaW5wdXRMb2dpblN1Ym1pdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RjlBRjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmg2e1xyXG4gICAgY29sb3I6ICM0RjlBRjU7XHJcbn1cclxuXHJcbi5jYWRhc3RyYXJ7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wYWRyYW9BcHApO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzRGOUFGNTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG59XHJcblxyXG4jZGl2Q2FkYXN0cm97XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/entrar/entrar.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/entrar/entrar.page.ts ***!
  \*********************************************/
/*! exports provided: EntrarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrarPage", function() { return EntrarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");






var EntrarPage = /** @class */ (function () {
    function EntrarPage(rota, servicoAutenticacao, loadingCtrl, toastCtrl, keyboard) {
        this.rota = rota;
        this.servicoAutenticacao = servicoAutenticacao;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.keyboard = keyboard;
        this.funcionario = {};
    }
    EntrarPage.prototype.ngOnInit = function () {
        if (this.keyboard.isVisible) {
            var content = document.getElementById('conteudo');
            content.style.backgroundColor = 'white';
        }
    };
    EntrarPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_1, mensagem;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        return [4 /*yield*/, this.servicoAutenticacao.login(this.funcionario)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _a.sent();
                        mensagem = void 0;
                        switch (error_1.code) {
                            case 'auth/user-not-found':
                                mensagem = 'Usuário não encontrado!';
                                break;
                            case 'auth/invalid-email':
                                mensagem = 'Email inválido!';
                                break;
                            case 'auth/argument-error':
                                mensagem = 'Prencha todos os campos corretamente!';
                                break;
                        }
                        this.presentToast(mensagem);
                        return [3 /*break*/, 6];
                    case 5:
                        this.carregando.dismiss();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EntrarPage.prototype.presentLoading = function () {
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
    EntrarPage.prototype.presentToast = function (mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({ message: mensagem, duration: 2000 })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EntrarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-entrar',
            template: __webpack_require__(/*! ./entrar.page.html */ "./src/app/pages/entrar/entrar.page.html"),
            styles: [__webpack_require__(/*! ./entrar.page.scss */ "./src/app/pages/entrar/entrar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"]])
    ], EntrarPage);
    return EntrarPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-entrar-entrar-module.js.map