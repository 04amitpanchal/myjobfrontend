import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus-for-emp',
  templateUrl: './contactus-for-emp.component.html',
  styleUrls: ['./contactus-for-emp.component.css']
})
export class ContactusForEmpComponent implements OnInit {

  emp_photo:string;
  constructor(private _route:Router) { }

  ngOnInit() {
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
      // localStorage.setItem('emp_field',this.emp_field);
      //  alert(this.emp_field);
      this._route.navigate(['Emp-field-wise-Company']);
    }

}
