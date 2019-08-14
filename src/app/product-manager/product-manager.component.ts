import { Component, OnInit } from '@angular/core';
import { ProductType } from '../ProductType';
import { CategoryType } from '../CategoryType';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {
  products : ProductType[] = new Array();
  selectedProduct: ProductType[];

  categories: CategoryType[];

  productNew: ProductType = new ProductType();
  constructor(
    private productService: ProductService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllProduct();
    this.getCategories();
    
    // console.log(this.products);
  }
 
  // lay tat ca product
  getAllProduct(){
    // laấy tất cả category
    var i = 0;
    this.productService.getCategories().subscribe( data => {
      // lặp để lấy product trong các category thông qua id category
      data.forEach(element => {
        this.productService.getProducts(element.id).subscribe(data =>{
          // lặp tiếp các giá trị cả về
          data.forEach(element => {
            
            // this.products[i] = element;
            this.products.push(element);
            i++;
          });  
        })
      });
    })
  }

  getCategories() {
    this.productService.getCategories().subscribe(data => {
      // console.log(data);
      return this.categories = data;
    })
  }

  saveProduct(selectedProduct) {
    this.productService.editProduct(selectedProduct).subscribe(data => {
      console.log('success');
      // this.router.navigateByUrl('/manager-categories');
    })
  }

  getProductCurrent(product){
    this.selectedProduct = product;
    // console.log(this.selectedProduct);
  }
  
  deleteProduct(product){
    this.productService.deleteProduct(product).subscribe(data =>{
      this.products = this.products.filter(item => item.id != product.id);
      // alert('Xóa thành công');
    })
  }

  addProduct(product){
    this.productService.addProduct(product).subscribe(data =>{
      this.products.push(data);
      // alert('Thêm thành công');

    })
  }
}
