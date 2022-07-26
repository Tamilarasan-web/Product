import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslationLoaderService } from './translationloader.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',

})
export class AppCommonService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor(
        private _translationService: TranslationLoaderService,
    ) {}

    getCorrectFormatDate(strDate: any)
  {
    const is_Date = strDate || ''
    
    let dt = null;

    if(is_Date.trim() !== '')
    {
      dt = new Date(Number(`${strDate}`.substr(0,4)), Number(`${strDate}`.substr(5,2))-1, Number(`${strDate}`.substr(8,2)));    
    }
    return dt;
  }

  // errorMessage(msg: string, use_translate:boolean = true): void
  //     {
  //       var strMessage:any = (use_translate) ? this._translationService.getInstantValue(msg) : msg;
  //       this._snackBar.open(strMessage, '', {
  //         duration: 2000,
  //         horizontalPosition: this.horizontalPosition,
  //         verticalPosition: this.verticalPosition,
  //         panelClass: ['red-snackbar']
  //       });
  //     }

  //     successMessage(msg: string): void
  // {
  //   var strMessage:any = this._translationService.getInstantValue(msg);
  //   this._snackBar.open(strMessage, '', {
  //     duration: 2000,
  //     horizontalPosition: this.horizontalPosition,
  //     verticalPosition: this.verticalPosition,
  //     panelClass: ['green-snackbar']
  //   });
  // }
  }