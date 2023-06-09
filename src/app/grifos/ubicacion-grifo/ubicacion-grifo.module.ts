import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbicacionGrifoPageRoutingModule } from './ubicacion-grifo-routing.module';

import { UbicacionGrifoPage } from './ubicacion-grifo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicacionGrifoPageRoutingModule
  ],
  declarations: [UbicacionGrifoPage]
})
export class UbicacionGrifoPageModule {}
