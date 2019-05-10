import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsForEmpService {

  jobsforempUrl:string="http://localhost:3000/jobsforemp/";
  constructor(private _http:HttpClient) { }

  getjobsforemp(id){
    return this._http.get(this.jobsforempUrl+id);
  }
}
