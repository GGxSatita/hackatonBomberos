import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportarGrifoPageRoutingModule } from './reportar-grifo-routing.module';

import { ReportarGrifoPage } from './reportar-grifo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportarGrifoPageRoutingModule
  ],
  declarations: [ReportarGrifoPage]
})
export class ReportarGrifoPageModule {}
