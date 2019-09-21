import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Funcionario } from '../Models/funcionario';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private colecaoFuncionario: AngularFirestoreCollection<Funcionario>;

  constructor(private afa: AngularFireAuth, private afs: AngularFirestore) 
  {
    this.colecaoFuncionario = this.afs.collection<Funcionario>('Funcionario');
  }

  login(funcionario: Funcionario) {
    return this.afa.auth.signInWithEmailAndPassword(funcionario.email, funcionario.senha);
  }

  registrarUsuario(funcionario: Funcionario) {
     return this.afa.auth.createUserWithEmailAndPassword(funcionario.email, funcionario.senha);
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
}
