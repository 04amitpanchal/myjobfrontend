import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateEducationService } from '../services/update-education.service';
import { GetEduByEducationIdService } from '../services/get-edu-by-education-id.service';
import { EducationClass } from '../classes/education';
import { GetEduidByEmpidService } from '../services/get-eduid-by-empid.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  epy:number[]=[];
  // fk_emp_id:string;
  i:number;
  pass:number;

  edu_id:number;
  fk_emp_id:string;
  emp_qual:string;
  emp_pass_year:number;
  emp_uni:string;
  emp_exp:number;
  emp_skill1:string;
  emp_skill2:string;
  first_name:string;
  last_name:string;
  // id:number;

  constructor(private _route:Router,
    private getEduid:GetEduidByEmpidService,
    private _getEducationById:GetEduByEducationIdService,
    private _aroute:ActivatedRoute,
    private _updatEducation:UpdateEducationService)
     { }

  ngOnInit() {
    // this.id=this._aroute.snapshot.params['id'];
    this.first_name=localStorage.getItem('first_name');
    this.last_name=localStorage.getItem('last_name');
    for(this.pass=1980,this.i=0;this.i<38,this.pass<=2018;this.i++,this.pass++)
    {
      this.epy[this.i]=this.pass;
    }

    this.getEduid.getEduid(localStorage.getItem('emp_id')).subscribe(
      (data:any)=>{
        console.log(data);
        this.edu_id=data[0].edu_id;
        localStorage.setItem('edu_id',this.edu_id.toString());
        // alert(this.edu_id);
      }
    );


    // console.log(this.edu_id);
    this._getEducationById.getEducationByEducationId(localStorage.getItem('edu_id')).subscribe(
      (data:any[])=>{
        console.log(data);
        this.edu_id=data[0].edu_id;
        this.fk_emp_id=data[0].fk_emp_id;
        this.emp_qual=data[0].emp_qual;
        this.emp_pass_year=data[0].emp_pass_year;
        this.emp_uni=data[0].emp_uni;
        this.emp_exp=data[0].emp_exp;
        this.emp_skill1=data[0].emp_skill1;
        this.emp_skill2=data[0].emp_skill2;
      }
    );
  }

  updateEducationDetails()
  {
    // const fd=new FormData();


    // fd.append('fk_emp_id',this.fk_emp_id);
    // fd.append('emp_quals',this.emp_qual);
    // fd.append('emp_pass_year',this.emp_pass_year.toString());
    // fd.append('emp_uni',this.emp_uni);
    // fd.append('emp_exp',this.emp_exp.toString());
    // fd.append('emp_skill1',this.emp_skill1);
    // fd.append('mp_skill2',this.emp_skill2);
    // this.id=this._aroute.snapshot.params['id'];
    // alert(this.edu_id);
    if (this.edu_id!=null && this.fk_emp_id!=null && this.emp_qual!=null && this.emp_pass_year!=null && this.emp_uni!=null && this.emp_exp!=null &&  this.emp_skill1!=null && this.emp_skill2!=null) {
      this._updatEducation.updateEducation(this.edu_id,new EducationClass(this.edu_id,this.fk_emp_id,this.emp_qual,this.emp_pass_year,this.emp_uni,this.emp_exp,this.emp_skill1,this.emp_skill2)).subscribe(
        (data:any)=>{
                console.log(data);
                alert("details updaated sucessfully");
                this._route.navigate(['employee-profile',1]);
              }
      );

    }
    else
    {
      alert("field can't be null");
    }

  }

}
