import { Router } from '@angular/router'
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { Funcionario } from 'src/app/Models/funcionario'
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service'
import { LoadingController, ToastController } from '@ionic/angular'
import { Keyboard } from '@ionic-native/keyboard/ngx'


@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage implements OnInit {

  public funcionario: Funcionario = {}
  private carregando: any

  constructor(
    private rota: Router,
    private servicoAutenticacao: AutenticacaoService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public keyboard: Keyboard
  ) { }

  ngOnInit() {}
  
  async login() {
    await this.presentLoading()
    try {
      await this.servicoAutenticacao.login(this.funcionario)
    } catch (error) {
      let mensagem: string
      switch (error.code) {
        case 'auth/user-not-found':
          mensagem = 'Usuário não encontrado!'
          break
        case 'auth/invalid-email':
          mensagem = 'Email inválido!'
          break
        case 'auth/argument-error':
          mensagem = 'Preencha todos os campos corretamente'
          break
        default:
          mensagem = 'Não foi possível efetuar login, verifique seus dados e sua conexão'
          break
      }

      this.presentToast(mensagem)

    } finally {
      this.carregando.dismiss()
    }
  }

  async presentLoading() {
    this.carregando = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' })
    return this.carregando.present()
  }

  async presentToast(mensagem: string) {
    const toast = await this.toastCtrl.create({ message: mensagem, duration: 2000})
    toast.present()
  }

}
