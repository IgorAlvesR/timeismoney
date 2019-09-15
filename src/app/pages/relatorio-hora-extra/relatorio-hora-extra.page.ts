import { Component, OnInit } from '@angular/core'
import { HoraExtraService } from 'src/app/servicos/hora-extra.service'
import { HoraExtra } from 'src/app/Models/hora-extra'
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service'
import { Subscription } from 'rxjs'
import * as moment from 'moment'
import { elementEnd } from '@angular/core/src/render3'
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-relatorio-hora-extra',
  templateUrl: './relatorio-hora-extra.page.html',
  styleUrls: ['./relatorio-hora-extra.page.scss'],
})
export class RelatorioHoraExtraPage implements OnInit {

  public horasExtras = new Array<HoraExtra>()
  private horasExtrasSubscription: Subscription


  constructor(
    private authService: AutenticacaoService,
    private horaService: HoraExtraService,
    private toastCtrl: ToastController
  ) {

  }

  ngOnInit() {
    this.getHoras()
  }

  ngOnDestroy() {
    this.horasExtrasSubscription.unsubscribe()
  }

  getHoras() {
    this.horasExtrasSubscription = this.horaService.getHorasExtras().subscribe(dados => {

      dados.forEach(element => {
        var horaFinal = element.horaFinal
        var horaInicial = element.horaInicial
        var ms = moment(horaFinal, "HH:mm:ss").diff(moment(horaInicial, "HH:mm:ss"));
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
      this.toastCtrl.create({message:'Erro ao tentar excluir hora extra'});
    }
  }
}

