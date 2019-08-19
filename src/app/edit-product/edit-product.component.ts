import { Component, OnInit } from '@angular/core';
import { ProductType } from '../ProductType';
import { CategoryType } from '../CategoryType';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from "../services/product.service";
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productCurrent : ProductType[];
  categories: CategoryType[];
  category_id = Number;
  product_id = Number;
  constructor(
    private productService: ProductService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProduct();
    this.getCategories();
  }
  getCategories(){
    this.routes.params.subscribe(param => {
      this.productService.getCategories().subscribe(data => {
        this.categories = data;
      })
    })
  }
  
  getProduct(){
    this.routes.params.subscribe(param =>{
      this.productService.getProduct(param.category_id,param.product_id).subscribe(data =>{
        // console.log(data);
        this.productCurrent = data;
      })
    })
  }

  saveProduct(productCurrent){
    this.productService.editProduct(productCurrent).subscribe(data => {
      this.router.navigateByUrl('/manager-products');
    })
  }
}
