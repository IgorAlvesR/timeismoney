import { Component, OnInit } from '@angular/core'
import { HoraExtraService } from 'src/app/servicos/hora-extra.service'
import { HoraExtra } from 'src/app/Models/hora-extra'
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service'
import { Subscription } from 'rxjs'
import * as moment from 'moment'
import { elementEnd } from '@angular/core/src/render3'

@Component({
  selector: 'app-relatorio-hora-extra',
  templateUrl: './relatorio-hora-extra.page.html',
  styleUrls: ['./relatorio-hora-extra.page.scss'],
})
export class RelatorioHoraExtraPage implements OnInit {

  public horasExtras = new Array<HoraExtra>()
  private horasExtrasSubscription: Subscription


  constructor(private authService: AutenticacaoService, private horaService: HoraExtraService) {
    this.getHoras()
    this.calculoHoras()
  }

  ngOnInit() {
    this.calculoHoras()
  }

  ngOnDestroy() {
    this.horasExtrasSubscription.unsubscribe()
  }

  public getHoras() {
    this.horasExtrasSubscription = this.horaService.getHorasExtras().subscribe(dados => {
      return this.horasExtras = dados
    })
  }


  calculoHoras() {

    this.horasExtras.forEach(element => {

      var horaFinal = element.horaFinal
      var horaInicial = element.horaInicial
      var ms = moment(horaFinal, "HH:mm:ss").diff(moment(horaInicial, "HH:mm:ss"));
      var d = moment.duration(ms);
      var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
      element.total = s
    });
  }
}

