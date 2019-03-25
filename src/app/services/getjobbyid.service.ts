import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetjobbyidService {

  getjobbyid:string='http://localhost:3000/RecruiterPostedJob/';
  constructor(private _http:HttpClient) { }


  getJobById(id){
    alert(id);
    return this._http.get(this.getjobbyid+id);
  }
}
