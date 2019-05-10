import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RelatedcandidatesForRecService } from '../services/relatedcandidates-for-rec.service';
import { emp } from '../classes/employee';

@Component({
  selector: 'app-related-candidates-for-rec',
  templateUrl: './related-candidates-for-rec.component.html',
  styleUrls: ['./related-candidates-for-rec.component.css']
})
export class RelatedCandidatesForRecComponent implements OnInit {
emp:emp[]=[];
type:String;
  constructor(private _route:Router,private candidate:RelatedcandidatesForRecService) { }

  ngOnInit() {
    this.type=localStorage.getItem('company_type');
    // alert(localStorage.getItem('company_type'));
    this.candidate.getrelatedcandidates(this.type).subscribe(
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
   this._route.navigate(['empprofileforvisitor']);
    // this._route.navigate(['employee-profile',0]);
  }

}
