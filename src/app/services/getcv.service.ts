import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetcvService {

  getcvURL:string="http://localhost:3000/getCv/";
  constructor(private _http:HttpClient) { }
  getcv(id:string){
    // alert(id);

   return this._http.get(this.getcvURL+id);
}
}
