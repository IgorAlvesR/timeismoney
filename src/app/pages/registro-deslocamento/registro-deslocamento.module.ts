import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistroDeslocamentoPage } from './registro-deslocamento.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDeslocamentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistroDeslocamentoPage]
})
export class RegistroDeslocamentoPageModule {}
