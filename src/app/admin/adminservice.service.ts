import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  durl:string='http://localhost:3000/all/';
  constructor(public _http:HttpClient) { }

  getalldishgetalldish()
  {
   return this._http.get(this.durl);
  }
}
