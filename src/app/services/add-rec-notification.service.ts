import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { recNotification } from '../classes/recNotificationClass';

@Injectable({
  providedIn: 'root'
})
export class AddRecNotificationService {

  addRecUrl:string="http://localhost:3000/recNotification/";
  constructor(private _http:HttpClient) { }

  addRecNotification(item:recNotification){
    console.log(item);
    return this._http.post(this.addRecUrl,item);
  }
}
