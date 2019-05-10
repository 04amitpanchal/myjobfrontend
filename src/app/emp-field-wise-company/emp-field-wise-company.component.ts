import { Component, OnInit } from '@angular/core';
import { Adminclass } from '../classes/adminclass';
import { GetAllRecruiterService } from '../services/get-all-recruiter.service';
import { Router, ActivatedRoute } from '@angular/router';
import { emp } from '../classes/employee';
import { UpdaterecService } from '../services/updaterec.service';
import { GetEmpByidService } from '../services/get-emp-byid.service';
import { GetEmpFieldByEmpidService } from '../services/get-emp-field-by-empid.service';

@Component({
  selector: 'app-emp-field-wise-company',
  templateUrl: './emp-field-wise-company.component.html',
  styleUrls: ['./emp-field-wise-company.component.css']
})
export class EmpFieldWiseCompanyComponent implements OnInit {
  emp_name:string;
  getAllrecruiter:Adminclass[]=[];
  // SpecificCompnay:string;
  constructor(private getallRecruiterObj:GetAllRecruiterService,private _route:Router) { }

  ngOnInit() {
    // this.getallRecruiterObj.getAllRecruiter(new Adminclass(localStorage.getItem('company_type')))
    alert(localStorage.getItem('emp_field1'));
    this.getallRecruiterObj.getSpecificRec(localStorage.getItem('emp_field1')).subscribe(
      (data:any)=>{
        console.log(data);
        this.getAllrecruiter=data;
        this.emp_name=localStorage.getItem('first_name') + localStorage.getItem('last_name');
        // alert(this.emp_name);
      }
    );
  }


  goToCompanyProfile(company)
  {
    // alert(company);
    localStorage.setItem('company_profile',company);
    this._route.navigate(['companyprofile']);
  }

}
