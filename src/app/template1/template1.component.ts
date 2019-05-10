import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Adminclass } from '../classes/adminclass';
import { emp } from '../classes/employee';
import { LoginEmpService } from '../services/login-emp.service';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Company_Type } from '../classes/companyType';
import { CompanyTypeService } from '../services/company-type.service';
import { GetJobByFieldService } from '../services/get-job-by-field.service';
import { job } from '../classes/jobclass';
import { jobR } from '../classes/jobRec';
import { GetemppasswordbyidService } from '../services/getemppasswordbyid.service';
import { EmailClass } from '../classes/emailclass';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {
   typeOfUser:string;
   tp:string;
   emp_password:string;
  //  flag:boolean;
   username:string;
   x:number=0;
   field_emp:string[]=[
    "it",
    "management",
    "butie expert"
  ];

  send_job_id:number;
   job_id:number;
   password:string;
   emp_photo:string;
   pcnt:number=0;
  public rec_by_field:jobR[]=[];
   field:string;
   pass:string;
   company_type:Company_Type[]=[];
  constructor(private getJobByFieldObj:GetJobByFieldService,
    private emppasswordbyidOBJ:GetemppasswordbyidService,
    private _email:EmailService,
    private Company_type_obj:CompanyTypeService,private loginverify:LoginService,private loginverifyEmp:LoginEmpService,private _route:Router) { }

  ngOnInit() {
    this.rec_by_field=null;
    // this.rec_by_field=null;
    this.Company_type_obj.companyType().subscribe(
      (data:any)=>{
        this.company_type=data;

        // this.emp_photo=localStorage.getItem('emp_photo');
        // alert(this.emp_photo);
      }
    );
  }



  onemail()
  {

    this.emppasswordbyidOBJ.getempPasswordbyID(new emp(this.username)).subscribe(
      (data:any)=>{
        console.log(data);
        this.emp_password=data[0].emp_password;

        localStorage.setItem('e',this.emp_password);
        alert(localStorage.getItem('e'));
        // this.tp=this.emp_password;
      }
    );
// alert(this.e);
// alert();
      // localStorage.getItem('emp')
    this._email.email(new EmailClass(this.username,"Password",localStorage.getItem('e'))).subscribe(
      (data:any)=>{
        // alert(this.tp);
        console.log(data);
      }
    );


  }

  key()
  {
    this.pcnt=this.pcnt+1;
  }

  jobpage(j)
  {
    localStorage.setItem('job_spec',j);
    localStorage.setItem('onSearchField',this.field);
    alert(this.field);
    this._route.navigate(['JobSingle',+this.send_job_id]);
  }

  CompanyField()
  {
    this.ngOnInit();
    // alert("called");
    this.getJobByFieldObj.getJobByField(this.field).subscribe(
      (data:any)=>{
        console.log(data);
        this.send_job_id=data[0].job_id;
        this.rec_by_field=data;
        if(data.length>0)
        {
          alert("Jobs Founds");
        }
        else
        {
          alert("No Jobs Found");
        }
      }
    );
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

  // check()
  // {
  //   if(this.r.url=="localhost:4200")
  //   {
  //     this.flag=true;
  //   }
  //   else{
  //     this.flag=false;
  //   }
  // }
}
