import { Component, OnInit } from '@angular/core';
import { RestaurentService } from '../restaurent.service';
import { dish } from './dishclass';
import { res } from '../restaurent/restaurenyclass';
import { DishService } from '../dish.service';


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  arr:dish[]=[];
  arr1:res[]=[];
  constructor(public _dish:DishService,public _rest:RestaurentService) { }
  onclick(cusions_id:number){
    this._dish.getbyid(cusions_id).subscribe(
      (data:dish[])=>{
        console.log(data);
        this.arr=data;
      }
    );
  }
  ngOnInit() {
    this._dish.getall().subscribe(
      (data:dish[])=>{
        console.log(data);
        this.arr=data;
      }
    );
    // this._dish.geta(name).subscribe(
    //   (data:dish[])=>{
    //     console.log(data);
    //     this.arr=data;
    //   }
    // );

  //   this._rest.getall().subscribe(
  //     (data:res[])=>{
  //       console.log(data);
  //       this.arr1=data;
  //     }
  //   );
  // }
  }
}
