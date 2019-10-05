import { Component, OnInit } from '@angular/core';
import { HoraExtraService } from 'src/app/servicos/hora-extra.service';
import {  Observable } from 'rxjs';
import { Funcionario } from 'src/app/Models/funcionario';
import * as moment from 'moment'


@Component({
  selector: 'app-relatorio-detalhado',
  templateUrl: './relatorio-detalhado.page.html',
  styleUrls: ['./relatorio-detalhado.page.scss'],
})
export class RelatorioDetalhadoPage implements OnInit {


  public totalDeHorasExtras: number = 0
  public salarioFunc: number
  public horaFormatada: string = ''
  public totalDeHorasExtrasEmHoras: number = 0
  public valorEmReais: number = 0
  public horas100PorcentoFormatada: string = ''
  public totalDeHorasExtras100PorCentoEmHoras: number = 0
  public valorHora100PorCentoEmReais: number = 0;
  public totalDeHorasExtras100PoCento: number = 0
  public horaFormatadaTotal: string = ''
  public totalDeHorasExtrasRealizadas: number = 0
  public totalDeHorasExtrasRealizadasEmHoras: number = 0
  public valorEmReaisDeTodasHorasRealizadas: number = 0
  public totalDeHorasRealizadasFormatadas: string = ''

  constructor(private horasService: HoraExtraService) { }

  async ngOnInit() {
    try {
      await this.calculototalDeHoras()
      await this.calculototalDeHoras100PorCento()
      await this.calculoValorTotalHorasExtras60PorCento()
      await this.calculoValorTotalHorasExtras100PorCento()
      await this.calculoValorTotalHorasRealizadas()
      await this.calculoTotalHorasRealizadas()
    } catch (e) {
      console.log(e)
    }

  }

  async calculoValorTotalHorasExtras60PorCento() {

    await this.getQuantidadeHorasExtrasEmHoras()

    let resultFuncionario: Observable<Funcionario[]> = await this.horasService.buscarFuncionario()
    resultFuncionario.subscribe(result => {
      this.valorEmReais = ((result[0].salarioBruto / 220) * 1.6) * this.totalDeHorasExtrasEmHoras
    })

    return this.valorEmReais


  }

  async calculoValorTotalHorasRealizadas() {


    let resultFuncionario: Observable<Funcionario[]> = await this.horasService.buscarFuncionario()
    resultFuncionario.subscribe(result => {
      this.valorEmReaisDeTodasHorasRealizadas = this.valorEmReais + this.valorHora100PorCentoEmReais
    })

    return this.valorEmReaisDeTodasHorasRealizadas


  }

  async calculoValorTotalHorasExtras100PorCento() {

    await this.getQuantidadeHorasExtras100PorCentoEmHoras()

    let resultFuncionario: Observable<Funcionario[]> = await this.horasService.buscarFuncionario()
    resultFuncionario.subscribe(result => {
      this.valorHora100PorCentoEmReais = ((result[0].salarioBruto / 220) * 2) * this.totalDeHorasExtras100PorCentoEmHoras
    })
    return this.valorHora100PorCentoEmReais
  }

  async getQuantidadeHorasExtrasEmHoras() {
    let duracaoMilisegundos: number = 0
    let milisegundos: number = 0

    await this.horasService.getHorasExtras60porCento().subscribe(dados => {
      dados.forEach(element => {
        var horaFinal = element.horaDataCalculoFinal
        var horaInicial = element.horaDataCalculoInicio
        milisegundos = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
        duracaoMilisegundos = moment.duration(milisegundos).asHours();
        this.totalDeHorasExtrasEmHoras += duracaoMilisegundos
      })
    })
    return this.totalDeHorasExtrasEmHoras
  }



  async getQuantidadeHorasExtras100PorCentoEmHoras() {
    let duracaoMilisegundos: number = 0
    let milisegundos: number = 0

    await this.horasService.getHorasExtras100porCento().subscribe(dados => {
      dados.forEach(element => {
        var horaFinal = element.horaDataCalculoFinal
        var horaInicial = element.horaDataCalculoInicio
        milisegundos = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
        duracaoMilisegundos = moment.duration(milisegundos).asHours();
        this.totalDeHorasExtras100PorCentoEmHoras += duracaoMilisegundos
      })
    })
    return this.totalDeHorasExtras100PorCentoEmHoras
  }


  async calculototalDeHoras() {
    let duracaoMilisegundos: number = 0
    var milisegundos: number = 0
    let somaMilisegundos: number = 0
    await this.horasService.getHorasExtras60porCento().subscribe(dados => {
      dados.forEach(element => {
        var horaFinal = element.horaDataCalculoFinal
        var horaInicial = element.horaDataCalculoInicio
        milisegundos = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
        duracaoMilisegundos = moment.duration(milisegundos).asHours();
        this.totalDeHorasExtras += duracaoMilisegundos
        somaMilisegundos += milisegundos
      })
      this.horaFormatada = Math.floor(duracaoMilisegundos) + moment.utc(somaMilisegundos).format(":mm:ss");
    })
  }

  async calculototalDeHoras100PorCento() {
    let duracaoMilisegundos: number = 0
    var milisegundos: number = 0
    let somaMilisegundos: number = 0
    await this.horasService.getHorasExtras100porCento().subscribe(dados => {
      dados.forEach(element => {
        var horaFinal = element.horaDataCalculoFinal
        var horaInicial = element.horaDataCalculoInicio
        milisegundos = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
        duracaoMilisegundos = moment.duration(milisegundos).asHours();
        this.totalDeHorasExtras100PoCento += duracaoMilisegundos
        somaMilisegundos += milisegundos
      })
      this.horas100PorcentoFormatada = Math.floor(duracaoMilisegundos) + moment.utc(somaMilisegundos).format(":mm:ss");
    })
  }

  async calculoTotalHorasRealizadas(){
    let duracaoMilisegundos: number = 0
    var milisegundos: number = 0
    let somaMilisegundos: number = 0
    await this.horasService.getHorasExtrasTotais().subscribe(dados => {
      dados.forEach(element => {
        var horaFinal = element.horaDataCalculoFinal
        var horaInicial = element.horaDataCalculoInicio
        milisegundos = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
        duracaoMilisegundos = moment.duration(milisegundos).asHours();
        this.totalDeHorasExtrasRealizadas += duracaoMilisegundos
        somaMilisegundos += milisegundos
      })
      this.totalDeHorasRealizadasFormatadas = Math.floor(duracaoMilisegundos) + moment.utc(somaMilisegundos).format(":mm:ss");
    })

  }



}
