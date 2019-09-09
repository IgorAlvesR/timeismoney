import { Component, OnInit } from '@angular/core'
import { HoraExtraService } from 'src/app/servicos/hora-extra.service'
import { HoraExtra } from 'src/app/Models/hora-extra'
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service'
import { Subscription } from 'rxjs'

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
  }

  ngOnInit() { 
    
  }

  ngOnDestroy(){
    this.horasExtrasSubscription.unsubscribe()
  }

  public getHoras(){
    this.horasExtrasSubscription = this.horaService.getHorasExtras().subscribe(dados => {
      return this.horasExtras = dados
    }) 
  }
}

