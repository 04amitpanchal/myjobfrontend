import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CompanyTypeService {

  CompanyTypeURL:string='http://localhost:3000/comapnyType';
  constructor(private _http:HttpClient) { }
  companyType(){
    return this._http.get(this.CompanyTypeURL);
  }
}
