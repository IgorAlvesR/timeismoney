import { Component, OnInit } from '@angular/core'
import { HoraExtraService } from 'src/app/servicos/hora-extra.service'
import { HoraExtra } from 'src/app/Models/hora-extra'
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service'
import { Subscription } from 'rxjs'
import * as moment from 'moment'
import { ToastController, AlertController } from '@ionic/angular'

@Component({
  selector: 'app-relatorio-hora-extra',
  templateUrl: './relatorio-hora-extra.page.html',
  styleUrls: ['./relatorio-hora-extra.page.scss'],
})
export class RelatorioHoraExtraPage implements OnInit {

  public horasExtras = new Array<HoraExtra>()
  private horasExtrasSubscription: Subscription
  public data:HoraExtra = {}

  constructor(
    private authService: AutenticacaoService,
    private horaService: HoraExtraService,
    private toastCtrl: ToastController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.getHorasExtras()
  }

  ngOnDestroy() {
    if (this.horasExtrasSubscription) {
      this.horasExtrasSubscription.unsubscribe()
    }
  }

  async getHoras(dataInicial, dataFinal) {
    if(this.data.dataInicial == '' || this.data.dataInicial == null || this.data.dataFinal == '' || this.data.dataFinal == null){
      await this.presentToast('Preencha os campos com as datas')
      return
    }
     this.horasExtrasSubscription = await this.horaService.getHorasExtras(dataInicial, dataFinal).subscribe(dados => {
      if (dados.length == 0) {
        this.presentToast('Não possui horas extras realizadas nessa data')
      } else {
        dados.forEach(element => {
          var horaFinal = element.horaDataCalculoFinal
          var horaInicial = element.horaDataCalculoInicio
          var ms = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
          var d = moment.duration(ms);
          var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
          element.total = s
        })
      }
      return this.horasExtras = dados
    })
  }


  async getHorasExtras() {
     this.horasExtrasSubscription = await this.horaService.getHoras().subscribe(dados => {
        dados.forEach(element => {
          var horaFinal = element.horaDataCalculoFinal
          var horaInicial = element.horaDataCalculoInicio
          var ms = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
          var d = moment.duration(ms);
          var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
          element.total = s
        })
      return this.horasExtras = dados
    })
  }

  async deleteHoraExtra(id: string) {
    try {
      await this.horaService.deleteHoraExtra(id);
    } catch (error) {
      this.toastCtrl.create({ message: 'Erro ao tentar excluir hora extra' });
    }
  }

  async deleteConfirm(id: string) {
    const alert = await this.alertController.create({
      header: 'Você deseja realmente excluir esse registro?',
      buttons: [
        {
          text: 'SIM',
          handler: () => {
            this.deleteHoraExtra(id)
          }
        }, {
          text: 'NÃO'
        }
      ]
    })
    await alert.present()
  }

  async mostrarDescricaoCidade(descricao: string, cidade: string) {
    const alert = await this.alertController.create({
      subHeader: cidade,
      message: descricao
    })
    await alert.present()
  }


  async presentToast(mensagem: string) {
    const toast = await this.toastCtrl.create({ message: mensagem, duration: 3000 })
    toast.present()
  }
}

