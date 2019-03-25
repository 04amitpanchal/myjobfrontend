import { Component, OnInit } from '@angular/core';
import { pro } from './productclass';
import { ProserviceService } from './proservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 arr:pro[]=[];

  constructor(private procall:ProserviceService,private _route:Router) { }

  ngOnInit() {
    this.procall.getAll().subscribe(
      (data:pro[])=>{
        console.log(data);
        this.arr=data;
      }
    );
  }

  addproduct(){
    this._route.navigate(['/addproduct']);
  }


}
