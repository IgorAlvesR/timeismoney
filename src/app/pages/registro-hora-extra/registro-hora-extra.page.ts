import { Component, OnInit, NgZone } from '@angular/core'
import * as moment from 'moment'
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service'
import { HoraExtraService } from 'src/app/servicos/hora-extra.service'
import { LoadingController, ToastController, NavController, AlertController } from '@ionic/angular'
import { HoraExtra } from 'src/app/Models/hora-extra'
import { ok } from 'assert'

@Component({
  selector: 'app-registro-hora-extra',
  templateUrl: './registro-hora-extra.page.html',
  styleUrls: ['./registro-hora-extra.page.scss'],
})
export class RegistroHoraExtraPage implements OnInit {


  private horaExtraInicio: HoraExtra = {}
  private carregando: any
  private hora: any
  private data: any
  
  constructor(
    private authService: AutenticacaoService,
    private horaSevice: HoraExtraService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private alertController: AlertController
  ) {
    this.criarRelógio()
  }

  criarRelógio() {
    setInterval(() => {
      this.hora = moment().locale('pt-br').format('LTS')
      this.data = moment().locale('pt-br').format('LL')
    }, 1000)
  }

  ngOnInit() {
    let result = this.horaSevice.buscarHoraPendente()
    result.subscribe(doc => {
      if(doc.length != 0){
        this.navCtrl.navigateRoot('registro-final-hora-extra')
        this.presentAlert()
      }
    })
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Lembrete',
      subHeader: 'Você possui uma hora extra para ser finalizada!',
      buttons: ['OK']
    })

    await alert.present()
  }

  async registrarInicioHoraExtra() {

    await this.presentLoading()
    let horas = moment().hours()
    let minutos = moment().minute()
    this.horaExtraInicio.horaCalculoInicial = horas
    this.horaExtraInicio.minutoCalculoInicial = minutos
    this.horaExtraInicio.horaInicial = this.hora
    this.horaExtraInicio.horaFinal = ''
    this.horaExtraInicio.userId = this.authService.getAuth().currentUser.uid
    this.horaExtraInicio.dataInicial = moment().locale('pt-br').format('L')
    this.horaExtraInicio.cont = new Date().getTime()

    try {
      await this.horaSevice.registrarHoraExtra(this.horaExtraInicio)
      await this.navCtrl.navigateRoot('registro-final-hora-extra')
      await this.carregando.dismiss()
     
    } catch (error) {
      this.presentToast(error)
      this.carregando.dismiss()
    }
  }

  async registrarHoraFinalPendente() {
    try {
      await this.presentLoading()
      await this.carregando.dismiss()
      await this.navCtrl.navigateRoot('registro-final-hora-extra')
    } catch (error) {
      console.log(error)
    }
  }

  async logout() {
    await this.presentLoading()
    await this.carregando.dismiss()
    try {
      await this.authService.logout()
    } catch (error) {
      this.presentToast(error)
    }
  }

  async presentLoading() {
    this.carregando = await this.loadingCtrl.create({ message: 'Por favor, aguarde...'})
    return this.carregando.present()
  }

  async presentToast(mensagem: string) {
    const toast = await this.toastCtrl.create({ message: mensagem, duration: 2000 })
    toast.present()
  }
}
