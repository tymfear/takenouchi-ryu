import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechniqueSetsComponent } from './technique-sets/technique-sets.component';

const routes: Routes = [
  {
    path: '',
    component: TechniqueSetsComponent
  },
  { path: 'bo-katas', loadChildren: () => import('./bo-katas/bo-katas.module').then(m => m.BoKatasModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
