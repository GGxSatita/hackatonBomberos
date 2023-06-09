import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarGrifosPageRoutingModule } from './listar-grifos-routing.module';

import { ListarGrifosPage } from './listar-grifos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarGrifosPageRoutingModule
  ],
  declarations: [ListarGrifosPage]
})
export class ListarGrifosPageModule {}
