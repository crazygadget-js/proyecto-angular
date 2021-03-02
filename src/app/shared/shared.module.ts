import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
@NgModule({
  declarations: [
    ExponentialPipe,

  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
