import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAllRecNotificationService {

  getAllRecNotoficationUrl:string="http://localhost:3000/getAllRecNotification/";
  constructor(private _http:HttpClient) { }

  getAllRecNotification(id){
    return this._http.get(this.getAllRecNotoficationUrl+id);
  }
}
