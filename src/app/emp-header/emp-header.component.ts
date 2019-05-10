import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { emp } from '../classes/employee';
import { GetEmpFieldByEmpidService } from '../services/get-emp-field-by-empid.service';
import { GetEmpByidService } from '../services/get-emp-byid.service';

@Component({
  selector: 'app-emp-header',
  templateUrl: './emp-header.component.html',
  styleUrls: ['./emp-header.component.css']
})
export class EmpHeaderComponent implements OnInit {

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
selectedFile:File=null;
// emp_photo:string;
//  id:string;
emp:emp[]=[];
  constructor(private _route:Router,private _aroute:ActivatedRoute,private getEmpByIdObj:GetEmpByidService,
    private getEmpFieldByEmpIdObj:GetEmpFieldByEmpidService) { }

    ngOnInit() {
      //  this.id=this._aroute.snapshot.params['id'];
      //  this.rec_id=this.rec_id;
      // console.log(this.rec_id);
      // alert(localStorage.getItem('emp_profile'));
      this.emp_photo=localStorage.getItem('emp_photo');
    }
    logout()
    {
      localStorage.clear();
      this._route.navigate(['']);
    }

    addEducation()
    {
      this._route.navigate(['addEducation']);
    }
    editEducationDetails()
    {
      this._route.navigate(['editEducation']);
    }
    editProfile()
    {
      this._route.navigate(['updateEmployee']);
    }
    changePassword()
    {
      this._route.navigate(['changePassword']);
    }
    relatedCompany()
    {
      // this.getEmpFieldByEmpIdObj.getEmpfieldByEmp(localStorage.getItem('emp_id')).subscribe(
      //   (data:any)=>{
      //     console.log(data);
      //     this.emp_field=data[0].emp_field;
      //     localStorage.setItem('emp_field',this.emp_field);
      //     // alert(this.emp_field);
      //     this._route.navigate(['Emp-field-wise-Company']);
      //   }
      // );
      localStorage.setItem('emp_field',this.emp_field);
      //  alert(this.emp_field);
      this._route.navigate(['Emp-field-wise-Company']);
    }
}
