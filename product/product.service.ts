import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn:'root'})

export class ProductService {

    apiUrl = 'http://localhost:8000';

    record_data: any;
    filter_data: any;
    onAfterSave$ = new BehaviorSubject({});

    constructor(
        private http: HttpClient,
        ) 
        {}
    

    GetList(postData: any)
    {
        return this.http.post(`${this.apiUrl}/tbl_product_list`, postData)
        .pipe(map((response: any) => response ));
    }

    fetchData(postData: any)
    {
        return this.http.post(`${this.apiUrl}/tbl_product_data`, postData)
        .pipe(map((response: any) => response ));
    }

    saveRecord(postData: any)
    {
        return this.http.post(`${this.apiUrl}/tbl_product_save`, postData)
        .pipe(map(( response: any) => response ));
    }

    deleteRecord(postData: any)
    {
        return this.http.post(`${this.apiUrl}/tbl_product_delete`, postData)
        .pipe(map((response: any) => response ));
    }
}