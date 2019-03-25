import { Component, OnInit } from '@angular/core';
import { BrowseAllCompanyService } from '../services/browse-all-company.service';
import { Adminclass } from '../classes/adminclass';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-all-company',
  templateUrl: './browse-all-company.component.html',
  styleUrls: ['./browse-all-company.component.css']
})
export class BrowseAllCompanyComponent implements OnInit {

  constructor(private allcompanyobj:BrowseAllCompanyService,private _route:Router) { }
  company:Adminclass[]=[];
  ngOnInit() {
    this.allcompanyobj.browseallcompany().subscribe(
      (data:any)=>{
        this.company=data;
        console.log(data);
      }
    );
  }
  companyprofile(recid)
  {
    localStorage.setItem('rec_profile',recid);
    alert(recid);
    this._route.navigate(['recruiterprofile',0]);
  }
}
