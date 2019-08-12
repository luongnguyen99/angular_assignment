import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent} from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ManagerComponent } from './manager/manager.component';
import { CategoryComponent } from './category/category.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CategoryManagerComponent } from './category-manager/category-manager.component';
import { ProductManagerComponent} from './product-manager/product-manager.component';




const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent },
  {path:'product', component: ProductComponent},
  {path:'contact', component: ContactComponent},
  {path:'about', component: AboutComponent},
  {path:'manager', component: ManagerComponent},
  {path:'manager-categories', component: CategoryManagerComponent},
  {path:'manager-products', component: ProductManagerComponent},

  //category
  {path:'category/:id', component: CategoryComponent},

  // product detail
  {path:'category/:id/products/:product_id', component: DetailProductComponent},

  // last
  {path : '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
