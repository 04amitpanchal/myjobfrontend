import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { emp } from '../classes/employee';
@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  changePasswordUrl:string="http://localhost:3000/changePassword/";
  constructor(private _http:HttpClient) { }
  changePassword(item:emp){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    alert(item.emp_password);
    return this._http.put(this.changePasswordUrl+item.emp_id,body,{headers:h});
 }
}
