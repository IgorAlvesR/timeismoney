import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Deslocamento } from '../Models/deslocamento';
import { AutenticacaoService } from './autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class DeslocamentoService {

  private deslocamento: AngularFirestoreCollection<Deslocamento>


  constructor(private afs: AngularFirestore, private authService: AutenticacaoService) { 
    let userId = this.authService.getAuth().currentUser.uid
    this.deslocamento = this.afs.collection<Deslocamento>('Deslocamento')
  }

  registrar(deslocamento: Deslocamento){
    return this.deslocamento.add(deslocamento)
  }

}