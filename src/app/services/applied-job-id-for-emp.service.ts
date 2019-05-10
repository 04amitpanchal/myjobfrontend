import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppliedJobIdForEmpService {

  AppliedJobIdForEmpUrl:string="http://localhost:3000/getAppliedJobIdOfEmp/";
  constructor(private _http:HttpClient) { }
  AppliedJobIdForEmp(id){
    // console.log(item);
    return this._http.get(this.AppliedJobIdForEmpUrl+id);
 }
}
