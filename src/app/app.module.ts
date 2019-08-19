import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ManagerComponent } from './manager/manager.component';
import { CategoryComponent } from './category/category.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CategoryManagerComponent } from './category-manager/category-manager.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    HomeComponent,
    NotFoundComponent,
    ContactComponent,
    AboutComponent,
    ManagerComponent,
    CategoryComponent,
    DetailProductComponent,
    CategoryManagerComponent,
    ProductManagerComponent,
    EditCategoryComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
