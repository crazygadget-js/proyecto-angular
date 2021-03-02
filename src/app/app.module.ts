import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {DesingModule} from './design/desing.module';
import { ContactComponent } from './contact/contact.component';
import {HeaderComponent} from './shared/components/header/header.component'
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import {SharedModule} from './shared/shared.module';
import {FooterComponent} from './shared/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    ContactComponent,
    ProductDetailComponent,
    LayoutComponent,
    AppComponent, 
    HeaderComponent,  
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    BrowserAnimationsModule, 
    DesingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
