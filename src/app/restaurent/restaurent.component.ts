import { Component, OnInit } from '@angular/core';
import { res } from './restaurenyclass';
import { RestaurentService } from '../restaurent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrls: ['./restaurent.component.css']
})
export class RestaurentComponent implements OnInit {

  constructor(public _pro:RestaurentService,public _route:Router) { }
  arr1:res[]=[];
  cusions_id:number;
  cusions_name:string;
  onclick(cusions_id:number)
  {
      alert(cusions_id);
    this._route.navigate(['/dishes',cusions_id]);
  }
  ngOnInit() {
    this._pro.getall().subscribe(
      (data:res[])=>{
        console.log(data);
        this.arr1=data;
      }

    );
  }

}
