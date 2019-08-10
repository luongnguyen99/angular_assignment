import { Component, OnInit } from '@angular/core';
import { CategoryType } from '../CategoryType';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from "../services/product.service";


@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.scss']
})
export class CategoryManagerComponent implements OnInit {
  categories: CategoryType[];
  selectCategory: CategoryType[];
  categoryNew : CategoryType = new CategoryType();
  constructor(
    private productService: ProductService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCategories();
  
  }

  getCategories() {
    this.productService.getCategories().subscribe( data => {
      // console.log(data);
      return this.categories = data;
    })
  }

  getId(category){
    return this.selectCategory = category;
  }

  saveCategory(selectCategory){
    this.productService.editCategory(selectCategory).subscribe( data => {
      this.router.navigateByUrl('/manager-categories');
    })
  }

  deleteCategory(category){
    
    this.productService.deleteCategory(category).subscribe( data => {
      this.categories = this.categories.filter(item => item.id != category.id);
      
    })
  }


  saveAddCategory(){
    this.productService.addCategory(this.categoryNew).subscribe( data =>{
      this.categories.push(data);
    })
  }
}
