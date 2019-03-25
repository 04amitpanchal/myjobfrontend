import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { bill_details } from './bill_det';
import { bill } from './billclass';

@Injectable({
  providedIn: 'root'
})
export class CusionsService {
  curl:string='http://localhost:3000/item/';
  durl:string='http://localhost:3000/all/';
  byid:string='http://localhost:3000/it/';
  bill:string='http://localhost:3000/bill/';
  details:string='http://localhost:3000/details/';
  constructor(public _http:HttpClient) { }
  getallmenu(){
   return this._http.get(this.curl);
  }
  getalldish()
  {
   return this._http.get(this.durl);
  }
  getdbyid(name){
    return this._http.get(this.byid+name);
  }
  getBill()
  {
    return this._http.get(this.bill);
  }
  insertBill(item:bill)
  {
    console.log(item);
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

     return this._http.post(this.bill,body,{headers:head1});
  }
  insertBillDetails(item:bill_details[])
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.details,body,{headers:head1});
  }
}
