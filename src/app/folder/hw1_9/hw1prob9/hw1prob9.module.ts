import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hw1prob9PageRoutingModule } from './hw1prob9-routing.module';

import { Hw1prob9Page } from './hw1prob9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hw1prob9PageRoutingModule
  ],
  declarations: [Hw1prob9Page]
})
export class Hw1prob9PageModule {}
