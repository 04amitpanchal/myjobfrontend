import { Component, OnInit } from '@angular/core';
import { Adminclass } from '../classes/adminclass';
import { UpdaterecService } from '../services/updaterec.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recruiter-profile',
  templateUrl: './recruiter-profile.component.html',
  styleUrls: ['./recruiter-profile.component.css']
})
export class RecruiterProfileComponent implements OnInit {

  rec_id:string;
  password:string;
  company_name:string;
  company_web:string;
  adderess:string;
  rec_photo:string;
  company_type:string;
 selectedFile:File=null;
 id:string;
 rec:Adminclass[]=[];
   constructor(private updaterec:UpdaterecService,
    private _route:Router,
    private _aroute:ActivatedRoute,
    ) { }

     ngOnInit() {
      //  this.id=this._aroute.snapshot.params['id'];
      //  this.rec_id=;
      this.rec_id=localStorage.getItem('rec_id');

      console.log(this.rec_id);
      if(this._aroute.snapshot.params['id']==1)
      {
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
          localStorage.setItem('company_name',this.company_name);
        }
      );
      }
      if(this._aroute.snapshot.params['id']==0){
        this.updaterec.getrecById(localStorage.getItem('rec_profile')).subscribe(
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
            localStorage.setItem('company_name',this.company_name);
          }
        );
      }
     }


     onlogout()
     {
       localStorage.clear();
     }
}
