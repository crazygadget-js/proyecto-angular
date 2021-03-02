import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatSidenavModule } from '@angular/material/sidenav'; 



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule, 
    MatSidenavModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule , 
    MatSidenavModule
  ]
})
export class DesingModule { }
