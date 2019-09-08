import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistroFinalHoraExtraPage } from './registro-final-hora-extra.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroFinalHoraExtraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistroFinalHoraExtraPage]
})
export class RegistroFinalHoraExtraPageModule {}
