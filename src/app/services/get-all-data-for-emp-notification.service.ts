import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { empNotificatioonData } from '../classes/empNotificationDataClass';

@Injectable({
  providedIn: 'root'
})
export class GetAllDataForEmpNotificationService {

  getAllDataForEmpNotificationurl:string='http://localhost:3000/getAllDataForEmpNotification/';
  constructor(private _http:HttpClient) { }

  getAllDataForEmpNotification(item:empNotificatioonData){

    let h=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    alert(body);
   return this._http.post(this.getAllDataForEmpNotificationurl,body,{headers:h});

  }
}
