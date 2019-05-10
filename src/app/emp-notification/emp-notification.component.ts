import { Component, OnInit } from '@angular/core';
import { GetAllRecNotificationService } from '../services/get-all-rec-notification.service';
import { GetAllDataForRecNotificationService } from '../services/get-all-data-for-rec-notification.service';
import { AddResponseService } from '../services/add-response.service';
import { HttpClient } from 'selenium-webdriver/http';
import { Router, ActivatedRoute } from '@angular/router';
import { GetResByApplyService } from '../services/get-res-by-apply.service';
import { AddEmpNotificationService } from '../services/add-emp-notification.service';
import { GetAllEmpNotificationService } from '../services/get-all-emp-notification.service';
import { GetAllDataForEmpNotificationService } from '../services/get-all-data-for-emp-notification.service';
import { empNotificatioonData } from '../classes/empNotificationDataClass';
import { empNotification } from '../classes/empNotificationClass';
import { JobsForEmpService } from '../services/jobs-for-emp.service';

@Component({
  selector: 'app-emp-notification',
  templateUrl: './emp-notification.component.html',
  styleUrls: ['./emp-notification.component.css']
})
export class EmpNotificationComponent implements OnInit {

  empNotificationData:empNotificatioonData[];
   en_id:number;
   fk_res_id:number;
   fk_apply_id:number;
   fk_job_id:number;
   fk_emp_id:string;
   field:string;
rec_photo:string;
  constructor(
    private getAllEmpNotification:GetAllEmpNotificationService,
    private getAllDataForEmpNotification:GetAllDataForEmpNotificationService,
    private _aroute:ActivatedRoute,
    private jobs:JobsForEmpService

  ) { }

  ngOnInit() {
    this.field=localStorage.getItem('emp_field1');
    // this.fk_emp_id=this._aroute.snapshot.params['id'];
    this.jobs.getjobsforemp(this.field).subscribe(
      (data:any)=>
      {
          // console.log(data);

          this.rec_photo=data[0].rec_photo;
        // alert(this.rec_photo);
      }
    );
    this.fk_emp_id=localStorage.getItem('emp_id');
    this.getAllEmpNotification.getAllEmpNotification(this.fk_emp_id).subscribe(
      (data:empNotification[])=>{


        // console.log(data);

        if(data.length>0)
        {
          this.en_id=data[0].en_id;
          this.fk_res_id=data[0].fk_res_id;
          this.fk_apply_id=data[0].fk_apply_id;
          this.fk_job_id=data[0].fk_job_id;
          this.fk_emp_id=data[0].fk_emp_id;

              this.getAllDataForEmpNotification.getAllDataForEmpNotification(new empNotification(this.en_id,this.fk_res_id,this.fk_apply_id,this.fk_job_id,this.fk_emp_id)).subscribe(
                (data:empNotificatioonData[])=>{
                  // console.log(data);
                  this.empNotificationData=data;
                });
        }





    });



  }

}
