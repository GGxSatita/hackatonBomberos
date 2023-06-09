import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarGrifosPage } from './listar-grifos.page';

const routes: Routes = [
  {
    path: '',
    component: ListarGrifosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarGrifosPageRoutingModule {}
