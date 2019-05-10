import { Component, OnInit } from '@angular/core';
import { job } from '../classes/jobclass';
import { GetjobbyidService } from '../services/getjobbyid.service';
import { UpdaterecService } from '../services/updaterec.service';
import { Adminclass } from '../classes/adminclass';
import { Router } from '@angular/router';
import { AddapplyService } from '../services/addapply.service';
import { GetApplyIdByEmpAndJobService } from '../services/get-apply-id-by-emp-and-job.service';
import { AddRecNotificationService } from '../services/add-rec-notification.service';
import { recNotification } from '../classes/recNotificationClass';
import { applyclass } from '../classes/apply';
import { ApplyForRecNotificationClass } from '../classes/ApplyForRecNotification';
import { appliedJobIdForEmpClass } from '../classes/AppliedJobIdForEmp';
import { AppliedJobIdForEmpService } from '../services/applied-job-id-for-emp.service';
import { GetJobByIdForEmpServices } from "../services/get-job-by-id-for-emp.service";

@Component({
  selector: 'app-company-posted-jobs',
  templateUrl: './company-posted-jobs.component.html',
  styleUrls: ['./company-posted-jobs.component.css']
})
export class CompanyPostedJobsComponent implements OnInit {

  rec_photo:string;
  id:string;
getjob:job[]=[];

// filteredjob:job[]=[];

appliedjob:appliedJobIdForEmpClass[]=[];
ids:number[]=[];

  recNotification:recNotification[]=[];
  fk_emp_id:string;
  apply_id:number;
  fk_job_id:number;
  apply_date:string="03-04-2019";
  fk_apply_id:number;
  applyid:number;
  rn_id:number;
  fk_rec_id:string;
  emp_id:string;
  i:number;
  j:number=0;
  info:string="";
  constructor(
    private rec:UpdaterecService,
    private _route:Router,
    private jobs:GetjobbyidService,
    private route:Router,
    private addapply:AddapplyService,
    private getApplyIdByEmpAndJob:GetApplyIdByEmpAndJobService,
    private addRecNotification:AddRecNotificationService,
    private appliedJobs:AppliedJobIdForEmpService,
    private getJobByIdForEmp:GetJobByIdForEmpServices
  ) { }

  ngOnInit() {
    this.emp_id=localStorage.getItem('emp_id');
    this.id= localStorage.getItem('company_profile');
    this.rec.getrecById(this.id).subscribe(
      (data:Adminclass[])=>{
        // console.log(data);
        this.rec_photo=data[0].rec_photo;

                alert(this.id);


                this.appliedJobs.AppliedJobIdForEmp(this.emp_id).subscribe(
                  (data:any[])=>{

                    this.getJobByIdForEmp.getJobByIdForEmp(this.id,data).subscribe(
                      (data:any[])=>{
                          this.getjob=data;
                          if(data.length<=0)
                          {
                            this.info="No Jobs Found.";
                          }
                          console.log(this.getjob);
                        }
                      );
                  }
                    //  this.appliedjob=data;

               );





      });






    // console.log(this.filteredjob);


  }

  onsetArray(){



    // console.log(this.filteredjob);
    // console.log(this.getjob);
    // console.log(this.appliedjob);

    // for(this.i=0;this.i<this.getjob.length;this.i++)
    // {
    //   if(this.getjob[this.i].job_id==this.appliedjob[this.i].fk_job_id)
    //   {

    //   }
    //   else
    //   {
    //     this.filteredjob[this.j]=this.getjob[this.i];
    //     this.j++;
    //   }
    // }
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



