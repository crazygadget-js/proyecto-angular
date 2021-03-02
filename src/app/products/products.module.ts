import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from '../products/components/product/product.component';
import {ProductsComponent} from '../products/components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import {DesingModule} from '../design/desing.module'


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent, 

  ],
  imports: [
    ProductsRoutingModule,
    CommonModule, 
    DesingModule
 
  ],  
  exports:[
    DesingModule
  ]

})
export class ProductsModule { }
