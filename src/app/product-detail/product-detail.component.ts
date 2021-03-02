import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from './../product.service';
import {Product} from '../product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product ;
  constructor(
    private route: ActivatedRoute ,
    private productservice: ProductService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id ;
      this.product = this.productservice.getProduct(id);

    });
  }

}
