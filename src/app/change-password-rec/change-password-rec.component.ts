import { Component, OnInit } from '@angular/core';
import { UpdaterecService } from '../services/updaterec.service';
import { Adminclass } from '../classes/adminclass';
import { UpdateRecPasswordService } from '../services/update-rec-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password-rec',
  templateUrl: './change-password-rec.component.html',
  styleUrls: ['./change-password-rec.component.css']
})
export class ChangePasswordRecComponent implements OnInit {
  rec_id:string;
  password:string;
  new_password:string;
  company_name:string;
  constructor(private updaterec:UpdaterecService,private updaterecpassword:UpdateRecPasswordService,private _route:Router) { }

  ngOnInit() {
    this.rec_id=localStorage.getItem('rec_id');
    this.company_name=localStorage.getItem('company_name');
    this.updaterec.getrecById(this.rec_id).subscribe(
      (data:Adminclass[])=>{
        // console.log(data);
        this.rec_id=data[0].rec_id;
        this.password=data[0].password;
        // this.company_name=data[0].company_name;
        // this.company_web=data[0].company_web;
        // this.rec_photo=data[0].rec_photo;
        // this.company_type=data[0].company_type;
        // this.adderess=data[0].adderess;
      }
    );
  }
  onchange()
  {
    this.updaterecpassword.updateRecPassword(new Adminclass(this.rec_id,this.new_password)).subscribe(
      (data:any)=>
      {
          console.log(this.new_password);
          alert('password changed sucessfully');
          this._route.navigate(['recruiterprofile',1]);
      }
    );
  }
}
