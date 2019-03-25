import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetcandidatesService {

  candidateurl:string='http://localhost:3000/getcandidates/';
  constructor(private _http:HttpClient) { }
  getallcandidates(){
    return this._http.get(this.candidateurl);
  }
}
