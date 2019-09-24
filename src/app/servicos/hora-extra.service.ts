import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable, Subscription, Subscribable } from 'rxjs';
import { AutenticacaoService } from './autenticacao.service';
import { HoraExtra } from '../Models/hora-extra';
import { flatMap } from 'rxjs/operators';
import { Cidade } from '../Models/cidade';
import { Deslocamento } from '../Models/deslocamento';
import { map } from 'rxjs/operators';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';




@Injectable({
  providedIn: 'root'
})
export class HoraExtraService {

  private colecaoHoraExtra: AngularFirestoreCollection<HoraExtra>
  private colecaoCidades: AngularFirestoreCollection<Cidade>
  private colecaoHoraExtraRegistro: AngularFirestoreCollection<HoraExtra>
  public horasExtras: Observable<HoraExtra[]>
  private horas: DocumentReference
  public cidades: Observable<Cidade[]>

  constructor(private afs: AngularFirestore, private authService: AutenticacaoService) {
    //cria uma referencia da coleção HoraExtraInicio e HoraExtraFinal
    let userId = authService.getAuth().currentUser.uid
    this.colecaoCidades = this.afs.collection('Cidades')
    this.colecaoHoraExtraRegistro = this.afs.collection<HoraExtra>('HoraExtra')
    this.colecaoHoraExtra = this.afs.collection('HoraExtra', ref => ref.where('userId', '==', userId))
  }

  registrarHoraExtra(horaExtra: HoraExtra) {
    return this.colecaoHoraExtraRegistro.add(horaExtra)
  }

  getHorasExtras() {
    return this.horasExtras = this.colecaoHoraExtra.valueChanges()
  }

  update(horaExtra: HoraExtra) {
    let userId = this.authService.getAuth().currentUser.uid
    let query = this.afs.collection('HoraExtra', ref => (ref.where('userId', '==', userId).limit(1).orderBy('cont', 'desc')))
      .snapshotChanges()
      .pipe(flatMap(horasOb => horasOb))
  
    query.subscribe((doc) => {
      this.horas = doc.payload.doc.ref
      console.log(this.horas)
      return this.horas.update(horaExtra)
    })
    
  }

  buscarHoraPendente() {
    let userId = this.authService.getAuth().currentUser.uid
    return this.afs.collection('HoraExtra', ref => (ref.where('userId','==',userId).where('horaFinal','==',''))).valueChanges() 
  }

  deleteHoraExtra(id: string) {
    let colection = this.afs.collection('HoraExtra', ref => (ref.where('id','==',id))).snapshotChanges().pipe(flatMap(horasOb => horasOb))
    colection.subscribe(doc => {
      this.horas = doc.payload.doc.ref
      return this.horas.delete()
    })
  }
  
  buscarCidades(){
    return this.cidades = this.colecaoCidades.valueChanges()
  }

 

}