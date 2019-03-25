import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetcompanynameService {

  companyurl:string='http://localhost:3000/getcompanyname';
  constructor(private _http:HttpClient) { }
  getcompanyname(){
    return this._http.get(this.companyurl);
  }
}
