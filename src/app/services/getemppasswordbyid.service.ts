import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { emp } from '../classes/employee';
@Injectable({
  providedIn: 'root'
})
export class GetemppasswordbyidService {

  getemppasswordbyidURL:string='http://localhost:3000/getEmppasswordid/';
  constructor(private _http:HttpClient) { }


  // getempPasswordbyID(id){
  //   alert(id);
  //   return this._http.get(this.getemppasswordbyidURL+id);
  // }
  getempPasswordbyID(item:emp){
    let h=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    alert(body);
    return this._http.post(this.getemppasswordbyidURL,body,{headers:h});
 }
}
