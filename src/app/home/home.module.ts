import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent} from '../home/components/banner/banner.component';
import {HomeRoutingModule} from './home-routing.module'; 
import { SharedModule } from '../shared/shared.module'

@NgModule({
 declarations: [
     HomeComponent, 
     BannerComponent
 ],
 imports: [
     HomeRoutingModule,
     CommonModule,
     SharedModule
 ]
})

export class HomeModule { }
