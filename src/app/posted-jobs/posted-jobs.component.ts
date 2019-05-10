import { Component, OnInit } from '@angular/core';
import { job } from '../classes/jobclass';
import { GetjobbyidService } from '../services/getjobbyid.service';
import { UpdaterecService } from '../services/updaterec.service';
import { Adminclass } from '../classes/adminclass';
import { GetJobRecIdService } from '../services/get-job-rec-id.service';

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.css']
})
export class PostedJobsComponent implements OnInit {

  rec_photo:string;
  id:string;
getjob:job[]=[];
  constructor(
    private jobs:GetjobbyidService,
    private rec:UpdaterecService,
    private getjobs:GetJobRecIdService
  ) { }


  ngOnInit() {
    this.id= localStorage.getItem('rec_id');
    this.rec.getrecById(this.id).subscribe(
      (data:Adminclass[])=>{
        // console.log(data);
        this.rec_photo=data[0].rec_photo;




      });


            // alert(this.id);
            this.getjobs.getJobByRecId(this.id).subscribe(
              (data:any)=>{
                // if (data[0].fk_rec_id=="ztechpltd@gmail.com") {
                //   this.getjob=data;
                //   console.log("job data"+data[0].fk_rec_id);
                // } else {
                //   console.log("in else");
                  console.log("job data"+data);
                // }

                this.getjob=data;
                //   console.log("job data"+data[0].fk_rec_id);

              });

  }

}
