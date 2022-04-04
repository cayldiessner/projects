import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Magic8ballPageRoutingModule } from './magic8ball-routing.module';

import { Magic8ballPage } from './magic8ball.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Magic8ballPageRoutingModule
  ],
  declarations: [Magic8ballPage]
})
export class Magic8ballPageModule {}
