import { Component, OnInit } from '@angular/core';
import { GetEmpFieldByEmpidService } from '../services/get-emp-field-by-empid.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetEmpByidService } from '../services/get-emp-byid.service';
import { UpdaterecService } from '../services/updaterec.service';
import { emp } from '../classes/employee';
import { GetcvService } from '../services/getcv.service';
import { empCv } from '../classes/EmpCvClass';

@Component({
  selector: 'app-emp-profile-rec',
  templateUrl: './emp-profile-rec.component.html',
  styleUrls: ['./emp-profile-rec.component.css']
})
export class EmpProfileRecComponent implements OnInit {
  emp_id:string;
  emp_password:string;
first_name:string;
last_name:string;
    Gender:string;
  country:string;
  city:string;
  state:string;
  emp_field:string;
  emp_photo:string;
emp_exp:number;
emp_skill1:string;
emp_skill2:string;
emp_uni:string;
emp_passing_year:string;
emp_qual:string;
emp_desc:string;
selectedFile:File=null;
cv:empCv[]=[];
cv_name:string;
//  id:string;
emp:emp[]=[];
 constructor(private updaterec:UpdaterecService,
  private _route:Router,
  private _aroute:ActivatedRoute,
  private getEmpByIdObj:GetEmpByidService,
  private getEmpFieldByEmpIdObj:GetEmpFieldByEmpidService,
  private getcv:GetcvService
  ) { }

   ngOnInit() {
    //  this.id=this._aroute.snapshot.params['id'];
    //  this.rec_id=this.rec_id;
    // console.log(this.rec_id);
    // alert(localStorage.getItem('emp_profile'));
    // if(this._aroute.snapshot.params['id']==1)
    // {

      this.getcv.getcv(localStorage.getItem('emp_profile')).subscribe(
        (data:any)=>
        {
          alert(data);
          console.log(data);
          this.cv=data;
          this.cv_name=data[0].emp_cv;
          console.log(this.cv_name);
        }
      );

    this.getEmpByIdObj.getEmpById(localStorage.getItem('emp_id')).subscribe(
      (data:any)=>{
         console.log(data);
        this.emp=data;
        this.first_name=data[0].first_name;
        this.last_name=data[0].last_name;
        this.Gender=data[0].Gender;
        this.country=data[0].country;
        this.emp_photo=data[0].emp_photo;
        this.city=data[0].city;
        this.state=data[0].state;
        this.emp_field=data[0].emp_field;
        this.emp_exp=data[0].emp_exp;
        this.emp_skill1=data[0].emp_skill1;
        this.emp_skill2=data[0].emp_skill2;
        this.emp_uni=data[0].emp_uni;
        this.emp_desc=data[0].emp_desc;
        // alert(this.emp_desc);
      this.emp_passing_year=data[0].emp_passing_year;
      this.emp_qual=data[0].emp_qual;
      localStorage.setItem('first_name',this.first_name);

      localStorage.setItem('last_name',this.last_name);
      localStorage.setItem('emp_photo',this.emp_photo);
    }
    );
  // //  }
  //  if(this._aroute.snapshot.params['id']==0)
  //  {
    this.getEmpByIdObj.getEmpById(localStorage.getItem('emp_profile')).subscribe(
      (data:any)=>{
         console.log(data);
        this.emp=data;
        this.first_name=data[0].first_name;
        this.last_name=data[0].last_name;
        this.Gender=data[0].Gender;
        this.country=data[0].country;
        this.emp_photo=data[0].emp_photo;
        this.city=data[0].city;
        this.state=data[0].state;
        this.emp_field=data[0].emp_field;
        this.emp_exp=data[0].emp_exp;
        this.emp_skill1=data[0].emp_skill1;
        this.emp_skill2=data[0].emp_skill2;
        this.emp_uni=data[0].emp_uni;
      this.emp_passing_year=data[0].emp_passing_year;
      this.emp_qual=data[0].emp_qual;
      this.emp_desc=data[0].emp_desc;
      localStorage.setItem('first_name',this.first_name);

      localStorage.setItem('last_name',this.last_name);
      localStorage.setItem('emp_photo',this.emp_photo);
      }
    );
  //  }

  }

  onviewcv()
  {

  }

}
