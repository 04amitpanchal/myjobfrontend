import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetJobByFieldService {

  getJobByFieldUrl:string="http://localhost:3000/getJobByField/";
  constructor(private _http:HttpClient) { }

  getJobByField(id){
    return this._http.get(this.getJobByFieldUrl+id);
  }
}
