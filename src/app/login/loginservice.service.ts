import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { log } from './loginclass';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  loginurl:string='http://localhost:3000/frlogin/';
  lurl:string='http://localhost:3000/lroute/';
  add:string="http://localhost:3000/images/"
  constructor(private _http:HttpClient) { }s
  loginget(item:log){
    let h=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.loginurl,body,{headers:h});
  }
  loginall(){
    return this._http.get(this.loginurl);
  }

  deleteAll(item:log[]){
    let h= new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.lurl,body,{headers:h});
  }
  addall(item:FormData)
  {
    return this._http.post(this.lurl,item);
  }
}

// let body=JSON.stringify(item);
//     let h=new HttpHeaders().set('Content-Type','application/json');
//     return this._http.post(this.lurl,body,{headers:h});
