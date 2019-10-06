import { Component, OnInit } from '@angular/core';
import { DeslocamentoService } from 'src/app/servicos/deslocamento.service';
import { Deslocamento } from 'src/app/Models/deslocamento';
import { Subscription } from 'rxjs';
import { ToastController, AlertController } from '@ionic/angular';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { HoraExtra } from 'src/app/Models/hora-extra';

@Component({
  selector: 'app-relatorio-deslocamento',
  templateUrl: './relatorio-deslocamento.page.html',
  styleUrls: ['./relatorio-deslocamento.page.scss'],
})
export class RelatorioDeslocamentoPage implements OnInit {

  public deslocamentos = new Array<Deslocamento>()
  private deslocamentoSubscription: Subscription
  private toastCtrl: ToastController
  public data = {}
  constructor(private deslocamentoService: DeslocamentoService, private alertController: AlertController, private toastController: ToastController) {
    this.deslocamentoService.getDeslocamentos()
  }

  async ngOnInit() {
    await this.getDeslocamentos()
  }

  ngOnDestroy() {
    if (this.deslocamentoSubscription) {
      this.deslocamentoSubscription.unsubscribe()
    }
  }


  getDeslocamentos() {
    this.deslocamentoSubscription = this.deslocamentoService.getDeslocamentos().subscribe(result => {
      return this.deslocamentos = result
    })
  }


  async getDeslocamentosComFiltro(dataInicial, dataFinal) {
    if (this.data.dataInicial == '' || this.data.dataFinal == null || this.data.dataFinal == '' || this.data.dataFinal == null) {
      this.presentToast('Preencha todos os campos')
      return
    }
    this.deslocamentoSubscription = await this.deslocamentoService.getDeslocamentosComFiltro(dataInicial, dataFinal).subscribe(dados => {
      if (dados.length == 0) {
        this.presentToast('Não possui horas extras realizadas nessa data')
      }
      return this.deslocamentos = dados
    })
  }

  async deleteDeslocamento(id: string) {
    try {
      await this.deslocamentoService.deleteDeslocamento(id);
    } catch (error) {
      this.toastCtrl.create({ message: 'Erro ao tentar excluir deslocamento' });
    }
  }

  async deleteConfirm(id: string) {
    const alert = await this.alertController.create({
      header: 'Você deseja realmente excluir esse registro?',
      buttons: [
        {
          text: 'SIM',
          handler: () => {
            this.deleteDeslocamento(id)
          }
        }, {
          text: 'NÃO'
        }
      ]
    })
    await alert.present()
  }

  async mostrarHora(hora: string) {
    const alert = await this.alertController.create({
      subHeader: "Horário do registro: " + hora,
    })
    await alert.present()
  }

  async presentToast(mensagem: string) {
    const toast = await this.toastController.create({ message: mensagem, duration: 3000 })
    toast.present()
  }
}
