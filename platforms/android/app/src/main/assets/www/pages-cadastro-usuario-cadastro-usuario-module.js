(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-usuario-cadastro-usuario-module"],{

/***/ "./src/app/pages/cadastro-usuario/cadastro-usuario.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/cadastro-usuario/cadastro-usuario.module.ts ***!
  \*******************************************************************/
/*! exports provided: CadastroUsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroUsuarioPageModule", function() { return CadastroUsuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastro_usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro-usuario.page */ "./src/app/pages/cadastro-usuario/cadastro-usuario.page.ts");







var routes = [
    {
        path: '',
        component: _cadastro_usuario_page__WEBPACK_IMPORTED_MODULE_6__["CadastroUsuarioPage"]
    }
];
var CadastroUsuarioPageModule = /** @class */ (function () {
    function CadastroUsuarioPageModule() {
    }
    CadastroUsuarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cadastro_usuario_page__WEBPACK_IMPORTED_MODULE_6__["CadastroUsuarioPage"]]
        })
    ], CadastroUsuarioPageModule);
    return CadastroUsuarioPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cadastro-usuario/cadastro-usuario.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/cadastro-usuario/cadastro-usuario.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"conteudo ion-margin-bottom\" id=\"conteudo\" >\n  <ion-icon name=\"arrow-round-back\" button [routerLink]=\"['/entrar']\"></ion-icon>\n  <div class=\"ion-text-center logo\" [hidden]=\"keyboard.isVisible\">\n    <img src=\"../../../assets/imagens/logoInicial.svg\">\n  </div>\n  <div class=\"ion-text-center cadastro\">\n    <h6>Faça seu cadastro</h6>\n    <ion-input class=\"inputLogin ion-padding\" type=\"text\" placeholder=\"Nome\"  [(ngModel)]=\"funcionario.nome\"></ion-input>\n    <ion-input class=\"inputLogin ion-padding\" type=\"text\" placeholder=\"Função\"  [(ngModel)]=\"funcionario.funcao\"></ion-input>\n    <ion-input class=\"inputLogin ion-padding\" type=\"number\" placeholder=\"Salario Bruto\"  [(ngModel)]=\"funcionario.salarioBruto\"></ion-input>\n    <ion-input class=\"inputLogin ion-padding\" type=\"text\" placeholder=\"Email\" [(ngModel)]=\"usuario.email\">\n    </ion-input>\n    <ion-input class=\"inputLogin ion-padding\" type=\"password\" placeholder=\"Senha\" [(ngModel)]=\"usuario.senha\">\n    </ion-input>\n    <ion-input [hidden]=\"keyboard.isVisible\" class=\"inputLoginSubmit \" type=\"submit\" value=\"Cadastrar\" (click)=\"registrar()\"></ion-input>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/cadastro-usuario/cadastro-usuario.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/cadastro-usuario/cadastro-usuario.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url('superior.svg')  no-repeat top / 100% ,url('inferior.svg') no-repeat bottom / 100%; }\n  ion-content .ion-icon {\n    color: white; }\n  .logo {\n  margin-top: 20%; }\n  .inputLogin {\n  border: 2px solid #4F9AF5;\n  border-radius: 30px;\n  width: 60%;\n  margin: 5px auto;\n  text-align: left;\n  height: 35px; }\n  .inputLoginSubmit {\n  background-color: #4F9AF5;\n  border-radius: 30px;\n  width: 60%;\n  margin: 5px auto;\n  color: white; }\n  h6 {\n  color: #4F9AF5; }\n  .cadastrar {\n  padding: 7px;\n  border-radius: 20px;\n  color: var(--ion-color-padraoApp);\n  border: 2px solid #4F9AF5;\n  width: 50%;\n  margin: 5px auto; }\n  #divLogin {\n  margin-top: 15%; }\n  ion-icon {\n  width: 25px;\n  height: 25px;\n  color: white;\n  margin-left: 5px; }\n  .cadastro {\n  margin-top: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FkYXN0cm8tdXN1YXJpby9DOlxcVXNlcnNcXElnb3JcXERlc2t0b3BcXElGU0NcXElGU0MgMjAxOS0yXFxUQ0MgSUlcXFRDQy1JSSBBcGxpY2F0aXZvIEhvcmFzIEV4dHJhc1xcVGltZWlzbW9uZXlhcHAvc3JjXFxhcHBcXHBhZ2VzXFxjYWRhc3Ryby11c3VhcmlvXFxjYWRhc3Ryby11c3VhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9HQUFhLEVBQUE7RUFEakI7SUFJUSxZQUFZLEVBQUE7RUFLcEI7RUFDSSxlQUFlLEVBQUE7RUFHbkI7RUFDSSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTtFQUdoQjtFQUNJLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7RUFHaEI7RUFDSSxjQUFjLEVBQUE7RUFHbEI7RUFDSSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksZUFBZSxFQUFBO0VBR25CO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYWRhc3Ryby11c3VhcmlvL2NhZGFzdHJvLXVzdWFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlbnMvc3VwZXJpb3Iuc3ZnJykgIG5vLXJlcGVhdCB0b3AgLyAxMDAlICx1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZW5zL2luZmVyaW9yLnN2ZycpIG5vLXJlcGVhdCBib3R0b20gLyAxMDAlO1xyXG5cclxuICAgIC5pb24taWNvbntcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIG1hcmdpbi10b3A6IDIwJTsgXHJcbn1cclxuXHJcbi5pbnB1dExvZ2lue1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzRGOUFGNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5pbnB1dExvZ2luU3VibWl0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRGOUFGNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaDZ7XHJcbiAgICBjb2xvcjogIzRGOUFGNTtcclxufVxyXG5cclxuLmNhZGFzdHJhcntcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXBhZHJhb0FwcCk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNEY5QUY1O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbn1cclxuXHJcbiNkaXZMb2dpbntcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5jYWRhc3Ryb3tcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/cadastro-usuario/cadastro-usuario.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/cadastro-usuario/cadastro-usuario.page.ts ***!
  \*****************************************************************/
/*! exports provided: CadastroUsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroUsuarioPage", function() { return CadastroUsuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");





var CadastroUsuarioPage = /** @class */ (function () {
    function CadastroUsuarioPage(loadingCtrl, toastCtrl, servicoAutenticacao, keyboard) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.servicoAutenticacao = servicoAutenticacao;
        this.keyboard = keyboard;
        this.funcionario = {};
        this.usuario = {};
    }
    CadastroUsuarioPage.prototype.ngOnInit = function () {
        if (this.keyboard.isVisible) {
            var content = document.getElementById('conteudo');
            content.style.backgroundColor = 'white';
        }
    };
    CadastroUsuarioPage.prototype.registrar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_1, mensagem;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        this.funcionario.email = this.usuario.email;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 7, 8, 9]);
                        if (!(this.funcionario.nome == "" || this.funcionario.salarioBruto == null || this.funcionario.funcao == ""
                            || this.usuario.email.length <= 4 || this.usuario.email.search("@") == 1 ||
                            this.usuario.email.search(" ") == 1)) return [3 /*break*/, 3];
                        this.presentToast('Preencha todos os campos!');
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.servicoAutenticacao.registrarFuncionario(this.funcionario)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.servicoAutenticacao.registrarUsuario(this.usuario)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        error_1 = _a.sent();
                        mensagem = void 0;
                        switch (error_1.code) {
                            case 'auth/argument-error':
                                mensagem = 'Preencha todos os campos!';
                                break;
                            case 'auth/email-already-in-use':
                                mensagem = 'Email em uso!';
                                break;
                            case 'auth/invalid-email':
                                mensagem = 'Email inválido!';
                                break;
                            case 'auth/weak-password':
                                mensagem = 'Senha inválida!';
                                break;
                            default:
                                alert(error_1);
                                mensagem = 'Erro ao cadastrar funcionário, verifique seus dados e sua conexão';
                                break;
                        }
                        this.presentToast(mensagem);
                        return [3 /*break*/, 9];
                    case 8:
                        this.carregando.dismiss();
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    CadastroUsuarioPage.prototype.presentLoading = function () {
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
    CadastroUsuarioPage.prototype.presentToast = function (mensagem) {
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
    CadastroUsuarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cadastro-usuario',
            template: __webpack_require__(/*! ./cadastro-usuario.page.html */ "./src/app/pages/cadastro-usuario/cadastro-usuario.page.html"),
            styles: [__webpack_require__(/*! ./cadastro-usuario.page.scss */ "./src/app/pages/cadastro-usuario/cadastro-usuario.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"]])
    ], CadastroUsuarioPage);
    return CadastroUsuarioPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-usuario-cadastro-usuario-module.js.map