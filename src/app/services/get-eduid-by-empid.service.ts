import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetEduidByEmpidService {

  getEduidByEmpidURL:string="http://localhost:3000/geteduid/";
  constructor(private _http:HttpClient) { }
  getEduid(id:string){
    // alert(id);

   return this._http.get(this.getEduidByEmpidURL+id);
}
}
