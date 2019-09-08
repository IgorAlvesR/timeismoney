import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistroHoraExtraPage } from './registro-hora-extra.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroHoraExtraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistroHoraExtraPage]
})
export class RegistroHoraExtraPageModule {}
