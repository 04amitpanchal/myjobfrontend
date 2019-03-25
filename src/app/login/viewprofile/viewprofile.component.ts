import { Component, OnInit, ViewChild } from '@angular/core';
import { log } from '../loginclass';
import { LoginserviceService } from '../loginservice.service';
import {MatTableDataSource, MatSort,MatCard} from '@angular/material';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  arr:log[]=[];
  delArr:log[]=[];
  email_id:string;
  password:string;
  i:number=0;
  dataSource = new MatTableDataSource(this.arr);
  filtervalue:string;
  displayedColumns: string[] = ['Action','email_id','password','image'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _viewprofile:LoginserviceService) { }
  applyFilter(filtervalue: string){
    this.dataSource.filter=filtervalue.trim().toLowerCase();
    console.log(this.arr);
  }
  ondelete(){
    this._viewprofile.deleteAll(this.delArr).subscribe((x: any)=>{
      for(this.i=0;this.i<this.delArr.length;this.i++)
      {
        if(this.arr.find(x => x == this.delArr.length[this.i]))
        {
          this.arr.splice(this.arr.indexOf(this.delArr[this.i]),1);
        }
      }
      this.dataSource.data=this.arr;
    });
  }

  onchange(item:log){
    if(this.delArr.find (x => x == item)){
      this.delArr.splice(this.delArr.indexOf(item),1);
    }
    else{
      this.delArr.push(item);
    }
    console.log(this.delArr);
  }
  ngOnInit() {
    alert('ghgjh');
    this._viewprofile.loginall().subscribe(
      (data:log[])=>{
        this.arr=data;
        alert('hello');
        this.dataSource=new MatTableDataSource(data);
        console.log(data);
      }
    );

  }


}
