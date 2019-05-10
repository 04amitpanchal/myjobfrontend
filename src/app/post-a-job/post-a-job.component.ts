import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddjobService } from '../services/addjob.service';
import { addjob } from '../classes/addjobClass';
import { AddJobUserService } from '../services/add-job-user.service';
import { UpdaterecService } from '../services/updaterec.service';
import { Adminclass } from '../classes/adminclass';

@Component({
  selector: 'app-post-a-job',
  templateUrl: './post-a-job.component.html',
  styleUrls: ['./post-a-job.component.css']
})
export class PostAJobComponent implements OnInit {
   fk_rec_id:string=localStorage.getItem('rec_id');
  job_title:string;
  posted_date:string;
  skill_req:string;
  job_desc:string;
  salary_min:number;
  salary_max:number;
  salary_min1:string;
  salary_max1:string;
  temp:number=10;
  fk_company_name:string;
  company_name:string;
  job_field:string;
  date:string;
  month:string;
  year:string;
  x=new Date();

  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
   mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
   yyyy = this.today.getFullYear();



  constructor(
    private route:Router,
    private addJob:AddjobService,
    private addJobUser:AddJobUserService,
    private updaterec:UpdaterecService
    ) { }

  ngOnInit() {
    // text:this.temp;
    this.fk_rec_id=localStorage.getItem('rec_id');
    // localStorage.setItem('date',Date.now());
    // this.x=Date.now();
    // this.company_name=localStorage.getItem('company_name');

    this.updaterec.getrecById(this.fk_rec_id).subscribe(
      (data:Adminclass[])=>{
         console.log(data);
        // this.rec=data;
        // this.rec_id=data[0].rec_id;
        // this.password=data[0].password;
        this.fk_company_name=data[0].company_name;
        // this.company_web=data[0].company_web;
        // this.rec_photo=data[0].rec_photo;
        // this.company_type=data[0].company_type;
        // this.adderess=data[0].adderess;

      }
    );
  }

  onpost(){

    this.posted_date= this.mm + '/' + this.dd + '/' + this.yyyy;
    // this.x=Date.now();
    // this.date=this.x.getDate.toString();
    // this.month=this.x.getMonth.toString();
    // this.year=this.x.getFullYear.toString();
    // this.posted_date=this.date+"/"+this.month+"/"+this.year;
    // this.posted_date=
    console.log(this.job_field);
    this.addJob.addJob(new addjob(this.fk_rec_id,this.job_title,this.posted_date,this.skill_req,this.job_desc,this.salary_min,this.salary_max,this.job_field)).subscribe(
      (data:any)=>{
        alert("added");
        this.route.navigate(['/recruiterprofile/1']);
        console.log(data);
      }
    );

  }

}
