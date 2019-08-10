import { Injectable } from '@angular/core';
// import { DataProduct } from '../data';
import { ProductType } from '../ProductType';
import { CategoryType } from '../CategoryType';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private products = DataProduct;
  CategoryNew: CategoryType[];
  private API: string = 'http://5d441f902c6da100147e39e6.mockapi.io';
  constructor( private http: HttpClient) { }
 
  // start category
  getCategories(): Observable<CategoryType[]>{
    return this.http.get<CategoryType[]>(`${this.API}/categories`);
  };
  getCategory(id): Observable<CategoryType[]>{
    return this.http.get<CategoryType[]>(`${this.API}/categories/${id}`);
  };

  editCategory(category): Observable<CategoryType>{
    return this.http.put<CategoryType>(`${this.API}/categories/${category.id}`, category);
  }

  deleteCategory(category): Observable<CategoryType[]>{
    return this.http.delete<CategoryType[]>(`${this.API}/categories/${category.id}`);
  }
  addCategory(category):Observable<CategoryType>{
    return this.http.post<CategoryType>(`${this.API}/categories`, category)
  
  }
  // end category

  getProducts(id): Observable<ProductType[]>{
      return this.http.get<ProductType[]>(`${this.API}/categories/${id}/products`);
  }

  getProduct(id,product_id): Observable<ProductType[]>{
    return this.http.get<ProductType[]>(`${this.API}/categories/${id}/products/${product_id}`);
  }

  deleteProduct(id): Observable<ProductType[]>{
    return this.http.delete<ProductType[]>(`${this.API}/products/${id}`);
    
  }
 
  editProduct(product): Observable<ProductType>{
    return this.http.put<ProductType>(`${this.API}/products/${product.id}`, product)
  }
  addProduct(product):Observable<ProductType>{
    return this.http.post<ProductType>(`${this.API}/products`, product)
    // console.log(product);
    //   const newProduct = {
    //       id: this.products.length + 1,
    //        ...product
    //       }
    //   this.products.push(newProduct)
  }
  
}