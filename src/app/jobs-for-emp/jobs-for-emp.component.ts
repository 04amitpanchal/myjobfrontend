import { Component, OnInit } from '@angular/core';
import { job } from '../classes/jobclass';
import { Router } from '@angular/router';
import { JobsForEmpService } from '../services/jobs-for-emp.service';
import { GetJobByIdForEmpServices } from '../services/get-job-by-id-for-emp.service';
import { AppliedJobIdForEmpService } from '../services/applied-job-id-for-emp.service';
import { AddRecNotificationService } from '../services/add-rec-notification.service';
import { GetApplyIdByEmpAndJobService } from '../services/get-apply-id-by-emp-and-job.service';
import { AddapplyService } from '../services/addapply.service';
import { applyclass } from '../classes/apply';
import { ApplyForRecNotificationClass } from '../classes/ApplyForRecNotification';
import { recNotification } from '../classes/recNotificationClass';
import { Adminclass } from '../classes/adminclass';
import { UpdaterecService } from '../services/updaterec.service';
import { GetJobByFieldService } from '../services/get-job-by-field.service';

@Component({
  selector: 'app-jobs-for-emp',
  templateUrl: './jobs-for-emp.component.html',
  styleUrls: ['./jobs-for-emp.component.css']
})
export class JobsForEmpComponent implements OnInit {
  getjob:job[]=[];
  field:string;
  rec_photo:string;
  id:string;
  emp_id:string;
  fk_job_id:number;
  fk_rec_id:string;
  fk_apply_id:number;
  apply_date:string;
  apply_id:number;
  rn_id:number;
  info:string="";
  send_job_id:number;
  rec_by_field:string;
  constructor(private _route:Router,private jobs:JobsForEmpService,
    private addapply:AddapplyService,
    private getApplyIdByEmpAndJob:GetApplyIdByEmpAndJobService,
    private addRecNotification:AddRecNotificationService,
    private appliedJobs:AppliedJobIdForEmpService,
    private getJobByIdForEmp:GetJobByIdForEmpServices,
    private updaterec:UpdaterecService,
    private getJobByFieldObj:GetJobByFieldService) { }

  ngOnInit() {
    this.field=localStorage.getItem('emp_field');
    // this.rec_photo=localStorage.getItem('rec_profile');
    // this.updaterec.getrecById(localStorage.getItem('')).subscribe(
    //   (data:Adminclass[])=>{
    //      console.log(data);


    //   }
    // );

    this.jobs.getjobsforemp(this.field).subscribe(
      (data:any)=>
      {
          console.log(data);
          this.getjob=data;
          this.rec_photo=data[0].rec_photo;
          if(data.length<=0)
          {
            this.info="No Jobs Found.";
          }
      }
    );

    this.getJobByFieldObj.getJobByField(this.field).subscribe(
      (data:any)=>{
        console.log(data);
        this.send_job_id=data[0].job_id;
        this.rec_by_field=data;
        this.rec_photo=data[0].rec_photo;
        if(data.length>0)
        {
          alert("Jobs Founds");
        }
        else
        {
          alert("No Jobs Found");
        }
      }
    );

  }

  onApply(job_id:number)
  {

    console.log(job_id,this.id);

    alert(this.emp_id);
    if(this.emp_id!=null)
    {
      console.log(job_id,this.id);
      this.fk_job_id=job_id;
      this.fk_rec_id=this.id;
      console.log(this.fk_rec_id);

      console.log("emp id "+this.emp_id+"job id "+job_id+"apply date "+this.apply_date);
      this.addapply.addapply(new applyclass(this.apply_id,this.emp_id,this.fk_job_id,this.apply_date)).subscribe(
        (data:any)=>{
          // alert("added");
        console.log("apply id"+data);

          this.getApplyIdByEmpAndJob.getApplyIdByEmpAndJob(new ApplyForRecNotificationClass(this.emp_id,this.fk_job_id)).subscribe(
            (data:any)=>{
                console.log(data);
                this.fk_apply_id=data[0].apply_id;
              // alert("get Apply id"+this.fk_apply_id);
              // console.log("for insert"+data);



                      this.addRecNotification.addRecNotification(new recNotification(this.rn_id,this.emp_id,this.fk_job_id,this.fk_apply_id,this.fk_rec_id)).subscribe(
                        (data:recNotification[])=>{
                            console.log("addrec"+data);
                        }
                      );

            }
          );


        }
      );



    //   this.getApplyIdByEmpAndJob.getApplyIdByEmpAndJob(new ApplyForRecNotificationClass("abhay@gmail.com",1)).subscribe(
    //     (data:any)=>{
    //         console.log(data);
    //         this.fk_apply_id=data[0].apply_id;
    //        alert("get Apply id"+this.fk_apply_id);
    //        console.log("for insert"+data);



    //     }
    //   );


    }
    else
    {
      alert("Login First");

      this._route.navigate(['']);

    }
  }
  oninfo(job_id)
  {
    this._route.navigate(['JobSingle/'+job_id]);
  }
}
