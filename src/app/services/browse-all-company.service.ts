import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrowseAllCompanyService {

  browsecompany:string='http://localhost:3000/admin';
  constructor(private _http:HttpClient) { }
  browseallcompany(){
    return this._http.get(this.browsecompany);
  }
}
