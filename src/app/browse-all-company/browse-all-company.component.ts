import { Component, OnInit } from '@angular/core';
import { BrowseAllCompanyService } from '../services/browse-all-company.service';
import { Adminclass } from '../classes/adminclass';
import { Router } from '@angular/router';
import { jobR } from '../classes/jobRec';
import { Company_Type } from '../classes/companyType';
import { LoginEmpService } from '../services/login-emp.service';
import { GetJobByFieldService } from '../services/get-job-by-field.service';
import { LoginService } from '../services/login.service';
import { CompanyTypeService } from '../company-type.service';
import { emp } from '../classes/employee';

@Component({
  selector: 'app-browse-all-company',
  templateUrl: './browse-all-company.component.html',
  styleUrls: ['./browse-all-company.component.css']
})
export class BrowseAllCompanyComponent implements OnInit {
  typeOfUser:string;
  //  flag:boolean;
   username:string;
   x:number=0;
   job_id:number;
   password:string;
   emp_photo:string;
   pcnt:number=0;
  public rec_by_field:jobR[]=[];
   field:string;
   company_type:Company_Type[]=[];
  constructor(private allcompanyobj:BrowseAllCompanyService,private getJobByFieldObj:GetJobByFieldService,
    private Company_type_obj:CompanyTypeService,private loginverify:LoginService,private loginverifyEmp:LoginEmpService,private _route:Router) { }
  company:Adminclass[]=[];
  ngOnInit() {
    this.allcompanyobj.browseallcompany().subscribe(
      (data:any)=>{
        this.company=data;
        console.log(data);
      }
    );
  }
  companyprofile(recid)
  {
    localStorage.setItem('rec_profile',recid);
    localStorage.setItem('rec_profile1',recid);
    alert(recid);
    // this._route.navigate(['recruiterprofile',0]);
    this._route.navigate(['recprofileforvisitor']);
  }
  OnLogin()
  {

    // if(this.username=='' || this.password=='')
    // {
      // alert("Please enter UserName");
    // }
    // this.username=localStorage.getItem('rec_id');
    // alert(this.username);
    // else
    // {
      // alert(this.typeOfUser.length);
      if(this.typeOfUser==null)
      {
        alert("please select Your Type");
      }
      else
      {
    if (this.typeOfUser=="recruiter") {
      this.loginverify.loginVerify(new Adminclass(this.username,this.password)).subscribe(
        (data:Adminclass[])=>{
         // console.log(data);
          if (data.length==1) {
            console.log(data);
            localStorage.setItem('rec_id',this.username);
            // this.route.navigate(['/menu']);
            alert("Sucussfull login");

            this._route.navigate(['recruiterprofile',1]);
          }

          else {
            alert("Please enter valid user name and password");
            this.password="";
          }

        }

      );

    }
    if (this.typeOfUser=="Employee")
          {
            this.loginverifyEmp.loginVerifyEmp(new emp(this.username,this.password)).subscribe(
              (data:emp[])=>{
           //     console.log(data);
                if (data.length==1)
                {
                  console.log(data);
                  localStorage.setItem('emp_id',this.username);
                  // this.route.navigate(['/menu']);
                  alert("Sucussfull login");
                  this._route.navigate(['employee-profile',1]);

                }

                else {
                  alert("Please enter valid user name and password");
                  this.password="";
                }

          });
        }
      // }
      }
  }

  onRecPage(s)
  {
    // alert(s);
    localStorage.setItem('company_type',s);
    this._route.navigate(['joblist']);
  }
  recLogCall()
  {

    this.typeOfUser="recruiter";
    console.log(this.typeOfUser);
    // this.OnLogin();
  }
  empLogCall()
  {
    // console.log("emp");
    this.typeOfUser="Employee";
    console.log(this.typeOfUser);
  }
  onClickCandidate()
  {
    this._route.navigate(['/signupemp']);
  }
  onClickCompany()
  {
    this._route.navigate(['/signuprec']);
  }
  key()
  {
    this.pcnt=this.pcnt+1;
  }

}
