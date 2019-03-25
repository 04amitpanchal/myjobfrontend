import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetEmpFieldByEmpidService {

  getEmpfieldByEmpIdUrl:string="http://localhost:3000/getEmpFieldByempId/";
  constructor(private _http:HttpClient) { }

  getEmpfieldByEmp(id){
    return this._http.get(this.getEmpfieldByEmpIdUrl+id);
  }
}
