import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoGrifoPageRoutingModule } from './info-grifo-routing.module';

import { InfoGrifoPage } from './info-grifo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoGrifoPageRoutingModule
  ],
  declarations: [InfoGrifoPage]
})
export class InfoGrifoPageModule {}
