import { Component, OnInit } from '@angular/core';
import { ProductType } from '../ProductType';
// import
import { ActivatedRoute,  Router } from '@angular/router';
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  product : ProductType[];
  constructor(
    private productService: ProductService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.routes.params.subscribe(param =>{
      this.productService.getProduct(param.id,param.product_id).subscribe( data => {
        console.log(data);
        return this.product = data;
    })
  });
  }

}
