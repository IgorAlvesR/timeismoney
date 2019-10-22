import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticacaoService } from '../servicos/autenticacao.service';
import { Network } from '@ionic-native/network/ngx';
import { Route } from '@angular/compiler/src/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  private disconnectSubscription
  private connectSubscription
  constructor(
    private servicoAutenticacao: AutenticacaoService,
    private network: Network,
    private route: NavController
  ) { }




  canActivate(): Promise<boolean> {
    this.network.onDisconnect().subscribe(()=> {
      this.servicoAutenticacao.logout()
    })
    return new Promise(resolve => {
      this.servicoAutenticacao.getAuth().onAuthStateChanged(funcionario => {
        if (funcionario) {
          //this.route.navigateRoot('/registro-hora-extra')
          window.location.replace('registro-hora-extra')
        }
        resolve(!funcionario ? true : false);
      });
    })
  }
}
