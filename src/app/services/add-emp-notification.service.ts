import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { empNotification } from '../classes/empNotificationClass';

@Injectable({
  providedIn: 'root'
})
export class AddEmpNotificationService {

  addEmpNotificationurl:string="http://localhost:3000/empNotification/";

  constructor(private _http:HttpClient) { }

  addEmpNotification(item:empNotification){
    console.log(item);
    return this._http.post(this.addEmpNotificationurl,item);
 }
}
