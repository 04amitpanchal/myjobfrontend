import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetResByApplyService {



  getResponseByApplyIdUrl:string="http://localhost:3000/getResByApplyId/";
  constructor(private _http:HttpClient) { }

  getResponseByApplyId(id){
    return this._http.get(this.getResponseByApplyIdUrl+id);
  }
}
