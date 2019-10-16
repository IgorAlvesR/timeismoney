import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { duration } from 'moment';
import { AutenticacaoService } from './autenticacao.service';
import {Plugins, NetworkStatus, PluginListenerHandle} from '@capacitor/core'
const {Network} = Plugins

@Injectable({
  providedIn: 'root'
})
export class InternetService {

  private networkStatus: NetworkStatus
  private networdListener: PluginListenerHandle

  constructor( private toastCtrl: ToastController, private authService: AutenticacaoService) { }

  
  async verificaConexao() {
    this.networdListener = await Network.addListener(
      'networkStatusChange',
      status => {
        this.networkStatus = status
      }
    )
    this.networkStatus = await Network.getStatus()
    if(this.networkStatus.connected == false){
      await this.toastCtrl.create({message: 'Você está sem conexao com a Internet', duration: 3000})
      await this.authService.logout()
    }

    
  }
}
