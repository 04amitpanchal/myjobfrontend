import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EducationClass } from '../classes/education';
import { AddEducationService } from '../services/add-education.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {
  // public fk_emp_id:string;
  edu_id:number;
  exp:number[]=[];
  epy:number[]=[];
  fk_emp_id:string;
  i:number;
  pass:number;
  public emp_qual:string;
  public emp_pass_year:string;
  public emp_uni:string;
  public emp_exp:string;
  public emp_skill1:string;
  public emp_skill2:string;
public firstname:string;public lastname:string;
  constructor(private addEducation:AddEducationService,
    private _route:Router,
    // private _getEducation:GetAllEducationService,
    private _aroute:ActivatedRoute,
    // private updateEducationObj:UpdateEducationService
    ) { }

  ngOnInit() {

      for(this.pass=1980,this.i=0;this.i<38,this.pass<=2018;this.i++,this.pass++)
      {
        this.epy[this.i]=this.pass;
      }

      // alert(this.j);

    this.firstname=localStorage.getItem('first_name');
    this.lastname=localStorage.getItem('last_name');
    for(this.i=0;this.i<20;this.i++)
    {
      this.exp[this.i]=this.i;
    }

  }
AddEducationDetails()
  {
    alert(localStorage.getItem('emp_id'));
    if(this.edu_id==null || this.emp_qual==null || this.emp_uni==null || this.emp_skill2==null || this.emp_skill1==null || this.emp_pass_year==null || this.emp_exp==null )
    {
      alert("Field Can not be Null");
    }
    else
    {
    this.addEducation.addEducation(new EducationClass(this.edu_id,localStorage.getItem('emp_id'),this.emp_qual,this.emp_pass_year,this.emp_uni,this.emp_exp,this.emp_skill1,this.emp_skill2)).subscribe(
      (data:EducationClass)=>{
        console.log(data);
        alert("Succfully Education Data Added");
        this._route.navigate(['employee-profile',1]);
      }
    );
    }

  }

}
