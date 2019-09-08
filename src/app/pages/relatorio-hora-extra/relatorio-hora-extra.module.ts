import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RelatorioHoraExtraPage } from './relatorio-hora-extra.page';

const routes: Routes = [
  {
    path: '',
    component: RelatorioHoraExtraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RelatorioHoraExtraPage]
})
export class RelatorioHoraExtraPageModule {}
