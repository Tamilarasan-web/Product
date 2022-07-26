import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable()
export class ValidationService {

  constructor() { }


  static getAutoCompleteRecordObject(obj: any, value: any, use_store_value = true) {
    if(!value) return null;

    let valueObj = [];
    if(typeof value === 'number')
    {
        valueObj  = (use_store_value) ? obj.filter(option => +option.store_value === value) : obj.filter(option => +option.display_value === value);
    } else {
        if(use_store_value)
        {
            valueObj  = obj.filter(option => {
                return `${option.store_value}`.toString().toLocaleUpperCase().trim() === `${value}`.toString().toLocaleUpperCase().trim();
            });
        } else {
            valueObj  = obj.filter(option => {
                return `${option.display_value}`.toString().toLocaleUpperCase().trim() === `${value}`.toString().toLocaleUpperCase().trim();
            });
        }
    }

    return (valueObj.length > 0) ? valueObj[0] : {};
}

static setDateToTableFormat(strDate: any) {
    if(!strDate) 
    {
        return null;
    }   
    
    var date = new Date(new Date(strDate).getTime() - new Date(strDate).getTimezoneOffset()*60*1000).toISOString().substr(0,19).replace('T', ' ');
    // return moment(date).format('YYYY-MM-DD');

    //return moment(strDate).format('YYYY-MM-DD');
} 

}
