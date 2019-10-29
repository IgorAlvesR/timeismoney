import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable, Subscription, Subscribable } from 'rxjs';
import { AutenticacaoService } from './autenticacao.service';
import { HoraExtra } from '../Models/hora-extra';
import { flatMap } from 'rxjs/operators';
import { Cidade } from '../Models/cidade';
import { Funcionario } from '../Models/funcionario';




@Injectable({
  providedIn: 'root'
})
export class HoraExtraService {

  private colecaoHoraExtra: AngularFirestoreCollection<HoraExtra>
  private colecaoHoraExtra60porCento: AngularFirestoreCollection<HoraExtra>
  private colecaoHoraExtra100porCento: AngularFirestoreCollection<HoraExtra>
  private colecaoHorasExtrasRealizadasSemFiltro: AngularFirestoreCollection<HoraExtra>
  private colecaoHorasExtrasRealizadas: AngularFirestoreCollection<HoraExtra>
  private colecaoCidades: AngularFirestoreCollection<Cidade>
  private colecaoHoraExtraRegistro: AngularFirestoreCollection<HoraExtra>
  public horasExtras: Observable<HoraExtra[]>
  private horas: DocumentReference
  private salario: DocumentReference
  public cidades: Observable<Cidade[]>
  public funcionario: Observable<Funcionario[]>
  public colecaoDatas: AngularFirestoreCollection<HoraExtra>
  public colecaoHoraExtraTotal: AngularFirestoreCollection<HoraExtra>
  public colecaoHoraExtra60porCentoSemFiltro: AngularFirestoreCollection<HoraExtra>
  public colecaoHoraExtra100porCentoSemFiltro: AngularFirestoreCollection<HoraExtra>
   
  constructor(private afs: AngularFirestore, private authService: AutenticacaoService) {
    //cria uma referencia da coleção HoraExtraInicio e HoraExtraFinal
    let userId = authService.getAuth().currentUser.uid
    this.colecaoHoraExtra60porCentoSemFiltro = this.afs.collection('HoraExtra', ref => ref.where('userId','==',userId).where('diaSemana','>',0))
    this.colecaoHoraExtra100porCentoSemFiltro = this.afs.collection('HoraExtra', ref => ref.where('userId','==',userId).where('diaSemana','==',0))
    this.colecaoCidades = this.afs.collection('Cidades')
    this.colecaoHoraExtraRegistro = this.afs.collection<HoraExtra>('HoraExtra')
    //this.colecaoHoraExtra = this.afs.collection('HoraExtra', ref => ref.where('userId', '==', userId).where('dataIniciaç','>=',dataInicial))
    this.colecaoHorasExtrasRealizadasSemFiltro = this.afs.collection('HoraExtra', ref => ref.where('userId','==',userId))
    this.colecaoHoraExtraTotal = this.afs.collection('HoraExtra', ref => ref.where('userId','==',userId).orderBy('horaInicial','asc'))
  }

  registrarHoraExtra(horaExtra: HoraExtra) {
    return this.colecaoHoraExtraRegistro.add(horaExtra)
  }

  getHorasExtras(dataInicial,dataFinal) {
    let userId = this.authService.getAuth().currentUser.uid
    this.colecaoHoraExtra = this.afs.collection('HoraExtra', ref => ref.where('userId', '==', userId)
    .where('dataInicial','>=',dataInicial).where('dataInicial','<=',dataFinal))
    return this.horasExtras = this.colecaoHoraExtra.valueChanges()
  }

  getHoras(){
    return this.horasExtras = this.colecaoHoraExtraTotal.valueChanges()
  }

  getHorasExtras60porCento(dataInicial,dataFinal){
    let userId = this.authService.getAuth().currentUser.uid
    this.colecaoHoraExtra60porCento = this.afs.collection('HoraExtra', ref => ref.where('userId','==',userId).where('dataInicial','>=',dataInicial).where('dataInicial','<=',dataFinal))
    return this.horasExtras = this.colecaoHoraExtra60porCento.valueChanges()
    
  }

  getHorasExtras100porCento(dataInicial,dataFinal){
    let userId = this.authService.getAuth().currentUser.uid
    this.colecaoHoraExtra100porCento = this.afs.collection('HoraExtra', ref => ref.where('userId','==',userId).where('dataInicial','>=',dataInicial).where('dataInicial','<=',dataFinal))
    return this.horasExtras = this.colecaoHoraExtra100porCento.valueChanges()
  }

  getHorasExtras60porCentoSemFiltro(){
    return this.horasExtras = this.colecaoHoraExtra60porCentoSemFiltro.valueChanges()
  }

  getHorasExtras100porCentoSemFiltro(){
    return this.horasExtras = this.colecaoHoraExtra100porCentoSemFiltro.valueChanges()
  }

  getHorasExtrasTotaisSemFiltro(){
    return this.horasExtras = this.colecaoHorasExtrasRealizadasSemFiltro.valueChanges()
  }

  getHorasExtrasTotais(dataInicial,dataFinal){
    let userId = this.authService.getAuth().currentUser.uid
    this.colecaoHorasExtrasRealizadas = this.afs.collection('HoraExtra', ref => ref.where('userId','==',userId).where('dataInicial','>=',dataInicial).where('dataInicial','<=',dataFinal))
    return this.horasExtras = this.colecaoHorasExtrasRealizadas.valueChanges()
  }

  async update(horaExtra: HoraExtra) {
    let userId = await this.authService.getAuth().currentUser.uid
    let query = await this.afs.collection('HoraExtra', ref => (ref.where('userId', '==', userId).limit(1).orderBy('cont', 'desc')))
      .snapshotChanges()
      .pipe(flatMap(horasOb => horasOb))
  
    await query.subscribe((doc) => {
      this.horas = doc.payload.doc.ref
      return this.horas.update(horaExtra)
    })

    return true
    
  }

  async buscarHoraPendente() {
    let userId = await this.authService.getAuth().currentUser.uid
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

  buscarFuncionario(){
    let email = this.authService.getAuth().currentUser.email
    return this.funcionario =  this.afs.collection('Funcionario', ref => (ref.where('email','==',email))).valueChanges()
  }


  async updateSalario(salarioBase) {
    let email = await this.authService.getAuth().currentUser.email
    let query = await this.afs.collection('Funcionario', ref => (ref.where('email', '==', email).limit(1)))
      .snapshotChanges()
      .pipe(flatMap(result => result))
  
    await query.subscribe((doc) => {
      this.salario = doc.payload.doc.ref
      return this.salario.update(salarioBase)
    })

    return true
  }
}