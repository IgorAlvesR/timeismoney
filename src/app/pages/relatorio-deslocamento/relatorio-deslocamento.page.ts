import { Component, OnInit } from '@angular/core';
import { DeslocamentoService } from 'src/app/servicos/deslocamento.service';
import { Deslocamento } from 'src/app/Models/deslocamento';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-relatorio-deslocamento',
  templateUrl: './relatorio-deslocamento.page.html',
  styleUrls: ['./relatorio-deslocamento.page.scss'],
})
export class RelatorioDeslocamentoPage implements OnInit {

  public deslocamentos = new Array<Deslocamento>()
  private deslocamentoSubscription: Subscription

  constructor(private deslocamentoService: DeslocamentoService) 
  {
    this.deslocamentoService.getDeslocamentos()
  }

  ngOnInit() {
    this.getDeslocamentos()
  }

  ngOnDestroy() {
    this.deslocamentoSubscription.unsubscribe()
  }


  getDeslocamentos(){
    this.deslocamentoSubscription = this.deslocamentoService.getDeslocamentos().subscribe(result => {
      return this.deslocamentos = result
    })
  }

}
