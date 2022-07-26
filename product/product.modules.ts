import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from "@angular/material/form-field";

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes: Routes = [
  ];

  @NgModule({
      declarations: [
        ProductListComponent,
        ProductEditComponent
      ],

      imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        NgbModule,

        MatCheckboxModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,

        MatTableModule,
        MatSortModule,
        MatPaginatorModule

      ],
      exports: [
    ],
    entryComponents: [],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],

  })

  export class productModule {}