import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddCvService {

  addCvUrl:string="http://localhost:3000/addCv/";
  constructor(private _http:HttpClient) { }

  addCv(item:FormData){
    return this._http.post(this.addCvUrl,item);
 }
}
