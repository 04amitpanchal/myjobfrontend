import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetJobRecIdService {

  getjobbyrecid:string='http://localhost:3000/getJobByRecId/';
  constructor(private _http:HttpClient) { }


getJobByRecId(id){
    // alert(id);
    // console.log(item);

    return this._http.get(this.getjobbyrecid+id);
  }
}
