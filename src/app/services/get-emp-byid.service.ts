import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetEmpByidService {
  getempByidURL:string="http://localhost:3000/getEmpProfile/";
  constructor(private _http:HttpClient) { }
  getEmpById(id:string){
    // alert(id);

   return this._http.get(this.getempByidURL+id);
}
}
