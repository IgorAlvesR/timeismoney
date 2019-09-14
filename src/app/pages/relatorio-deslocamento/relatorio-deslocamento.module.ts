import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RelatorioDeslocamentoPage } from './relatorio-deslocamento.page';

const routes: Routes = [
  {
    path: '',
    component: RelatorioDeslocamentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RelatorioDeslocamentoPage]
})
export class RelatorioDeslocamentoPageModule {}
