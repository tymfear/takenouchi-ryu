import { NgModule } from '@angular/core';

import { BoKatasRoutingModule } from './bo-katas-routing.module';
import { BoKatasComponent } from './bo-katas.component';
import { SharedModule } from '../shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [BoKatasComponent],
  imports: [
    SharedModule,
    BoKatasRoutingModule,
    MatExpansionModule
  ]
})
export class BoKatasModule { }
