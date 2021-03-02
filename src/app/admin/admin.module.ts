import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './components/nav/nav.component';
import {DesingModule} from '../design/desing.module'


@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    AdminRoutingModule, 
    DesingModule
  ] , 
  exports : [
    DesingModule
  ]
})
export class AdminModule { }
