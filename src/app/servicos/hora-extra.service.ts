import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { AutenticacaoService } from './autenticacao.service';
import { HoraExtra } from '../Models/hora-extra';
import { map, flatMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HoraExtraService {

  private colecaoHoraExtra: AngularFirestoreCollection<HoraExtra>
  private colecaoHoraExtraRegistro: AngularFirestoreCollection<HoraExtra>
  public horasExtras: Observable<HoraExtra[]>
  private horas: DocumentReference

  constructor(private afs: AngularFirestore, private authService: AutenticacaoService) {
    //cria uma referencia da coleção HoraExtraInicio e HoraExtraFinal
    let userId = authService.getAuth().currentUser.uid
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
    let horasOb: Observable<any[]>
    let userId = this.authService.getAuth().currentUser.uid

    let query = this.afs.collection('HoraExtra', ref => (ref.where('userId', '==', userId).limit(1).orderBy('cont', 'desc')))
      .snapshotChanges()
      .pipe(flatMap(horasOb => horasOb))

    query.subscribe(doc => {
      this.horas = doc.payload.doc.ref
      return this.horas.update(horaExtra)
    })
  }

  buscarHoraPendente() {
    let userId = this.authService.getAuth().currentUser.uid
    return this.afs.collection('HoraExtra', ref => (ref.where('userId','==',userId).where('horaFinal','==',''))).valueChanges() 
  }

  deleteHoraExtra(id: string) {
    let horasOb: Observable<any[]>
    let colection = this.afs.collection('HoraExtra', ref => (ref.where('id','==',id))).snapshotChanges().pipe(flatMap(horasOb => horasOb))
    colection.subscribe(doc => {
      this.horas = doc.payload.doc.ref
      return this.horas.delete()
    })
  }

 

}