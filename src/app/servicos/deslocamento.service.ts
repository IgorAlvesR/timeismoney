import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Deslocamento } from '../Models/deslocamento';
import { AutenticacaoService } from './autenticacao.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeslocamentoService {

  private deslocamento: AngularFirestoreCollection<Deslocamento>
  public deslocamentos:  Observable<Deslocamento[]>
  private colecaoDeslocamento: AngularFirestoreCollection<Deslocamento>

  constructor(private afs: AngularFirestore, private authService: AutenticacaoService) { 
    let userId = this.authService.getAuth().currentUser.uid
    this.deslocamento = this.afs.collection<Deslocamento>('Deslocamento')
    this.colecaoDeslocamento = this.afs.collection('Deslocamento', ref => ref.where('userId', '==', userId))
  }

  registrar(deslocamento: Deslocamento){
    return this.deslocamento.add(deslocamento)
  }

  getDeslocamentos() {
    return this.deslocamentos = this.colecaoDeslocamento.valueChanges()
  }

}