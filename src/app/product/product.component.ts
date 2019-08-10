import { Component, OnInit } from '@angular/core';
import { ProductType } from '../ProductType';
import { CategoryType } from '../CategoryType';
// import
import { ProductService } from "../services/product.service";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products : ProductType[];
  categories : CategoryType[];
  
  constructor(
    // inject
    private productService: ProductService
    ) 
  { 

  }
  ngOnInit() 
  {
    // this.getCategories();
    // this.getProducts();
  
  }


  
  // getCategories() {
  //   this.productService.getCategories().subscribe( data => {
  //     console.log(data);
  //     return this.categories = data;
  //   })
  // }

}
