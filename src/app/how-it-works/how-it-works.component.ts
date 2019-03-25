import { Component, OnInit } from '@angular/core';
import { Company_Type } from '../classes/companyType';
import { Adminclass } from '../classes/adminclass';
import { GetcompanynameService } from '../services/getcompanyname.service';
import { CompanyTypeService } from '../services/company-type.service';
import { LoginService } from '../services/login.service';
import { LoginEmpService } from '../services/login-emp.service';
import { Router } from '@angular/router';
import { emp } from '../classes/employee';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {

  typeOfUser:string;
  //  flag:boolean;
   username:string;
   password:string;
   emp_photo:string;
   pcnt:number=0;
   company_type:Company_Type[]=[];
  company:Adminclass[]=[];
  name:string;
  img:string;
  constructor(private companyName:GetcompanynameService,private Company_type_obj:CompanyTypeService,private loginverify:LoginService,private loginverifyEmp:LoginEmpService,private _route:Router) { }

  ngOnInit() {
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
