import { Component, OnInit } from '@angular/core';
import { GetRecByIdService } from '../services/get-rec-by-id.service';
import { Adminclass } from '../classes/adminclass';
import { jobR } from '../classes/jobRec';
import { GetJobByFieldService } from '../services/get-job-by-field.service';

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
  constructor(private _getrecByidObj:GetRecByIdService,private getJobField:GetJobByFieldService) { }

  ngOnInit() {
    this.jid=localStorage.getItem('job_spec');
    this.field=localStorage.getItem('onSearchField');
    this._getrecByidObj.getRecByid(this.jid).subscribe(
      (data:any)=>{
        console.log(data);
        this.recAd=data;
      }
    );
      this.getJobField.getJobByField(this.field).subscribe(
        (data:any)=>{
          console.log(data);
          this.simJob=data;

          // for(let i=0;i<this.simJob.length;i++)
          // {
          //   if (data[i].job_id!=this.jid) {
          //     this.simJob[i]=data[i];
          //     alert(this.simJob[i]);
          //   }
          // }
        }
      );
  }
  onPerJob(ji)
  {
    localStorage.setItem('job_spec',ji);
      this.ngOnInit();
  }

}
