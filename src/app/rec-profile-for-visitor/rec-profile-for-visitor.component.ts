import { Component, OnInit } from '@angular/core';
import { Adminclass } from '../classes/adminclass';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdaterecService } from '../services/updaterec.service';

@Component({
  selector: 'app-rec-profile-for-visitor',
  templateUrl: './rec-profile-for-visitor.component.html',
  styleUrls: ['./rec-profile-for-visitor.component.css']
})
export class RecProfileForVisitorComponent implements OnInit {
  rec_id:string;
  password:string;
  company_name:string;
  company_web:string;
  adderess:string;
  rec_photo:string;
  company_type:string;
 selectedFile:File=null;
 com_desc:string;
 id:string;
 rec:Adminclass[]=[];
   constructor(private updaterec:UpdaterecService,
    private _route:Router,
    private _aroute:ActivatedRoute,
    ) { }

     ngOnInit() {
      //  this.id=this._aroute.snapshot.params['id'];
      //  this.rec_id=;
      this.rec_id=localStorage.getItem('rec_profile');

      console.log(this.rec_id);
      // if(this._aroute.snapshot.params['id']==1)
      // {
        this.updaterec.getrecById(this.rec_id).subscribe(
        (data:Adminclass[])=>{
           console.log(data);
          this.rec=data;
          this.rec_id=data[0].rec_id;
          this.password=data[0].password;
          this.company_name=data[0].company_name;
          this.company_web=data[0].company_web;

          this.rec_photo=data[0].rec_photo;
          this.company_type=data[0].company_type;
          this.adderess=data[0].adderess;
          this.com_desc=data[0].com_desc;
          localStorage.setItem('company_name',this.company_name);
        }
      );
      // }
      // if(this._aroute.snapshot.params['id']==0){
        // this.updaterec.getrecById(localStorage.getItem('rec_profile')).subscribe(
        //   (data:Adminclass[])=>{
        //      console.log(data);
        //     this.rec=data;
        //     this.rec_id=data[0].rec_id;
        //     this.password=data[0].password;
        //     this.company_name=data[0].company_name;
        //     this.company_web=data[0].company_web;
        //     this.rec_photo=data[0].rec_photo;
        //     this.company_type=data[0].company_type;
        //     this.adderess=data[0].adderess;
        //     this.com_desc=data[0].com_desc;
        //     localStorage.setItem('company_name',this.company_name);
        //   }
        // );
      }
    //  }



}
