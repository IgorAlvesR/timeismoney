import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'entrar', pathMatch: 'full'},
  { path: 'entrar', loadChildren: './pages/entrar/entrar.module#EntrarPageModule', canActivate: [LoginGuard]},
  { path: 'cadastro-usuario', loadChildren: './pages/cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule'},
  {
    path: 'registro-hora-extra',
    loadChildren: './pages/registro-hora-extra/registro-hora-extra.module#RegistroHoraExtraPageModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'registro-final-hora-extra', 
    loadChildren: './pages/registro-final-hora-extra/registro-final-hora-extra.module#RegistroFinalHoraExtraPageModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'relatorio-hora-extra', 
    loadChildren: './pages/relatorio-hora-extra/relatorio-hora-extra.module#RelatorioHoraExtraPageModule',
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
