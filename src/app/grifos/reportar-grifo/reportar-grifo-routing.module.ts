import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportarGrifoPage } from './reportar-grifo.page';

const routes: Routes = [
  {
    path: '',
    component: ReportarGrifoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportarGrifoPageRoutingModule {}
