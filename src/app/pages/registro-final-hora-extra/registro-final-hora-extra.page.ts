import { Component, OnInit, NgZone, OnDestroy } from '@angular/core'
import * as moment from 'moment'
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service'
import { HoraExtraService } from 'src/app/servicos/hora-extra.service'
import { LoadingController, ToastController, NavController } from '@ionic/angular'
import { HoraExtra } from 'src/app/Models/hora-extra'
import { Keyboard } from '@ionic-native/keyboard/ngx'
import { Router, RouterPreloader } from '@angular/router'
import { Cidade } from 'src/app/Models/cidade'
import { Subscription } from 'rxjs/internal/Subscription'

@Component({
  selector: 'app-registro-final-hora-extra',
  templateUrl: './registro-final-hora-extra.page.html',
  styleUrls: ['./registro-final-hora-extra.page.scss'],
})
export class RegistroFinalHoraExtraPage implements OnInit {
 
  
  private horaExtraFinal: HoraExtra = {}
  public cidades = new Array<Cidade>()
  private carregando: any
  public dados: any
  private hora: any
  private data: any
  private deslocamentoSubscription: Subscription

  constructor(
    private authService: AutenticacaoService,
    private horaSevice: HoraExtraService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    public keyboard: Keyboard,
    private route: Router
  ) {}

  ngOnInit() {
    this.buscarCidades()
  }
  
  customAlertOptions: any = {
    header: 'Selecione a Cidade'
  }

  criarRelogio() {
    this.hora = moment().locale('pt-br').format('LTS')
    this.data = moment().locale('pt-br').format('LL')
    setInterval(() => {
      this.hora = moment().locale('pt-br').format('LTS')
      this.data = moment().locale('pt-br').format('LL')
    }, 1000)
  }

  ionViewWillEnter(){
    this.criarRelogio()
  }

  async registrarFinalHoraExtra() {

    await this.presentLoading()
    let horas = moment().hour()
    let minutos = moment().minute()
    this.horaExtraFinal.horaCalculoFinal = horas
    this.horaExtraFinal.minutoCalculoFinal = minutos
    this.horaExtraFinal.horaFinal = this.hora
    this.horaExtraFinal.userId = this.authService.getAuth().currentUser.uid
    this.horaExtraFinal.dataFinal = moment().locale('pt-br').format('YYYY-MM-DD')
    this.horaExtraFinal.horaDataCalculoFinal = moment().locale('pt-br').format('DD/MM/YYYY HH:mm:ss')
    
    
    try {
      if (this.horaExtraFinal.descricao == null || this.horaExtraFinal.descricao == '' || this.horaExtraFinal.localizacao == null || this.horaExtraFinal.localizacao == '') {
        this.presentToast("Preenha todos os campos!")
        this.carregando.dismiss()
      } else {
        await this.horaSevice.update(this.horaExtraFinal)
        await this.carregando.dismiss()
        await window.location.replace('registro-hora-extra')
      }
    } catch (error) {
      this.presentToast(error)
      this.carregando.dismiss()
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

  buscarCidades(){
    this.deslocamentoSubscription = this.horaSevice.buscarCidades().subscribe(result => {
       return this.cidades = result
    })
  }

}



