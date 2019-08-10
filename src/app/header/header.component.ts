import { Component, OnInit } from '@angular/core';
import { CategoryType } from '../CategoryType';
// import
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories : CategoryType[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.productService.getCategories().subscribe( data => {
      // console.log(data);
      return this.categories = data;
    })
  }
}
