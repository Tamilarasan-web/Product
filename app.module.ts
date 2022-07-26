import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { TranslateModule } from '@ngx-translate/core';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ItemEditDetailComponent } from './item/item-edit-detail/item-edit-detail.component';
import { SalesListComponent } from './sales/sales-list/sales-list.component';
import { SalesEditComponent } from './sales/sales-edit/sales-edit.component';
import { SalesEditDetailComponent } from './sales/sales-edit-detail/sales-edit-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

// UI
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';

import { MatTableModule} from '@angular/material/table';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule, MatProgressSpinner, MatSpinner } from '@angular/material/progress-spinner';
import {MatStepperModule} from '@angular/material/stepper';

import { CdkTableModule } from '@angular/cdk/table';

//Other Ui
import { NgbCollapseModule, NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileListComponent } from './user/user-profile-list/user-profile-list.component';
import { UserProfileEditComponent } from './user/user-profile-edit/user-profile-edit.component';

const appRoutes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers_ae', component: CustomerEditComponent },
  { path: 'sales', component: SalesListComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemEditComponent,
    ItemEditDetailComponent,
    SalesListComponent,
    SalesEditComponent,
    SalesEditDetailComponent,
    ProductListComponent,
    ProductEditComponent,
    UserProfileListComponent,
    UserProfileEditComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    NgbModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatTableModule,
    CdkTableModule,
    MatMenuModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatStepperModule,
    
    FormsModule,
    ReactiveFormsModule,

    
    //Other ui
    NgbNavModule,
    NgbTooltipModule,
    NgbCollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
