import { Component, OnInit } from '@angular/core';
import { emp } from '../classes/employee';
import { EducationClass } from '../classes/education';
import { GetcandidatesService } from '../services/getcandidates.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-candidate',
  templateUrl: './all-candidate.component.html',
  styleUrls: ['./all-candidate.component.css']
})
export class AllCandidateComponent implements OnInit {

  id:string;
  emp:emp[]=[];
  edu:EducationClass[]=[];
  constructor(private candidate:GetcandidatesService,private _route:Router) { }

  ngOnInit() {
    // this.id=localStorage.getItem('emp_id');
    this.candidate.getallcandidates().subscribe(
    (data:any)=>
    {

      this.emp=data;
      console.log(data);
    }
    );
  }

  onEmpProfile(empid)
  {
    localStorage.setItem('emp_profile',empid);
    this._route.navigate(['employee-profile',0]);
  }

}
