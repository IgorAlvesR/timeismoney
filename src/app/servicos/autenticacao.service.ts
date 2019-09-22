import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Funcionario } from '../Models/funcionario';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private colecaoFuncionario: AngularFirestoreCollection<Funcionario>;

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
}
