import { Component, OnInit } from '@angular/core';
import { CusionsService } from './cusions.service';
import { cusions } from './cusionsclass';
import { dish } from './dishclass';
import { bill_details } from './bill_det';
import { bill } from './billclass';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cusions',
  templateUrl: './cusions.component.html',
  styleUrls: ['./cusions.component.css']
})
export class CusionsComponent implements OnInit {

  constructor(private _cus:CusionsService,private _route:Router) { }
  arr:cusions[]=[];
  arr1:dish[]=[];
  bill:dish[]=[];
  price:number[]=[];
  qty:number[]=[];
  Item:dish[]=[];
  qtydrop:number[]=[];
  bill_tbl:bill_details[]=[];
  det:number;
  cusions_name:string;
  tamt:number=0;
  x:number;
  i:number;
  id:number=0;
  password:number=0;

  onpast(id)
  {
    this._route.navigate(['/past',id]);
  }

  onClickPayment(){
    this._cus.insertBill(new bill(4,this.tamt,1,124)).subscribe(
      (data:any)=>
      {
        console.log(data);
        alert('inserted');
        for(this.i=0;this.i<bill.length;this.i++)
      {
          this.bill_tbl.push(new  bill_details(this.arr1[this.i].dish_id,this.qty[this.i],this.price[this.i],data.insertId));
      }
      this._cus.insertBillDetails(this.bill_tbl).subscribe(
        (data:any)=>
        {
          alert("record added sucessfully..");

        }
      );

      }

          );
  }

  onDelete(i)
  {
    this.bill.splice(i,1);
    this.price.splice(i,1);
    this.qty.splice(i,1);
    this.tamt=0;
    for(this.x=0;this.x<this.price.length;this.x++)
    {
      this.tamt+=this.price[this.x];
    }
  }

  onadd(item:dish,i:number=0){
    if (this.bill.find(x => x.dish_id == item.dish_id)) {
      alert("Item is alrady added");
    } else {
      this.bill.push(item);
      console.log(this.arr1);
      this.qty.push(1);
      this.price.push(item.dish_price);
      this.tamt=0;
      for(this.x=0;this.x<this.price.length;this.x++)
      {
        this.tamt+=this.price[this.x];
      }
      console.log(this.tamt);
    }
  }


  ondel(item:dish, i: number) {
    if(this.qty[i]<1)
    {
      alert("invalid input");
      this.qty[i]=1;

    }
    this.price[i] = this.qty[i] * item.dish_price;
    this.tamt=0;
    for(this.x=0;this.x<this.arr1.length;this.x++)
      {
        this.tamt+=this.price[this.x];
      }
  }

  // ondel(item,i){

  //   this.tamt=this.qty[i]*item.dish_price;
  //   this.Item[i]=item;
  //   this.price[i]=item.dish_price;
  //   this.qty[i]=item.i;
  // }

  ngOnInit() {



    this._cus.getallmenu().subscribe(
      (data:cusions[])=>{
        console.log(data);
        this.arr=data;
      for(let i=0;i<100;i++)
      {
        this.qtydrop[i]=i;
      }
      }

    );

    this._cus.getalldish().subscribe(
      (data:dish[])=>{
        console.log(data);
        this.arr1=data;
      }
    );
  }

  onClick(cusions_name:string){
    console.log(cusions_name);
    this._cus.getdbyid(cusions_name).subscribe(
      (data:any)=>{
         alert(cusions_name);
        console.log(data);
        this.arr1=data;
      }
    );
  }

}

