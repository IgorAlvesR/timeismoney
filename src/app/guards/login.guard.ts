import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticacaoService } from '../servicos/autenticacao.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private servicoAutenticacao: AutenticacaoService,
    private navCtrl: NavController
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.servicoAutenticacao.getAuth().onAuthStateChanged(funcionario => {
        if (funcionario) {
          window.location.replace('registro-hora-extra')
        }
        resolve(!funcionario ? true : false);
      });
    });

  }
}
