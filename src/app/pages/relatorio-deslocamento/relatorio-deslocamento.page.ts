import { Component, OnInit } from '@angular/core';
import { DeslocamentoService } from 'src/app/servicos/deslocamento.service';
import { Deslocamento } from 'src/app/Models/deslocamento';
import { Subscription } from 'rxjs';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-relatorio-deslocamento',
  templateUrl: './relatorio-deslocamento.page.html',
  styleUrls: ['./relatorio-deslocamento.page.scss'],
})
export class RelatorioDeslocamentoPage implements OnInit {

  public deslocamentos = new Array<Deslocamento>()
  private deslocamentoSubscription: Subscription
  private toastCtrl: ToastController
  
  constructor(private deslocamentoService: DeslocamentoService, private alertController: AlertController) 
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

  async deleteDeslocamento(id: string) {
    try {
      await this.deslocamentoService.deleteDeslocamento(id);
    } catch (error) {
      this.toastCtrl.create({message:'Erro ao tentar excluir deslocamento'});
    }
  }

  async deleteConfirm(id: string){
    const alert = await this.alertController.create({
      header: 'Você deseja realmente excluir esse registro?',
      buttons: [
        {
          text: 'NÃO',
        }, {
          text: 'SIM',
          handler: () => {
            this.deleteDeslocamento(id)
          }
        }
      ]
    })
    await alert.present()
  }

  async mostrarHora(hora: string){
    const alert = await this.alertController.create({
      subHeader: "Horário do registro: "+hora,
    })
    await alert.present()
  }
}
