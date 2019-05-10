import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAllEducationByEmpIdService {

 
  getAllEduidByEmpidURL:string="http://localhost:3000/getAllEducationByEmpId/";
  constructor(private _http:HttpClient) { }
  getAllEduByEmpId(id:string){
    // alert(id);

   return this._http.get(this.getAllEduidByEmpidURL+id);
}
}
