import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { emp } from '../classes/employee';

@Injectable({
  providedIn: 'root'
})
export class LoginEmpService {

  loginVerifyUrl:string="http://localhost:3000/loginVerifyEmp/";
  constructor(private _http:HttpClient) { }
  loginVerifyEmp(item:emp){
    let h=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.loginVerifyUrl,body,{headers:h});
  }
}
