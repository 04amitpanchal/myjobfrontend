import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePasswordService } from 'src/app/services/change-password.service';
import { emp } from 'src/app/classes/employee';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
emp_id:string;
emp_password:string;
firstname:string;
lastname:string;
  constructor(private _route:Router,private changePasswordObj:ChangePasswordService) { }

  ngOnInit() {
    this.emp_id=localStorage.getItem('emp_id');
    this.firstname=localStorage.getItem('first_name');
    this.lastname=localStorage.getItem('last_name');
  }
  changePassword()
  {
    this.changePasswordObj.changePassword(new emp(this.emp_id,this.emp_password)).subscribe(
      (data:any)=>{
        console.log(data);
        this._route.navigate(['employee-profile',1]);
      }
    );
  }
}
