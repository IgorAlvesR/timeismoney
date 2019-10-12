import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Funcionario } from '../Models/funcionario';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Usuario } from '../Models/usuario';
import { flatMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private colecaoFuncionario: AngularFirestoreCollection<Funcionario>;
  private funcionario: DocumentReference


  constructor(private afa: AngularFireAuth, private afs: AngularFirestore) 
  {
    this.colecaoFuncionario = this.afs.collection<Funcionario>('Funcionario');
  }

  login(usuario: Usuario) {
    return this.afa.auth.signInWithEmailAndPassword(usuario.email, usuario.senha);
  }

  registrarUsuario(usuario: Usuario) {
     return this.afa.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha);
  }

  registrarFuncionario(funcionario: Funcionario){
    return this.colecaoFuncionario.add(funcionario);
  }

  logout() {
    return this.afa.auth.signOut();
  }

  getAuth() {
    return this.afa.auth;
  }

  async update(salarioBase) {
    let email = await this.getAuth().currentUser.email
    let query = await this.afs.collection('Funcionario', ref => (ref.where('email', '==', email).limit(1)))
      .snapshotChanges()
      .pipe(flatMap(horasOb => horasOb))
  
    await query.subscribe((doc) => {
      this.funcionario = doc.payload.doc.ref
      return this.funcionario.update(salarioBase)
    })
    
  }
}
