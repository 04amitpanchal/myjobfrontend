import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { recNotificationData } from '../classes/recNotificationDataClass';
import { recNotification } from '../classes/recNotificationClass';

@Injectable({
  providedIn: 'root'
})
export class GetAllDataForRecNotificationService {

  getAllDataForRecNotificationurl:string="http://localhost:3000/getAllDataForRecNotification/";
  constructor(private _http:HttpClient) { }

  getAllDataForRecNotification(item:recNotification){
    //return this._http.get(this.getAllDataForRecNotificationurl);
    let h=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    console.log(item.fk_emp_id,item.fk_apply_id,item.fk_job_id,item.fk_rec_id);
    return this._http.post(this.getAllDataForRecNotificationurl,body,{headers:h});
  //  return this._http.post(this.getAllDataForRecNotificationurl,body,{headers:h});
  }
}
