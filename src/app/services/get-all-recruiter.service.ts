import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Adminclass } from '../classes/adminclass';
import { recSendCompanyType } from '../classes/getSpecificCompanySendCompanyType';
@Injectable({
  providedIn: 'root'
})
export class GetAllRecruiterService {

  getAllRecruiterURL:string='http://localhost:3000/getSpecificCompany/';
  constructor(private _http:HttpClient) { }
  getSpecificRec(item){
    //alert(item.apply_date);
    // let h=new HttpHeaders().set('Content-Type','application/json');
    // let body=JSON.stringify(item);
    // console.log(item);
    console.log(item);
    return this._http.get(this.getAllRecruiterURL+item);
 }

}
