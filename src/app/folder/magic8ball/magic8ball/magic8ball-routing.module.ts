import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Magic8ballPage } from './magic8ball.page';

const routes: Routes = [
  {
    path: '',
    component: Magic8ballPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Magic8ballPageRoutingModule {}
