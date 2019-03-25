import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  resurl:string='http://localhost:3000/it/';
  durl:string='http://localhost:3000/item/';
  aurl:string='http://localhost:3000/all/';
  gurl:string='http://localhost:3000/gb/';
  constructor(public _http:HttpClient) { }
  getdish()
  {
    return this._http.get(this.durl);
  }
  geta(name:string){
    return this._http.get(this.resurl+name);
  }
  getall(){
    return this._http.get(this.aurl);
  }
  getbyid(id:number){
    return this._http.get(this.gurl+id);
  }
}
