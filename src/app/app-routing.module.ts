import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {LayoutComponent} from './layout/layout.component';
import {AdminGuard} from './admin.guard';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children : [

      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
       },
       {
        path: 'home' ,
        loadChildren: () => import('./home/home.module').then (m => m.HomeModule)
      } ,
      {
        path: 'products' ,
        loadChildren: () => import('./products/products.module').then (m => m.ProductsModule )
      } ,
      {
        path: 'products/:id',
        component: ProductDetailComponent
      } ,
      {
        path: 'contact' ,
        component: ContactComponent,
        canActivate: [AdminGuard]
      }
    ]
  } ,
  {

      path: 'admin',
      loadChildren: () => import ('./admin/admin.module').then (m => m.AdminModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
