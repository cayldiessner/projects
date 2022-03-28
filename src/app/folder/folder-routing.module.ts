import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'madlib',
    loadChildren: () => import('./madlib/madlib/madlib.module').then( m => m.MadlibPageModule)
  },
  {
    path: 'hw1-prob10',
    loadChildren: () => import('./hw1_10/hw1-prob10/hw1-prob10.module').then( m => m.Hw1Prob10PageModule)
  },
  {
    path: 'hw1prob9',
    loadChildren: () => import('./hw1_9/hw1prob9/hw1prob9.module').then( m => m.Hw1prob9PageModule)
  },
  {
    path: 'hw1prob12',
    loadChildren: () => import('./hw1_12/hw1prob12/hw1prob12.module').then( m => m.Hw1prob12PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
