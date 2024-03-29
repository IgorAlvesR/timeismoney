import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { HoraExtraService } from 'src/app/servicos/hora-extra.service';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/Models/funcionario';
import * as moment from 'moment'
import { ToastController, AlertController, NavController, LoadingController } from '@ionic/angular';
import { HoraExtra } from 'src/app/Models/hora-extra';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';




@Component({
  selector: 'app-relatorio-detalhado',
  templateUrl: './relatorio-detalhado.page.html',
  styleUrls: ['./relatorio-detalhado.page.scss'],
})
export class RelatorioDetalhadoPage implements OnInit, OnDestroy {

  public totalDeHorasExtras: number = 0
  public salarioFunc: number = 0
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
  public adicionalNoturno: number = 0
  public adicionalNoturno100PorCento: number = 0
  public funcionario: Funcionario = {}
  public valorAdicionalNoturno: number = 0
  public valorAdicionalNoturno100PorCento: number = 0
  public adicionalNoturnoNulo: number = 0
  public status: boolean = false
  public statusNulo: boolean = false
  public status100Porcento: boolean = false
  public statusNulo100PorCento: boolean = false  
  public carregando: any;

  constructor(
    private horasService: HoraExtraService,
    private toastController: ToastController,
    private alertController: AlertController,
    private authService: AutenticacaoService,
    private route: NavController,
    private loadingCtrl: LoadingController
  ) {

  }


  async zeraECalculaValoresNovamente() {
    try {
      await this.buscaDadosFuncionario()
      this.dataInicial = moment().subtract(30, 'days').format("YYYY-MM-DD")
      this.dataFinal = moment().format("YYYY-MM-DD")
      await this.calculaValoresHorasExtras(this.dataInicial, this.dataFinal)
    } catch (e) {
      console.log(e.message)
    }

  }

  async calculaTotal(dataInicial,dataFinal){
      try {
        await this.buscaDadosFuncionario()
        await this.calculaValoresHorasExtras(dataInicial, dataFinal)
      } catch (e) {
        console.log(e.message)
      }
  }

  ionViewWillEnter() {
    this.zeraECalculaValoresNovamente()
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  zera() {
    this.totalDeHorasExtras = 0
    this.horaFormatada = ''
    this.totalDeHorasExtrasEmHoras = 0
    this.valorEmReais = 0
    this.horas100PorcentoFormatada = ''
    this.totalDeHorasExtras100PorCentoEmHoras = 0
    this.valorHora100PorCentoEmReais = 0
    this.totalDeHorasExtras100PoCento = 0
    this.horaFormatadaTotal = ''
    this.totalDeHorasExtrasRealizadas = 0
    this.totalDeHorasExtrasRealizadasEmHoras = 0
    this.valorEmReaisDeTodasHorasRealizadas = 0
    this.valorEmReaisDeTodasHorasRealizadasSemFiltro = 0
    this.totalDeHorasRealizadasFormatadas = ''
    this.adicionalNoturno = 0
    this.funcionario = {}
    this.valorAdicionalNoturno = 0
    this.status = false
    this.statusNulo = false
    this.status100Porcento = false
    this.statusNulo100PorCento = false
  }

  async calculaValoresHorasExtras(dataInicial, dataFinal) {
    let di = moment(dataInicial).format('YYYY-MM-DD')
    let df = moment(dataFinal).format('YYYY-MM-DD')
    try {
      await this.zera()
      await this.calculototalDeHoras(di, df)
      await this.calculototalDeHoras100PorCento(di, df)
      await this.calculoAdicionalNoturnoHoras60PorCento(di, df)
      await this.calculoAdicionalNoturnoHoras100PorCento(di,df)
      await this.calculoValorTotalHorasExtras60PorCento(di, df)
      await this.calculoValorTotalHorasExtras100PorCento(di, df)
      await this.calculoTotalHorasRealizadas(di, df)
      await this.calculoValorTotalHorasRealizadas()
    } catch (e) {
      console.log(e.message)
    }

  }

  async calculoAdicionalNoturnoHoras60PorCento(dataInicial, dataFinal) {
    let di = await moment(dataInicial).format('YYYY-MM-DD')
    let df = await moment(dataFinal).format('YYYY-MM-DD')
    let milisegundos: number = 0
    let duracaoMilisegundos: number = 0
    let resultHoras: Observable<HoraExtra[]> = await this.horasService.getHorasExtras60porCento(di, df)
    

    await resultHoras.subscribe(result => {
      result.forEach(element => {
        if (element.horaCalculoInicial >= 22 && element.horaCalculoFinal <= 5) {
          let horaFinal = element.horaDataCalculoFinal
          let horaInicial = element.horaDataCalculoInicio
          milisegundos = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
          duracaoMilisegundos = moment.duration(milisegundos).asHours()
          this.valorAdicionalNoturno = duracaoMilisegundos
          this.status = true
          this.adicionalNoturno = (this.salarioFunc / 220) * 1.6 * 0.2
        }else {
          this.statusNulo = true
        }
      })
      return this.adicionalNoturno * this.valorAdicionalNoturno
    })
  }


  async calculoAdicionalNoturnoHoras100PorCento(dataInicial, dataFinal) {
    let di = await moment(dataInicial).format('YYYY-MM-DD')
    let df = await moment(dataFinal).format('YYYY-MM-DD')
    let milisegundos: number = 0
    let duracaoMilisegundos: number = 0

    let resultHoras: Observable<HoraExtra[]> = await this.horasService.getHorasExtras100porCento(di, df)
    
    await resultHoras.subscribe(result => {
      result.forEach(element => {
        if (element.horaCalculoInicial >= 22 && element.horaCalculoFinal < 1) {
          let horaFinal = element.horaDataCalculoFinal
          let horaInicial = element.horaDataCalculoInicio
          milisegundos = moment(horaFinal, "DD/MM/YYYY HH:mm:ss").diff(moment(horaInicial, "DD/MM/YYYY HH:mm:ss"));
          duracaoMilisegundos = moment.duration(milisegundos).asHours()
          this.valorAdicionalNoturno = duracaoMilisegundos
          this.status100Porcento = true
          this.adicionalNoturno = (this.salarioFunc / 220) * 2 * 0.20
          
        }else {
          this.statusNulo100PorCento = true
        }
      })
      return this.adicionalNoturno100PorCento * this.valorAdicionalNoturno100PorCento
    })
  }

  
  async calculoValorTotalHorasExtras60PorCento(dataInicial, dataFinal) {

    await this.getQuantidadeHorasExtrasEmHoras(dataInicial, dataFinal)
    let resultadoAdicionalNoturno: number = 0
    let resultadoAdicionalNoturnoNulo: number = 0

    let resultFuncionario: Observable<Funcionario[]> = await this.horasService.buscarFuncionario()
    await resultFuncionario.subscribe(result => {
      
      if (this.status) {
        resultadoAdicionalNoturno = this.adicionalNoturno * this.valorAdicionalNoturno
      }
      if (this.statusNulo) {
        resultadoAdicionalNoturnoNulo = ((result[0].salarioBruto / 220) * 1.6) * this.totalDeHorasExtrasEmHoras
      }
      return this.valorEmReais = resultadoAdicionalNoturno + resultadoAdicionalNoturnoNulo
    })
  }

  async calculoValorTotalHorasRealizadas() {
    this.resultFuncionario = await this.horasService.buscarFuncionario()
    await this.resultFuncionario.subscribe(() => {
      this.valorEmReaisDeTodasHorasRealizadas = this.valorEmReais + this.valorHora100PorCentoEmReais
    })
    return this.valorEmReaisDeTodasHorasRealizadas
  }

  async calculoValorTotalHorasExtras100PorCento(dataInicial, dataFinal) {
    this.valorHora100PorCentoEmReais = 0
    let resultadoAdicionalNoturno: number = 0
    let resultadoAdicionalNoturnoNulo: number = 0
    let di = moment(dataInicial).format('YYYY-MM-DD')
    let df = moment(dataFinal).format('YYYY-MM-DD')

    await this.getQuantidadeHorasExtras100PorCentoEmHoras(di, df)

    let resultFuncionario: Observable<Funcionario[]> = await this.horasService.buscarFuncionario()
    await resultFuncionario.subscribe(result => {

      if (this.status100Porcento) {
        resultadoAdicionalNoturno = this.adicionalNoturno100PorCento * this.valorAdicionalNoturno100PorCento
      }
      if (this.statusNulo100PorCento) {
        resultadoAdicionalNoturnoNulo =  (this.salarioFunc / 220 * 2  + this.adicionalNoturno100PorCento) * this.totalDeHorasExtras100PorCentoEmHoras
      }
      return this.valorHora100PorCentoEmReais = resultadoAdicionalNoturno + resultadoAdicionalNoturnoNulo
    })
    
  }

  async buscaDadosFuncionario(){
    let resultFuncionario: Observable<Funcionario[]> = await this.horasService.buscarFuncionario()
    await resultFuncionario.subscribe(result => {
      this.salarioFunc = result[0].salarioBruto
      this.funcao = result[0].funcao
      this.nomeFuncionario = result[0].nome
    })
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
    let di = await moment(dataInicial).format('YYYY-MM-DD')
    let df = await moment(dataFinal).format('YYYY-MM-DD')
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
      return this.horaFormatada = Math.floor(this.totalDeHorasExtras) + moment.utc(somaMilisegundos).format(":mm:ss");
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
      this.horas100PorcentoFormatada = Math.floor(this.totalDeHorasExtras100PoCento) + moment.utc(somaMilisegundos).format(":mm:ss");
    })
  }

  async calculoTotalHorasRealizadas(dataInicial, dataFinal) {
    let di = moment(dataInicial).format('YYYY-MM-DD')
    let df = moment(dataFinal).format('YYYY-MM-DD')
    let duracaoMilisegundos: number = 0
    var milisegundos: number = 0
    let somaMilisegundos: number = 0
    await this.horasService.getHorasExtrasTotais(di, df).subscribe(dados => {
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
      this.totalDeHorasRealizadasFormatadas = Math.floor(this.totalDeHorasExtrasRealizadas) + moment.utc(somaMilisegundos).format(":mm:ss");
    })
  }

  async presentLoading() {
    this.carregando = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' })
    return this.carregando.present()
  }

  async presentToast(mensagem: string) {
    const toast = await this.toastController.create({ message: mensagem, duration: 2000 })
    toast.present()
  }
}
