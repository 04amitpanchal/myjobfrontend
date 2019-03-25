import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAllEmpNotificationService {

  getAllEmpNotificationUrl:string="http://localhost:3000/getEmpNotification/";

  constructor(private _http:HttpClient) { }
  getAllEmpNotification(id){
    return this._http.get(this.getAllEmpNotificationUrl+id);

  }
}
