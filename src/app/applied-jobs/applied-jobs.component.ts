import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { GetApplyIdByEmpAndJobService } from '../services/get-apply-id-by-emp-and-job.service';
import { ActivatedRoute } from '@angular/router';
import { emp } from '../classes/employee';
import { GetAllEmplyeeService } from '../services/get-all-emplyee.service';
import { AppliedJobService } from '../services/applied-job.service';
import { job } from '../classes/jobclass';
import { appliedJobsclass } from '../classes/appliedJob';
import { last } from '@angular/router/src/utils/collection';
import { appliedJobsForEmpClass } from '../classes/AppliedJobsForEmp';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {
  // emp_id:string;
  // emp_photo:string;
  // emp_name:string;
  // fk_company_name:string;
  cn:string;
  name:string;
  // job_title:string;
  // apply_date:string;
  getJob:appliedJobsForEmpClass[]=[];

  job_id:number;
  fk_rec_id:string;
  job_title:string;
  fk_company_name:string;
  fk_emp_id:string;
  fk_job_id:number;
  apply_date:string;
  emp_id:string;
  first_name:string;
  last_name:string;
  emp_photo:string;
  // dataSource = new MatTableDataSource();
  // displayedColumns: string[] = ['fk_company_name','job_title','apply_date'];

  constructor( private getEmp:GetAllEmplyeeService,
    private appliedJob:AppliedJobService,
    private aroute:ActivatedRoute) { }

  ngOnInit() {
    this.emp_id=localStorage.getItem('emp_id');
    // this.getEmp.getAllEmployees().subscribe(
    //   (data:emp[])=>{
    //     // this.dataSource.paginator = this.paginator;
    //     this.emp_photo=data[0].emp_photo;

    //   }
    // );

    this.appliedJob.appliedEmp(this.emp_id).subscribe(
      (data:appliedJobsForEmpClass[])=>{
        // this.job_id=data[0].job_id;
        // this.fk_rec_id=data[0].fk_rec_id;
        // this.job_title=data[0].job_title;
        // this.fk_company_name=data[0].fk_company_name;
        // this.fk_emp_id=data[0].fk_emp_id;
        // this.fk_job_id=data[0].fk_job_id
        // this.apply_date=data[0].apply_date;
        // this.emp_id=data[0].emp_id;
        // this.first_name=data[0].first_name;
        // this.last_name=data[0].last_name;
        // this.emp_photo=data[0].emp_photo;

        // this.emp_name=data[0].first_name+"  "+data[0].last_name;
        this.getJob=data;
         console.log(data);
      }
    );
  }

}

