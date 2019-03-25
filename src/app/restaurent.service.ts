import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurentService {
  resurl:string='http://localhost:3000/rest/';
  itemurl:string='http://localhost:3000/item/';
  constructor(public _http:HttpClient) { }
  getall()
  {
    return this._http.get(this.itemurl);
  }
}
