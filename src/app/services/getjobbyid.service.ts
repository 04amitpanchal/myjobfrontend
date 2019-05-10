import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { appliedJobIdForEmpClass } from '../classes/AppliedJobIdForEmp';

@Injectable({
  providedIn: 'root'
})
export class GetjobbyidService {

  getjobbyid:string='http://localhost:3000/getjobbyId/';
  constructor(private _http:HttpClient) { }


getJobById(id){
    // alert(id);
    // console.log(item);

    return this._http.get(this.getjobbyid+id);
  }
}

