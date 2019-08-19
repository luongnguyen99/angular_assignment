import { Component, OnInit } from '@angular/core';
import { CategoryType } from '../CategoryType';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from "../services/product.service";
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  CategoryCurrent: CategoryType[];
  constructor(
    private productService: ProductService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    // console.log(this.routes.params);
    this.routes.params.subscribe(param => {
      this.productService.getCategory(param.id,).subscribe(data => {
        // console.log(data);
        return this.CategoryCurrent = data;
      })
    });
  }

  saveCategory(CategoryCurrent){
    // console.log(CategoryCurrent);
    this.productService.editCategory(CategoryCurrent).subscribe(data =>{
      this.router.navigateByUrl('/manager-categories');
    })
  }
}
