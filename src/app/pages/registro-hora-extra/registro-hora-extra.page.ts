import { Component, OnInit, NgZone, OnDestroy } from '@angular/core'
import * as moment from 'moment'
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service'
import { HoraExtraService } from 'src/app/servicos/hora-extra.service'
import { LoadingController, ToastController, NavController, AlertController } from '@ionic/angular'
import { HoraExtra } from 'src/app/Models/hora-extra'
import { AngularFirestore } from '@angular/fire/firestore'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { InternetService } from 'src/app/servicos/internet.service'


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
  private disconnectSubscription: Subscription

  constructor(
    private authService: AutenticacaoService,
    private horaSevice: HoraExtraService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private alertController: AlertController,
    private angularFirestore: AngularFirestore,
    private route: Router,
    private internetService: InternetService
  )
  {
    
  }

  async criarRelógio() {
    this.hora = moment().locale('pt-br').format('LTS')
    this.data = moment().locale('pt-br').format('LL')
    await setInterval(() => {
      this.hora = moment().locale('pt-br').format('LTS')
      this.data = moment().locale('pt-br').format('LL')
    }, 1000)
  }


  ionViewDidEnter() {
    this.criarRelógio()
  }

  ngOnInit() {
    this.verificarHoraExtraPendente()
  }

  async verificarHoraExtraPendente() {
    let result = await this.horaSevice.buscarHoraPendente()
    var botao = await document.getElementById('botao')
    await result.subscribe(doc => {
      if (doc.length > 0) {
        botao.onclick = () => (this.presentAlert())
      } else {
        botao.onclick = () => this.registrarInicioHoraExtra()
      }
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Lembrete',
      subHeader: 'Você possui hora extra para ser finalizada, deseja finaliza-la ?',
      buttons: [
        {
          text: 'SIM',
          handler: () => {
            this.navCtrl.navigateRoot('registro-final-hora-extra')
          }
        }, {
          text: 'NÃO'
         
        }
      ]
    })
    await alert.present()
  }

  async registrarInicioHoraExtra() {
    await this.presentLoading()   
    let horas = moment().hours()
    let minutos = moment().minute()
    this.horaExtraInicio.id = this.angularFirestore.createId();
    this.horaExtraInicio.horaCalculoInicial = horas
    this.horaExtraInicio.minutoCalculoInicial = minutos
    this.horaExtraInicio.horaInicial = this.hora
    this.horaExtraInicio.horaFinal = ''
    this.horaExtraInicio.userId = this.authService.getAuth().currentUser.uid
    this.horaExtraInicio.dataInicial = moment().locale('pt-br').format('L')
    this.horaExtraInicio.cont = new Date().getTime()
    this.horaExtraInicio.diaSemana = 0
    this.horaExtraInicio.horaDataCalculoInicio = moment().locale('pt-br').format('DD/MM/YYYY HH:mm:ss')
   
    try {
      if (this.horaExtraInicio.diaSemana != 6 && this.horaExtraInicio.diaSemana != 0) {
        if ((this.horaExtraInicio.horaCalculoInicial >= 8 && this.horaExtraInicio.horaCalculoInicial < 12)
          || (this.horaExtraInicio.horaCalculoInicial == 13 && this.horaExtraInicio.minutoCalculoInicial > 30)
          || (this.horaExtraInicio.horaCalculoInicial > 13 && this.horaExtraInicio.horaCalculoInicial < 18)) {
          await this.presentToast("Não é possível realizar hora extra no período normal!")
          await this.carregando.dismiss()
        } else {
          await this.horaSevice.registrarHoraExtra(this.horaExtraInicio)
          await this.navCtrl.navigateRoot('registro-final-hora-extra')
          await this.carregando.dismiss()
        }
      } else {
        await this.horaSevice.registrarHoraExtra(this.horaExtraInicio)
        await this.navCtrl.navigateRoot('registro-final-hora-extra')
        await this.carregando.dismiss()
      }

    } catch (error) {
      this.presentToast(error)
      this.carregando.dismiss()
    }
  }

  async logout() {
    await this.presentLoading()
    try {
      await this.authService.logout()
      await this.carregando.dismiss()
    } catch (error) {
      this.presentToast(error)
    }
  }
  
  async presentLoading() {
    this.carregando = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' })
    return this.carregando.present()
  }

  async presentToast(mensagem: string) {
    const toast = await this.toastCtrl.create({ message: mensagem, duration: 2000 })
    toast.present()
  }
}
