import { Component, OnInit } from '@angular/core';
import { GetRecByIdService } from '../services/get-rec-by-id.service';
import { Adminclass } from '../classes/adminclass';
import { jobR } from '../classes/jobRec';
import { GetJobByFieldService } from '../services/get-job-by-field.service';
import { job } from '../classes/jobclass';
import { recNotification } from '../classes/recNotificationClass';
import { AddapplyService } from '../services/addapply.service';
import { GetApplyIdByEmpAndJobService } from '../services/get-apply-id-by-emp-and-job.service';
import { AddRecNotificationService } from '../services/add-rec-notification.service';
import { applyclass } from '../classes/apply';
import { ApplyForRecNotificationClass } from '../classes/ApplyForRecNotification';
import { Router, ActivatedRoute } from '@angular/router';
import { GetjobbyidService } from '../services/getjobbyid.service';
import { appliedJobIdForEmpClass } from '../classes/AppliedJobIdForEmp';

@Component({
  selector: 'app-job-single',
  templateUrl: './job-single.component.html',
  styleUrls: ['./job-single.component.css']
})
export class JobSingleComponent implements OnInit {
jid:string;
field:string;
recAd:jobR[]=[];
simJob:jobR[]=[];


getjob:job[]=[];
   recNotification:recNotification[]=[];
  fk_emp_id:string;
  apply_id:number;
  fk_job_id:number;
  apply_date:string;
  fk_apply_id:number;
  applyid:number;
  rn_id:number;
  fk_rec_id:string;
  id:string;


// getjob:job[]=[];
//   recNotification:recNotification[]=[];
  // fk_emp_id:string="";
  // apply_id:number;
  // fk_job_id:number;
  // apply_date:string;
  // fk_apply_id:number;
  // applyid:number;
  // rn_id:number;
  // fk_rec_id:string;

  item:appliedJobIdForEmpClass[]=[];
  emp_id:string;
  job_id:number;
  constructor(private _getrecByidObj:GetRecByIdService,private getJobField:GetJobByFieldService,
    // private addapply:AddapplyService,
    // private getApplyIdByEmpAndJob:GetApplyIdByEmpAndJobService,
    // private addRecNotification:AddRecNotificationService,
    private _route:Router,
    private jobs:GetjobbyidService,
    private route:Router,
    private addapply:AddapplyService,
    private getApplyIdByEmpAndJob:GetApplyIdByEmpAndJobService,
    private addRecNotification:AddRecNotificationService,
    private _aroute:ActivatedRoute) { }

  ngOnInit() {

    this.job_id=this._aroute.snapshot.params['id'];

    console.log(this.job_id);
    // this.jid=localStorage.getItem('job_spec');
    // this.field=localStorage.getItem('onSearchField');
    this._getrecByidObj.getRecByid(this.job_id).subscribe(
      (data:any)=>{
        console.log(data);
        this.recAd=data;
        this.field=data[0].Job_field;

              console.log(this.field);
              this.getJobField.getJobByField(this.field).subscribe(
                (data:any)=>{
                  console.log(data);
                  this.simJob=data;

                  for(let i=0;i<this.simJob.length;i++)
                  {
                    if (data[i].job_id!=this.jid) {
                      this.simJob[i]=data[i];
                      alert(this.simJob[i]);
                    }
                  }
                }
              );

      });


      // this.id= localStorage.getItem('company_profile');
    // alert(this.id);
    // this.jobs.getJobById(this.job_id).subscribe(
      // (data:any)=>{
        // if (data[0].fk_rec_id=="ztechpltd@gmail.com") {
        //   this.getjob=data;
        //   console.log("job data"+data[0].fk_rec_id);
        // } else {
        //   console.log("in else");
          // console.log("job data"+data);
        // }

        // this.getjob=data;
        //   console.log("job data"+data[0].fk_rec_id);

      // });
  }
  onPerJob(ji)
  {
    // localStorage.setItem('job_spec',ji);
    console.log(ji);
    this._route.navigate(['JobSingle/'+ji]);
      // this.ngOnInit();
  }
  onApply(job_id:number,fk_rec_id:string)
  {

    console.log(job_id,fk_rec_id);
    this.emp_id=localStorage.getItem('emp_id');
    alert(this.emp_id);
    if(this.emp_id!=null)
    {
      console.log(job_id,fk_rec_id);
      this.fk_job_id=job_id;
      this.fk_rec_id=fk_rec_id;
      console.log(this.fk_rec_id);
      this.addapply.addapply(new applyclass(this.apply_id,this.fk_emp_id,this.fk_job_id,this.apply_date)).subscribe(
        (data:any)=>{
          // alert("added");
        // console.log("apply id"+data);

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

}
