import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adminclass } from '../classes/adminclass';

@Injectable({
  providedIn: 'root'
})
export class UpdateRecPasswordService {

  updateRecPasswordurl:string='http://localhost:3000/updaterecruiter/';
  constructor(private _http:HttpClient) { }
  updateRecPassword(item:Adminclass){
    console.log(item);
    return this._http.post(this.updateRecPasswordurl,item);
 }
}
