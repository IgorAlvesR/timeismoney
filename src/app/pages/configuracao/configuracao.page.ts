import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/Models/funcionario';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { HoraExtraService } from 'src/app/servicos/hora-extra.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {


  salario: number
  public funcionario: Funcionario = {}
  carregando: any

  constructor(private authService: AutenticacaoService,private toastCtrl: ToastController,
    private horaService: HoraExtraService,
    private loadingCtrl: LoadingController,
    ) { }

  ngOnInit() {
  }

  async alterarSalario(){
    await this.presentLoading()
    if (this.salario > 0) {
      this.funcionario.salarioBruto = Number(this.salario)
      let result = await this.horaService.updateSalario(this.funcionario)
      if(result == true){
        await this.carregando.dismiss()
        await window.location.replace('registro-hora-extra')
      }
      
   }else {
      this.presentToast("O valor deve ser maior que zero! ")
   }
  }


  async presentToast(mensagem: string) {
    const toast = await this.toastCtrl.create({ message: mensagem, duration: 1000 })
    toast.present()
  }

  async presentLoading() {
    this.carregando = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' })
    return this.carregando.present()
  }

}
