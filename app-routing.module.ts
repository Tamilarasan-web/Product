import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { SalesListComponent } from './sales/sales-list/sales-list.component';
import { SalesEditComponent } from './sales/sales-edit/sales-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { UserProfileListComponent } from './user/user-profile-list/user-profile-list.component';
import { UserProfileEditComponent } from './user/user-profile-edit/user-profile-edit.component';


const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.modules').then(m=> m.customerModule)
  },
  {
    path: 'customer',
    component: CustomerListComponent,
  },
  {
    path: 'item',
    component: ItemListComponent,
  },
  {
    path: 'item_ae',
    component: ItemEditComponent
  },
  {
    path: 'sales',
    component: SalesListComponent
  },
  {
    path: 'sales_ae',
    component: SalesEditComponent
  },
  { 
    path: 'product',
    component: ProductListComponent
  },
  {
    path: 'product_ae',
    component: ProductEditComponent
  },
  {
    path: 'user',
    component: UserProfileListComponent
  },
  {
    path: 'user_ae',
    component: UserProfileEditComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
