import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Deslocamento } from '../Models/deslocamento';
import { AutenticacaoService } from './autenticacao.service';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DeslocamentoService {

  private deslocamento: AngularFirestoreCollection<Deslocamento>
  public deslocamentos:  Observable<Deslocamento[]>
  private colecaoDeslocamento: AngularFirestoreCollection<Deslocamento>
  private colecaoDeslocamentoFiltro: AngularFirestoreCollection<Deslocamento>
  private deslocamentoReference: DocumentReference

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

  getDeslocamentosComFiltro(dataInicial,dataFinal) {
    let userId = this.authService.getAuth().currentUser.uid
    this.colecaoDeslocamentoFiltro = this.afs.collection('Deslocamento', ref => ref.where('userId', '==', userId)
    .where('data','>=',dataInicial).where('data','<=',dataFinal))
    return this.deslocamentos = this.colecaoDeslocamentoFiltro.valueChanges()
  }

  deleteDeslocamento(id: string) {
    let colection = this.afs.collection('Deslocamento', ref => (ref.where('id','==',id))).snapshotChanges().pipe(flatMap(deslocamento => deslocamento))
    colection.subscribe(doc => {
      this.deslocamentoReference = doc.payload.doc.ref
      return this.deslocamentoReference.delete()
    })
  }

}