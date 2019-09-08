import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AutenticacaoService } from '../servicos/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private servicoAutenticacao: AutenticacaoService,
    private rota: Router
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.servicoAutenticacao.getAuth().onAuthStateChanged(funcionario => {
        if (!funcionario) {
          this.rota.navigate(['entrar']);
        }
        resolve(funcionario ? true : false);
      });
    });
  }

}
