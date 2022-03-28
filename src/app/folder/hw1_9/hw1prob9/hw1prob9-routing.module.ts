import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hw1prob9Page } from './hw1prob9.page';

const routes: Routes = [
  {
    path: '',
    component: Hw1prob9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hw1prob9PageRoutingModule {}
