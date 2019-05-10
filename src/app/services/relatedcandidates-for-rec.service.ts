import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RelatedcandidatesForRecService {

  getrelatedcandidatesUrl:string="http://localhost:3000/relatedcandidates/";
  constructor(private _http:HttpClient) { }

  getrelatedcandidates(id){
    return this._http.get(this.getrelatedcandidatesUrl+id);
  }
}
