import { Component, OnInit } from '@angular/core';
import { DeslocamentoService } from 'src/app/servicos/deslocamento.service';
import { Deslocamento } from 'src/app/Models/deslocamento';
import { Subscription } from 'rxjs';
import { ToastController, AlertController } from '@ionic/angular';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import * as moment from 'moment'
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
  public dataInicial = ''
  public dataFinal = ''
  constructor(private deslocamentoService: DeslocamentoService, private alertController: AlertController, private toastController: ToastController) {
    this.deslocamentoService.getDeslocamentos()
  }

  async ngOnInit() {
    await this.getDeslocamentos()
    this.dataInicial = await moment().subtract(30,'days').format("YYYY-MM-DD")
    this.dataFinal = await moment().format("YYYY-MM-DD")
    await this.getDeslocamentosComFiltro(this.dataInicial,this.dataFinal)
    await this.getDeslocamentosComFiltro(this.dataInicial,this.dataFinal)
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
    let di = moment(dataInicial).format('YYYY-MM-DD')
    let df = moment(dataFinal).format('YYYY-MM-DD')
    this.deslocamentoSubscription = await this.deslocamentoService.getDeslocamentosComFiltro(di, df).subscribe(dados => {
      if (dados.length == 0) {
        this.presentToast('Não possui deslocamentos nesse período!')
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
