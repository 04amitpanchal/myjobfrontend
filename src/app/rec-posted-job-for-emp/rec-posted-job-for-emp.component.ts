import { Component, OnInit } from '@angular/core';
import { job } from '../classes/jobclass';
import { GetjobbyidService } from '../services/getjobbyid.service';
import { UpdaterecService } from '../services/updaterec.service';
import { Adminclass } from '../classes/adminclass';
import { Router } from '@angular/router';
import { GetApplyIdByEmpAndJobService } from '../services/get-apply-id-by-emp-and-job.service';
import { AddapplyService } from '../services/addapply.service';
import { AddRecNotificationService } from '../services/add-rec-notification.service';
import { applyclass } from '../classes/apply';
import { ApplyForRecNotificationClass } from '../classes/ApplyForRecNotification';
import { recNotification } from '../classes/recNotificationClass';

@Component({
  selector: 'app-rec-posted-job-for-emp',
  templateUrl: './rec-posted-job-for-emp.component.html',
  styleUrls: ['./rec-posted-job-for-emp.component.css']
})
export class RecPostedJobForEmpComponent implements OnInit {

  rec_photo:string;
  id:string;
getjob:job[]=[];
//getjob:job[]=[];
recNotification:recNotification[]=[];
fk_emp_id:string;
apply_id:number;
fk_job_id:number;
apply_date:string="3-2-2019";
fk_apply_id:number;
applyid:number;
rn_id:number;
fk_rec_id:string;

  constructor(
    private jobs:GetjobbyidService,
    private rec:UpdaterecService,
    private route:Router,
    private addapply:AddapplyService,
    private getApplyIdByEmpAndJob:GetApplyIdByEmpAndJobService,
    private addRecNotification:AddRecNotificationService
  ) { }


  ngOnInit() {
    this.fk_emp_id=localStorage.getItem('emp_id');
    this.id= localStorage.getItem('company_profile');
    this.rec.getrecById(this.id).subscribe(
      (data:Adminclass[])=>{
        // console.log(data);
        this.rec_photo=data[0].rec_photo;




      });


            alert(this.id);
            this.jobs.getJobById(this.id).subscribe(
              (data:any)=>{
                // if (data[0].fk_rec_id=="ztechpltd@gmail.com") {
                //   this.getjob=data;
                //   console.log("job data"+data[0].fk_rec_id);
                // } else {
                //   console.log("in else");
                  console.log("job data"+data[0]);
                // }

                this.getjob=data;
                //   console.log("job data"+data[0].fk_rec_id);

              });

  }

  onApply(job_id)
  {
    this.fk_job_id=job_id;
    this.fk_rec_id=this.id;
    console.log(this.fk_rec_id);
    this.addapply.addapply(new applyclass(this.apply_id,this.fk_emp_id,this.fk_job_id,this.apply_date)).subscribe(
      (data:any)=>{
        // alert("added");
       // console.log("apply id"+data);

        this.getApplyIdByEmpAndJob.getApplyIdByEmpAndJob(new ApplyForRecNotificationClass(this.fk_emp_id,this.fk_job_id)).subscribe(
          (data:any)=>{
              console.log(data);
              // this.fk_apply_id=data[0].apply_id;
             // alert("get Apply id"+this.fk_apply_id);
             // console.log("for insert"+data);



                    this.addRecNotification.addRecNotification(new recNotification(this.rn_id,this.fk_emp_id,this.fk_job_id,this.fk_apply_id,this.fk_rec_id)).subscribe(
                      (data:recNotification[])=>{
                          console.log("addrec"+data);
                      }
                    );

          }
        );


      }
    );

  }


}
