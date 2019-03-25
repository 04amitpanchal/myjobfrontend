import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProserviceService {
  prourl:string='http://localhost:3000/product/';
  constructor(private _http:HttpClient) { }
  getAll(){
    return this._http.get(this.prourl);
  }
  // addProduct(item:FormData)
  // {
  //   return this._http.post(this.prourl,item);
  // }
  addproduct(item:FormData){
    return this._http.post(this.prourl,item);
  }
}
