import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { appliedJobIdForEmpClass } from '../classes/AppliedJobIdForEmp';

@Injectable({
  providedIn: 'root'
})
export class GetJobByIdForEmpServices {

  getjobbyid:string='http://localhost:3000/getjobbyrecidForeEmp/';
  constructor(private _http:HttpClient) { }


getJobByIdForEmp(id,item:appliedJobIdForEmpClass[]){
    // alert(id);
    console.log(item);
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.getjobbyid+id,body,{headers:h});
  }
}

