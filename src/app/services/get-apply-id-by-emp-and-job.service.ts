import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { recNotification }from '../classes/recNotificationClass';
import { ApplyForRecNotificationClass } from '../classes/ApplyForRecNotification';
@Injectable({
  providedIn: 'root'
})
export class GetApplyIdByEmpAndJobService {

  addrecUrl:string="http://localhost:3000/getApplyIdByEmpAndJob/";

  constructor(private _http:HttpClient) {}
  getApplyIdByEmpAndJob(item:ApplyForRecNotificationClass){
    let h=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    alert("getApply"+body);
   return this._http.post(this.addrecUrl,body,{headers:h});
  }
}
