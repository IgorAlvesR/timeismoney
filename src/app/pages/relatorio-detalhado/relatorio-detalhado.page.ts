import { Component, OnInit } from '@angular/core';
import { HoraExtraService } from 'src/app/servicos/hora-extra.service';
import { Subscribable, Observable } from 'rxjs';
import { Funcionario } from 'src/app/Models/funcionario';
import { HoraExtra } from 'src/app/Models/hora-extra';
import * as moment from 'moment'
import { parse } from 'url';
import { formatNumber } from '@angular/common';
import { element } from '@angular/core/src/render3';


@Component({
  selector: 'app-relatorio-detalhado',
  templateUrl: './relatorio-detalhado.page.html',
  styleUrls: ['./relatorio-detalhado.page.scss'],
})
export class RelatorioDetalhadoPage implements OnInit {


  public totalDeHorasExtras: number = 0
  public salarioFunc: number
  public horaFormatada: string = ''
  public totalDeHorasExtrasEmHoras:number = 0
  public valorEmReais:number = 0


  constructor(private horasService: HoraExtraService) {
    
  }

  ngOnInit() {
    this.calculototalDeHoras()  
    this.calculoValorTotalHorasExtras()
  }

  async calculoValorTotalHorasExtras() {
    
    await this.getQuantidadeHorasExtrasEmHoras()
    
    let resultFuncionario: Observable<Funcionario[]> = await this.horasService.buscarFuncionario()
    resultFuncionario.subscribe(result => {
      this.valorEmReais = (result[0].salarioBruto / 220 * 1.6) * this.totalDeHorasExtrasEmHoras
    })
    

  }

  async getQuantidadeHorasExtrasEmHoras(){
    let duracaoMilisegundos:number = 0
    let milisegundos: number = 0

    await this.horasService.getHorasExtras().subscribe(dados => {
      dados.forEach(element => {
        var horaFinal = element.horaDataCalculoFinal
        var horaInicial = element.horaDataCalculoInicio
        milisegundos = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
        duracaoMilisegundos = moment.duration(milisegundos).asHours();
        this.totalDeHorasExtrasEmHoras+= duracaoMilisegundos
      }) 
   })
    return this.totalDeHorasExtrasEmHoras
  }
  

  async calculototalDeHoras() {
    let duracaoMilisegundos:number = 0
    var milisegundos: number = 0
    let somaMilisegundos: number = 0
    await this.horasService.getHorasExtras().subscribe(dados => {
      dados.forEach(element => {
        var horaFinal = element.horaDataCalculoFinal
        var horaInicial = element.horaDataCalculoInicio
        milisegundos = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
        duracaoMilisegundos = moment.duration(milisegundos).asHours();
        this.totalDeHorasExtras+= duracaoMilisegundos
        somaMilisegundos+=milisegundos
      })
      this.horaFormatada = Math.floor(duracaoMilisegundos) + moment.utc(somaMilisegundos).format(":mm:ss");
    })
  }
}
