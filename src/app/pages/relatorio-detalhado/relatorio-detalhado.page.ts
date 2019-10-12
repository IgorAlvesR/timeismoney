import { Component, OnInit, OnDestroy } from '@angular/core';
import { HoraExtraService } from 'src/app/servicos/hora-extra.service';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/Models/funcionario';
import * as moment from 'moment'
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ToastController } from '@ionic/angular';
import { HoraExtra } from 'src/app/Models/hora-extra';




@Component({
  selector: 'app-relatorio-detalhado',
  templateUrl: './relatorio-detalhado.page.html',
  styleUrls: ['./relatorio-detalhado.page.scss'],
})
export class RelatorioDetalhadoPage implements OnInit,OnDestroy {

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
  public dataInicial = ''
  public dataFinal = ''
  public resultFuncionario: Observable<Funcionario[]> 
  public adionalNoturno: number = 0

  constructor(private horasService: HoraExtraService, private toastController: ToastController) {

  }

  async ionViewWillEnter() {
    try {
      this.dataInicial = await moment().subtract(30,'days').format("YYYY-MM-26")
      this.dataFinal = await moment().format("YYYY-MM-25")
      await this.calculaValoresHorasExtras(this.dataInicial,this.dataFinal)
    } catch (e) {
      console.log(e)
    }

  }

  ngOnInit(){
    
  }

  ngOnDestroy(){
    this.zera()
  }

  zera(){
    this.valorEmReaisDeTodasHorasRealizadas = 0
    this.totalDeHorasExtras =  0
    this.horaFormatada =  ''
    this.totalDeHorasExtrasEmHoras = 0
    this.valorEmReais = 0
    this.horas100PorcentoFormatada = ''
    this.totalDeHorasExtras100PorCentoEmHoras = 0
    this.valorHora100PorCentoEmReais = 0;
    this.totalDeHorasExtras100PoCento = 0
    this.horaFormatadaTotal = ''
    this.totalDeHorasExtrasRealizadas = 0
    this.totalDeHorasExtrasRealizadasEmHoras = 0
    this.valorEmReaisDeTodasHorasRealizadas = 0
    this.valorEmReaisDeTodasHorasRealizadasSemFiltro = 0
    this.totalDeHorasRealizadasFormatadas = ''
    this.adionalNoturno = 0
  }

  async calculaValoresHorasExtras(dataInicial, dataFinal) {
    await this.zera()
    let di = await moment(dataInicial).format('YYYY-MM-DD')
    let df = await moment(dataFinal).format('YYYY-MM-DD')
    await this.calculototalDeHoras(di, df)
    await this.calculototalDeHoras100PorCento(di,df)
    await this.calculoValorTotalHorasExtras60PorCento(di, df)
    await this.calculoValorTotalHorasExtras100PorCento(di,df)
    await this.calculoTotalHorasRealizadas(di,df)
    await this.calculoAdicionalNoturno(di,df)
    await  this.calculoValorTotalHorasRealizadas()
  }

  async calculoAdicionalNoturno(dataInicial,dataFinal){  
    let horas = await this.horasService.getHorasExtras(dataInicial,dataFinal)

    horas.subscribe(result => {
      result.forEach(element => {
        if(element.horaCalculoInicial >= 22 && element.horaCalculoFinal <= 6){
          this.adionalNoturno = 0.20
        }else {
          this.adionalNoturno = 0   
        }
      })
    })
  }
  async calculoValorTotalHorasExtras60PorCento(dataInicial, dataFinal) {

    await this.getQuantidadeHorasExtrasEmHoras(dataInicial, dataFinal)

    let resultFuncionario: Observable<Funcionario[]> = await this.horasService.buscarFuncionario()
    resultFuncionario.subscribe(result => {
      this.valorEmReais = ((result[0].salarioBruto / 220) * 1.6 + this.adionalNoturno ) * this.totalDeHorasExtrasEmHoras
    })
    return this.valorEmReais
  }

  async calculoValorTotalHorasRealizadas(){
    this.resultFuncionario = await this.horasService.buscarFuncionario()
    await this.resultFuncionario.subscribe(() => {
      this.valorEmReaisDeTodasHorasRealizadas =  this.valorEmReais + this.valorHora100PorCentoEmReais
    })
  } 


  

  async calculoValorTotalHorasExtras100PorCento(dataInicial,dataFinal) {
    this.valorHora100PorCentoEmReais = 0
    let di = moment(dataInicial).format('YYYY-MM-DD')
    let df = moment(dataFinal).format('YYYY-MM-DD')

    await this.getQuantidadeHorasExtras100PorCentoEmHoras(di,df)

    let resultFuncionario: Observable<Funcionario[]> = await this.horasService.buscarFuncionario()
    await resultFuncionario.subscribe(result => {
      this.funcao = result[0].funcao
      this.nomeFuncionario = result[0].nome
      this.valorHora100PorCentoEmReais = ((result[0].salarioBruto / 220) * 2 + this.adionalNoturno) * this.totalDeHorasExtras100PorCentoEmHoras
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
        if (dados.length == 0) {
          this.presentToast('Não possui horas extras realizadas nessa data')
        }
        if (element.diaSemana > 0) {
          let horaFinal = element.horaDataCalculoFinal
          let horaInicial = element.horaDataCalculoInicio
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
        if (dados.length == 0) {
          this.presentToast('Não possui horas extras realizadas nessa data')
        }
        if (element.diaSemana == 0) {
          let horaFinal = element.horaDataCalculoFinal
          let horaInicial = element.horaDataCalculoInicio
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
        if (dados.length == 0) {
          this.presentToast('Não possui horas extras realizadas nessa data')
        }
        if (element.diaSemana > 0) {
          let horaFinal = element.horaDataCalculoFinal
          let horaInicial = element.horaDataCalculoInicio
          milisegundos = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
          duracaoMilisegundos = moment.duration(milisegundos).asHours();
          this.totalDeHorasExtras += duracaoMilisegundos
          somaMilisegundos += milisegundos
        }
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
        if (dados.length == 0) {
          this.presentToast('Não possui horas extras realizadas nessa data')
        }
        if (element.diaSemana == 0) {
          let horaFinal = element.horaDataCalculoFinal
          let horaInicial = element.horaDataCalculoInicio
          milisegundos = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
          duracaoMilisegundos = moment.duration(milisegundos).asHours();
          this.totalDeHorasExtras100PoCento += duracaoMilisegundos
          somaMilisegundos += milisegundos
        }
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
        if (dados.length == 0) {
          this.presentToast('Não possui horas extras realizadas nessa data')
        }
        let horaFinal = element.horaDataCalculoFinal
        let horaInicial = element.horaDataCalculoInicio
        milisegundos = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
        duracaoMilisegundos = moment.duration(milisegundos).asHours();
        this.totalDeHorasExtrasRealizadas += duracaoMilisegundos
        somaMilisegundos += milisegundos
      })
      this.totalDeHorasRealizadasFormatadas = Math.floor(duracaoMilisegundos) + moment.utc(somaMilisegundos).format(":mm:ss");
    })
  }


  async presentToast(mensagem: string) {
    const toast = await this.toastController.create({ message: mensagem, duration: 3000 })
    toast.present()
  }
}
