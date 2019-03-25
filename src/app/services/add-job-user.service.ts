import { Injectable } from '@angular/core';
import { addjob } from '../classes/addjobClass';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddJobUserService {

  addJobUrl:string="http://localhost:3000/addJobUser/";
  constructor(private _http:HttpClient) { }
  addJobUser(item:addjob){
    let h=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    alert(body);
    return this._http.post(this.addJobUrl,body,{headers:h});
 }
}
