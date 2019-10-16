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
  public dataInicial = ''
  public dataFinal = ''

  constructor(
    private authService: AutenticacaoService,
    private horaService: HoraExtraService,
    private toastCtrl: ToastController,
    private alertController: AlertController
  ) { }

  async ngOnInit() {
    await this.getHorasExtras()
    this.dataInicial = await moment().subtract(30,'days').format("YYYY-MM-26")
    this.dataFinal = await moment().format("YYYY-MM-25")
    await this.getHoras(this.dataInicial,this.dataFinal)
  }

  ngOnDestroy() {
    if (this.horasExtrasSubscription) {
      this.horasExtrasSubscription.unsubscribe()
    }
  }

  async getHoras(dataInicial, dataFinal) {
     let di = moment(dataInicial).format('YYYY-MM-DD')
     let df = moment(dataFinal).format('YYYY-MM-DD')
     
     this.horasExtrasSubscription = await this.horaService.getHorasExtras(di, df).subscribe(dados => {
      if (dados.length == 0) {
        this.presentToast('Não possui horas extras nesse período!')
      } else {
        dados.forEach(element => {
          let horaFinal = element.horaDataCalculoFinal
          let horaInicial = element.horaDataCalculoInicio
          let ms = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
          let d = moment.duration(ms);
          let s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
          element.total = s
        })
      }
      return this.horasExtras = dados
    })
  }


  async getHorasExtras() {
     this.horasExtrasSubscription = await this.horaService.getHoras().subscribe(dados => {
        dados.forEach(element => {
          let horaFinal = element.horaDataCalculoFinal
          let horaInicial = element.horaDataCalculoInicio
          let ms = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
          let d = moment.duration(ms);
          let s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
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
    const toast = await this.toastCtrl.create({ message: mensagem, duration: 2000 })
    toast.present()
  }
}

