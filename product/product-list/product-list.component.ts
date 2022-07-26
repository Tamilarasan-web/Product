import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgxSpinnerService } from 'ngx-spinner';
import { merge, Subscription } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  dataSource = [];
  form: FormGroup;
  filterParameters: FormGroup;
  totalRecords = 0;

  filterBy = {};
  sort_filterBy = {};
  dialogModueAE: any;
  showSideBar = true;
  @ViewChild('initialCtrlFocus') initialCtrlFocus: ElementRef;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private subscriptions: Subscription[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _productService: ProductService,
    private _spinner: NgxSpinnerService,
    private _matDialog: MatDialog

  ) {
    this.filterParametersGroup();
   }

  ngOnInit(): void {
    this.totalRecords = 0;

    const paginatorSubscriptions = merge(this.sort.sortChange, this.paginator.page).pipe(
			tap(() => this.onReqToPageLoad('SORT_BY', ''))
		)
		.subscribe();
		this.subscriptions.push(paginatorSubscriptions);

    this.filterParametersGroup();

    this.form = this._formBuilder.group({
      product_name: ['', Validators.required],
      product_code: ['', Validators.required],
      category: ['', Validators.required],
    });
    this.onReqToPageLoad('INITIAL_LOAD','');
  }

  ngAfterVieweInit()
  {    
    this.initialCtrlFocus.nativeElement.focus();

    this.onReqToPageLoad('INITIAL_LOAD','');
  }

  onReqToPageLoad(action: string, data: any)
  {    
    Promise.resolve(null).then(async () => {
      var tempFilterBy : object;
      tempFilterBy = this.filterParameters.getRawValue();

      if(action === 'add')
    {
      this.filterParameters.reset();
      tempFilterBy = this.filterParameters.getRawValue();
      tempFilterBy['id'] = data.id;
    } else if(action === 'SEARCH_LIST')
    {
      this.sort_filterBy = tempFilterBy;
    } else if(action === 'SORT_BY')
    {
      tempFilterBy = this.sort_filterBy;
    }
    if (action !== 'SORT_BY')
    {
      this.paginator.pageIndex = 0
    }

    this.filterBy = {
      CurrentPageNumber: this.paginator.pageIndex+1,
      filterParameters: tempFilterBy,
      action: action,
      PageSize: (action === 'INITIAL_LOAD') ? 0: this.paginator.pageSize,
      order_by: 'asc',
      order_by_field: 'PRODUCT_ID',
    }
    this._productService.GetList(this.filterBy)
    .pipe(
      finalize(() => {
        this._spinner.hide();
      })
    )
    .subscribe(
      (res: any) => {
        if(res['error'] === 1)
        {          
        }else{
          if(action === 'INITIAL_LOAD')
          {}
          this.dataSource = res.record_list;
          this.totalRecords = res.total_rows;
          
        }
      }
    )
    })
  }

  filterParametersGroup()
  {
    this.filterParameters = this._formBuilder.group({
      product_name: [null],
      product_code: [null],
    })
  }

  doShowFilter()
  {
    this.showSideBar = true;
  }

  onSearchClick(): void
  {
    this.onReqToPageLoad('SEARCH_LIST','');
  }

  onRowDblClick(row: any): void
  {
    var record: object = {id: row.id}
    this.openEditDialogWindow('edit', record);
  }

  pagination(): void
  {
    this.onReqToPageLoad('SORT_BY', '');
  }

  onEditClick(action_for: string, row): void
  {
    var record: object = {id: row['id']};
    console.log(row);
    this.openEditDialogWindow(action_for, record);    
  }

  openEditDialogWindow(action: string, record: any): void
  {
    this.dialogModueAE = this._matDialog.open(ProductEditComponent,{
      disableClose: true,
      height: '475px',
      width: '309px',
      data: {
        action : action,
        record : record
      }
    })
  }

  onDeleteClick(row): void
  {
    console.log("delete");
    
      var deleted_ids : string = row['id'];
      console.log(row);
  
      this._productService.deleteRecord({id: deleted_ids})
      .pipe(
        finalize(() =>{})
      )
      .subscribe(
        res => {
          if(res['error'] === 1)          
          {
          console.log("error");
          }else{
            this.onSearchClick();
            console.log("ok");
            
          }
        });
  }
}
