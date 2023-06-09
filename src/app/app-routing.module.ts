import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./users/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./users/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'reportar-grifo',
    loadChildren: () => import('./grifos/reportar-grifo/reportar-grifo.module').then( m => m.ReportarGrifoPageModule)
  },
  {
    path: 'listar-grifos',
    loadChildren: () => import('./grifos/listar-grifos/listar-grifos.module').then( m => m.ListarGrifosPageModule)
  },
  {
    path: 'info-grifo',
    loadChildren: () => import('./grifos/info-grifo/info-grifo.module').then( m => m.InfoGrifoPageModule)
  },
  {
    path: 'ubicacion-grifo',
    loadChildren: () => import('./grifos/ubicacion-grifo/ubicacion-grifo.module').then( m => m.UbicacionGrifoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./users/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
