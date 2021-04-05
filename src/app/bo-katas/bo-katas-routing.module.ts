import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoKatasComponent } from './bo-katas.component';

const routes: Routes = [{ path: '', component: BoKatasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoKatasRoutingModule { }
