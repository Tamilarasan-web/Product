import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { TranslationLoaderService } from 'src/app/translationloader.service';
import { ValidationService } from 'src/app/validation.service';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  action : string;
  dialogTitle: any;
  form: FormGroup;
  imageSrc: string = '';
  submitted = false;

  record: object = {};
  product_name = new FormControl('', [Validators.required]);
  product_code = new FormControl('', [Validators.required]);
  category = new FormControl('', [Validators.required]);

  navigateUrl : string = "product";
  
  lists_autocomplete: { [key: string]: any[] } = {
    items: undefined,
  };

  constructor(
    private _tranlate: TranslationLoaderService,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _formBuilder: FormBuilder,
    private  _productService: ProductService,
    public dialogRef: MatDialogRef<ProductEditComponent>,
    public _router: Router,
    private _spinner: NgxSpinnerService

  ) {
    this.action = _data.action;
    this.record = _data.record;
    this.dialogTitle = ( this.action === 'add' || this.action === 'copy') ? this._tranlate.getInstantValue('ADD PRODUCT') : this._tranlate.getInstantValue('EDIT PRODUCT');

   }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      id: [0],
      product_name: [null,(Validators.required)],
      product_code: [null, (Validators.required)],
      category: [null,(Validators.required)],
      img: new FormControl('', [Validators.required]),
    });
  }

  ngAfterViewInit(): void
  {
    Promise.resolve(null).then(() =>{
      this.onPageLoad();
    });
  }

    get f(){
    return this.form.controls;
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  onFileChange(fileInput) {
    const reader = new FileReader();
      
      const [file] = fileInput.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;        
        this.form.patchValue({img: reader.result});
        
      }
  }

  onPageLoad(): void
  {
    console.log("onPageLoad");
    
    this._productService.fetchData(this.record)
    .pipe(
      finalize(() => {        
        this.doShowSpinner(false);        
      })
    )
    .subscribe(res => {
      if(this.action === 'edit' || this.action === 'copy')
      {
       this.form.patchValue(res.data);
       console.log(res.data,"res");
       this.imageSrc = res.data.img;
        if(this.action === 'copy')
        {
          this.form.patchValue({id: 0});
        }
      }
    })
  }

  formValidation() {
    const controls = this.form.controls;

    if(this.form.invalid) {
      Object.keys(controls).forEach(controlName => 
        controls[controlName].markAsTouched()        
      );
      console.log("false");
      return false;
    }
    return true;
  }

  onOkClick(): void
  {
    console.log("OK");
    
    if(this.formValidation())
    {
      const formData = this.form.getRawValue();
      formData.action = this.action;

      this._productService.saveRecord(formData)
      .pipe(
        finalize(() =>{})
      )
      .subscribe(res => {
        res.action = this.action;
        res.id = res.upsert_id || res.id;
        console.log(formData,"formData");
               
        this._productService.onAfterSave$.next(res);

        this.dialogRef.close(this.form);

        this.record["id"] = res.id;
        this.onPageLoad();

        this._router.navigate([this.navigateUrl]);
      })
    }
  }

  onCancelClick(): void
  {
    console.log("close");
    
    if(this.form.dirty)
    {
      this.dialogRef.close();
    }else{
      this.dialogRef.close();
    }
  } 

  doShowSpinner(flag: boolean)
  {
    if(flag) {
      this._spinner.show(); 
    } else {
      this._spinner.hide();
    }
  }

}
