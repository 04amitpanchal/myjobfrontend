import { Component, OnInit } from '@angular/core';
import { Adminclass } from '../classes/adminclass';
import { GetAllRecruiterService } from '../services/get-all-recruiter.service';
import { recSendCompanyType } from '../classes/getSpecificCompanySendCompanyType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
  getAllrecruiter:Adminclass[]=[];
  // SpecificCompnay:string;
  constructor(private getallRecruiterObj:GetAllRecruiterService,private _route:Router) { }

  ngOnInit() {
    // this.getallRecruiterObj.getAllRecruiter(new Adminclass(localStorage.getItem('company_type')))
    this.getallRecruiterObj.getSpecificRec(localStorage.getItem('company_type')).subscribe(
      (data:any)=>{
        console.log(data);
        this.getAllrecruiter=data;
      }
    );
  }


  goToCompanyProfile(company)
  {
    // alert(company);
    localStorage.setItem('company_profile',company);
    this._route.navigate(['recruiterprofile',0]);
  }

}
