import { Component, OnInit } from '@angular/core';
import { ProductType } from '../ProductType';
import { CategoryType } from '../CategoryType';
// import
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  products: ProductType[];
  category: CategoryType[];
  public href: string = "";
  constructor(
    private productService: ProductService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.href = this.router.url;
    this.getProducts();
    this.getCategory();
  }

  getProducts() {
    this.routes.params.subscribe(param => {
      this.productService.getProducts(param.id).subscribe(data => {
        return this.products = data;
      })
    })
  }
  getCategory() {
    this.routes.params.subscribe(param => {
      
      this.productService.getCategory(param.id).subscribe(data => {
         console.log(data);
        return this.category = data;
      })
    })
  }
}



