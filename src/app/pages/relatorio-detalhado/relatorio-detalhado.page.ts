import { Component, OnInit } from '@angular/core';
import { HoraExtraService } from 'src/app/servicos/hora-extra.service';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/Models/funcionario';
import * as moment from 'moment'
import { StatusBar } from '@ionic-native/status-bar/ngx';




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
  public valorEmReaisDeTodasHorasRealizadasSemFiltro: number = 0
  public totalDeHorasRealizadasFormatadas: string = ''
  public nomeFuncionario: string = ''
  public funcao: string = ''
  public hora = {}
  public data = {}


  constructor(private horasService: HoraExtraService) {

  }

  async ngOnInit() {
    try {
      this.valorEmReais = 0
      this.valorHora100PorCentoEmReais = 0
      this.valorEmReaisDeTodasHorasRealizadas = 0
      await this.calculototalDeHorasSemFiltro()
      await this.calculototalDeHoras100PorCentoSemFiltro()
      await this.calculoValorTotalHorasExtras60PorCentoSemFiltro()
      await this.calculoValorTotalHorasExtras100PorCentoSemFiltro()
      await this.calculoTotalHorasRealizadasSemFiltro()
      await this.calculoValorTotalHorasRealizadas()
    } catch (e) {
      console.log(e)
    }

  }

  async calculaValoresHorasExtras(dataInicial, dataFinal) {
    this.valorEmReaisDeTodasHorasRealizadas = 0
    let di = await moment(dataInicial).format('YYYY-MM-DD')
    let df = await moment(dataFinal).format('YYYY-MM-DD')
    await this.calculototalDeHoras(di, df)
    await this.calculototalDeHoras100PorCento(di,df)
    await this.calculoValorTotalHorasExtras60PorCento(di, df)
    await this.calculoValorTotalHorasExtras100PorCento(di,df)
    await this.calculoTotalHorasRealizadas(di,df)
    await this.calculoValorTotalHorasRealizadas()
    
  }

  

  async calculoValorTotalHorasExtras60PorCento(dataInicial, dataFinal) {

    await this.getQuantidadeHorasExtrasEmHoras(dataInicial, dataFinal)

    let resultFuncionario: Observable<Funcionario[]> = await this.horasService.buscarFuncionario()
    resultFuncionario.subscribe(result => {
      this.valorEmReais = ((result[0].salarioBruto / 220) * 1.6) * this.totalDeHorasExtrasEmHoras
    })
    return this.valorEmReais
  }

  async calculoValorTotalHorasExtras60PorCentoSemFiltro(){

    await this.getQuantidadeHorasExtrasEmHorasSemFiltro()

    let resultFuncionario: Observable<Funcionario[]> = await this.horasService.buscarFuncionario()
    resultFuncionario.subscribe(result => {
      this.valorEmReais = ((result[0].salarioBruto / 220) * 1.6) * this.totalDeHorasExtrasEmHoras
    })
    return this.valorEmReais
  }

  async getQuantidadeHorasExtrasEmHorasSemFiltro(){
  let duracaoMilisegundos: number = 0
    let milisegundos: number = 0

    await this.horasService.getHorasExtras60porCentoSemFiltro().subscribe(dados => {
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

 

  async calculoValorTotalHorasRealizadas(){
    let resultFuncionario: Observable<Funcionario[]> = await this.horasService.buscarFuncionario()
    resultFuncionario.subscribe(result => {
      this.valorEmReaisDeTodasHorasRealizadas = this.valorEmReais + this.valorHora100PorCentoEmReais
    })

    return this.valorEmReaisDeTodasHorasRealizadas

  }

  async calculoValorTotalHorasRealizadasTeste(){
    let resultFuncionario: Observable<Funcionario[]> = await this.horasService.buscarFuncionario()
    resultFuncionario.subscribe(result => {
      this.valorEmReaisDeTodasHorasRealizadas = this.valorEmReais + this.valorHora100PorCentoEmReais
    })

    return this.valorEmReaisDeTodasHorasRealizadas

  }

  async calculoValorTotalHorasExtras100PorCentoSemFiltro(){
    await this.getQuantidadeHorasExtras100PorCentoEmHorasSemFiltro()

    let resultFuncionario: Observable<Funcionario[]> = await this.horasService.buscarFuncionario()
    resultFuncionario.subscribe(result => {
      this.funcao = result[0].funcao
      this.nomeFuncionario = result[0].nome
      this.valorHora100PorCentoEmReais = ((result[0].salarioBruto / 220) * 2) * this.totalDeHorasExtras100PorCentoEmHoras
    })
    return this.valorHora100PorCentoEmReais
  }


  async getQuantidadeHorasExtras100PorCentoEmHorasSemFiltro(){
    let duracaoMilisegundos: number = 0
    let milisegundos: number = 0

    await this.horasService.getHorasExtras100porCentoSemFiltro().subscribe(dados => {
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

  async calculoValorTotalHorasExtras100PorCento(dataInicial,dataFinal) {
    let di = moment(dataInicial).format('YYYY-MM-DD')
    let df = moment(dataFinal).format('YYYY-MM-DD')

    await this.getQuantidadeHorasExtras100PorCentoEmHoras(di,df)

    let resultFuncionario: Observable<Funcionario[]> = await this.horasService.buscarFuncionario()
    resultFuncionario.subscribe(result => {
      this.funcao = result[0].funcao
      this.nomeFuncionario = result[0].nome
      this.valorHora100PorCentoEmReais = ((result[0].salarioBruto / 220) * 2) * this.totalDeHorasExtras100PorCentoEmHoras
    })
    return this.valorHora100PorCentoEmReais
  }

  async getQuantidadeHorasExtrasEmHoras(dataInicial, dataFinal) {
    let di = moment(dataInicial).format('YYYY-MM-DD')
    let df = moment(dataFinal).format('YYYY-MM-DD')
    let duracaoMilisegundos: number = 0
    let milisegundos: number = 0

    await this.horasService.getHorasExtras60porCento(di, df).subscribe(dados => {
      dados.forEach(element => {
        if (element.diaSemana > 0) {
          var horaFinal = element.horaDataCalculoFinal
          var horaInicial = element.horaDataCalculoInicio
          milisegundos = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
          duracaoMilisegundos = moment.duration(milisegundos).asHours();
          this.totalDeHorasExtrasEmHoras += duracaoMilisegundos
        }
      })
    })
    return this.totalDeHorasExtrasEmHoras
  }



  async getQuantidadeHorasExtras100PorCentoEmHoras(dataInicial, dataFinal) {
    let di = moment(dataInicial).format('YYYY-MM-DD')
    let df = moment(dataFinal).format('YYYY-MM-DD')
    let duracaoMilisegundos: number = 0
    let milisegundos: number = 0

    await this.horasService.getHorasExtras100porCento(di, df).subscribe(dados => {
      dados.forEach(element => {
        if (element.diaSemana == 0) {
          var horaFinal = element.horaDataCalculoFinal
          var horaInicial = element.horaDataCalculoInicio
          milisegundos = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
          duracaoMilisegundos = moment.duration(milisegundos).asHours();
          this.totalDeHorasExtras100PorCentoEmHoras += duracaoMilisegundos
        }
      })
    })
    return this.totalDeHorasExtras100PorCentoEmHoras
  }


  async calculototalDeHoras(dataInicial, dataFinal) {
    let di = moment(dataInicial).format('YYYY-MM-DD')
    let df = moment(dataFinal).format('YYYY-MM-DD')
    let duracaoMilisegundos: number = 0
    var milisegundos: number = 0
    let somaMilisegundos: number = 0
    await this.horasService.getHorasExtras60porCento(di, df).subscribe(dados => {
      dados.forEach(element => {
        if (element.diaSemana > 0) {
          var horaFinal = element.horaDataCalculoFinal
          var horaInicial = element.horaDataCalculoInicio
          milisegundos = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
          duracaoMilisegundos = moment.duration(milisegundos).asHours();
          this.totalDeHorasExtras += duracaoMilisegundos
          somaMilisegundos += milisegundos
        }
      })

      this.horaFormatada = Math.floor(duracaoMilisegundos) + moment.utc(somaMilisegundos).format(":mm:ss");
    })
  }


  async calculototalDeHorasSemFiltro(){
    let duracaoMilisegundos: number = 0
    var milisegundos: number = 0
    let somaMilisegundos: number = 0
    await this.horasService.getHorasExtras60porCentoSemFiltro().subscribe(dados => {
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

  async calculototalDeHoras100PorCento(dataInicial, dataFinal) {
    let di = moment(dataInicial).format('YYYY-MM-DD')
    let df = moment(dataFinal).format('YYYY-MM-DD')
    let duracaoMilisegundos: number = 0
    var milisegundos: number = 0
    let somaMilisegundos: number = 0
    await this.horasService.getHorasExtras100porCento(di, df).subscribe(dados => {
      dados.forEach(element => {
        if (element.diaSemana == 0) {
          var horaFinal = element.horaDataCalculoFinal
          var horaInicial = element.horaDataCalculoInicio
          milisegundos = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
          duracaoMilisegundos = moment.duration(milisegundos).asHours();
          this.totalDeHorasExtras100PoCento += duracaoMilisegundos
          somaMilisegundos += milisegundos
        }
      })
      this.horas100PorcentoFormatada = Math.floor(duracaoMilisegundos) + moment.utc(somaMilisegundos).format(":mm:ss");
    })
  }


  async calculototalDeHoras100PorCentoSemFiltro(){
    let duracaoMilisegundos: number = 0
    var milisegundos: number = 0
    let somaMilisegundos: number = 0
    await this.horasService.getHorasExtras100porCentoSemFiltro().subscribe(dados => {
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

  async calculoTotalHorasRealizadas(dataInicial,dataFinal) {
    let di = moment(dataInicial).format('YYYY-MM-DD')
    let df = moment(dataFinal).format('YYYY-MM-DD')
    let duracaoMilisegundos: number = 0
    var milisegundos: number = 0
    let somaMilisegundos: number = 0
    await this.horasService.getHorasExtrasTotais(di,df).subscribe(dados => {
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
    await this.calculoValorTotalHorasRealizadas()

  }

  async calculoTotalHorasRealizadasSemFiltro(){
    let duracaoMilisegundos: number = 0
    var milisegundos: number = 0
    let somaMilisegundos: number = 0
    await this.horasService.getHorasExtrasTotaisSemFiltro().subscribe(dados => {
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
