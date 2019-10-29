import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/Models/funcionario';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {


  salario: number = 0
  public funcionario: Funcionario = {}

  constructor(private authService: AutenticacaoService,private toastCtrl: ToastController,) { }

  ngOnInit() {
  }

  async alterarSalario(){
    if (this.salario > 0) {
      this.funcionario.salarioBruto = await Number(this.salario)
      await this.authService.update(this.funcionario)
      await this.presentToast('Salário base atualizado com sucesso...')
   }else {
      this.presentToast("O valor deve ser maior que zero! ")
   }
  }


  async presentToast(mensagem: string) {
    const toast = await this.toastCtrl.create({ message: mensagem, duration: 1000 })
    toast.present()
  }

}
