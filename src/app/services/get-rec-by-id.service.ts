import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetRecByIdService {

  getAllRecruiterURL:string='http://localhost:3000/getJobByIdForSingleJobField/';
  constructor(private _http:HttpClient) { }
  getRecByid(id){
    //alert(item.apply_date);
    // let h=new HttpHeaders().set('Content-Type','application/json');
    // let body=JSON.stringify(item);
    // console.log(item);
    // console.log(item);
    return this._http.get(this.getAllRecruiterURL+id);
 }
}
