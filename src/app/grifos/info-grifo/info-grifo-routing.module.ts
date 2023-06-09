import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoGrifoPage } from './info-grifo.page';

const routes: Routes = [
  {
    path: '',
    component: InfoGrifoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoGrifoPageRoutingModule {}
