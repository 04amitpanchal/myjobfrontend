import { Component, OnInit } from '@angular/core';
import { recNotificationData } from '../classes/recNotificationDataClass';
import { ResponseClass } from '../classes/response';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { recNotification } from '../classes/recNotificationClass';
import { GetAllRecNotificationService } from '../services/get-all-rec-notification.service';
import { GetAllDataForRecNotificationService } from '../services/get-all-data-for-rec-notification.service';
import { AddResponseService } from '../services/add-response.service';
import { GetResByApplyService } from '../services/get-res-by-apply.service';
import { AddEmpNotificationService } from '../services/add-emp-notification.service';
import { empNotification } from '../classes/empNotificationClass';

@Component({
  selector: 'app-rec-notification',
  templateUrl: './rec-notification.component.html',
  styleUrls: ['./rec-notification.component.css']
})
export class RecNotificationComponent implements OnInit {

  recNotificationData:recNotificationData[]=[];
  response:ResponseClass[]=[];
  fk_emp_id:string;
  fk_apply_id:number;
  fk_job_id:number;
  fk_rec_id:string;
  emp_id:string;
  job_id:number;
  apply_id:number;
  res_id:number;
  fk_res_id:number;
  en_id:number;
  res_staus:string;
  res_desc:string="nothing";
  id:number;
  res_status:string;
  rn_id:number;
  emp_field:string;
  emp_photo:string;
  country:string;
  city:string;
  apply_date:string;
  first_name:string;
  last_name:string;
  recdata:recNotificationData[]=[];

  rec_id:string;
msg:string;


  constructor(
    private getAllrecNotification:GetAllRecNotificationService,
    private getAllDataForRecNotification:GetAllDataForRecNotificationService,
    private addresponse:AddResponseService,
    private _http:HttpClient,
    private _route:Router,
    private _aroute:ActivatedRoute,
    private _getResponseByApplyId:GetResByApplyService,
    private addEmpNotification:AddEmpNotificationService

  ) { }

  ngOnInit() {

    //this.fk_rec_id=this._aroute.snapshot.params['id'];

    // this.fk_rec_id=this.rec_id;
    this.fk_rec_id=localStorage.getItem('rec_id');
    console.log(this.fk_rec_id);
    this.getAllrecNotification.getAllRecNotification(this.fk_rec_id).subscribe(
      (data:recNotification[])=>
      {

        //this.fk_rec_id=data[0].fk_rec_id;
        //this.fk_rec_id=this.rec_id;
        console.log(data);
        if(data.length>0)
        {
          this.rn_id=data[0].rn_id;
        this.fk_emp_id=data[0].fk_emp_id;
        this.fk_apply_id=data[0].fk_apply_id;
        this.fk_job_id=data[0].fk_job_id;

              console.log("Data send for get rec noti"+this.rn_id,this.fk_emp_id,this.fk_apply_id,this.fk_job_id,this.fk_rec_id+"Completed");
            this.getAllDataForRecNotification.getAllDataForRecNotification(new recNotification(this.rn_id,this.fk_emp_id,this.fk_job_id,this.fk_apply_id,this.fk_rec_id)).subscribe(
              (data:recNotificationData[])=>{
                if(data.length>0){
                  console.log("data arrived"+data);
                }
                else
                {
                  alert("data is not arrived");
                }
                this.recNotificationData=data;
                console.log(data);
              }
            );
        }
        else
        {
          this.msg="NO Candidates Applied For Your Company.";
        }





      } );




  }


  onAccept()
  {
    this.res_status="Accept";

    this.addresponse.addResponse(new ResponseClass(this.res_id,this.fk_apply_id,this.res_status)).subscribe(
      (data:any)=>{
        console.log(data);
        //alert("Succfully Added Response Data");

          // this.id=this._aroute.snapshot.params['id'];
          // this.id=localStorage
          // console.log(this.id);
            this._getResponseByApplyId.getResponseByApplyId(this.fk_apply_id).subscribe(
              (data:any[])=>{
                console.log(data);
                this.res_id=data[0].res_id;
                // this.fk_apply_id=data[0].fk_apply_id;
                // this.res_status=data[0].res_status;
                // this.res_desc=data[0].res_desc;

                this.fk_res_id=this.res_id
                this.addEmpNotification.addEmpNotification(new empNotification(this.en_id,this.fk_res_id,this.fk_apply_id,this.fk_job_id,this.fk_emp_id)).subscribe(
                  (data:any[])=>{
                    console.log(data);
                  });
            });
      });

  }

  onReject()
  {
    this.res_status="Reject";

    this.addresponse.addResponse(new ResponseClass(this.res_id,this.fk_apply_id,this.res_status)).subscribe(
      (data:any)=>{
        console.log(data);
        //alert("Succfully Added Response Data");

          // this.id=this._aroute.snapshot.params['id'];
          // this.id=localStorage
          // console.log(this.id);
            this._getResponseByApplyId.getResponseByApplyId(this.fk_apply_id).subscribe(
              (data:any[])=>{
                console.log(data);
                this.res_id=data[0].res_id;
                // this.fk_apply_id=data[0].fk_apply_id;
                // this.res_status=data[0].res_status;
                // this.res_desc=data[0].res_desc;

                this.fk_res_id=this.res_id
                this.addEmpNotification.addEmpNotification(new empNotification(this.en_id,this.fk_res_id,this.fk_apply_id,this.fk_job_id,this.fk_emp_id)).subscribe(
                  (data:any[])=>{
                    console.log(data);
                  });
            });
      });

  }

}
