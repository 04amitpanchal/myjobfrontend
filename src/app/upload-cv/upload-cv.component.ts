import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AddCvService } from '../services/add-cv.service';
import { Router } from '@angular/router';
import { GetEmpByIdService } from '../services/get-emp-by-id.service';
import { GetAllEducationByEmpIdService } from '../services/get-all-education-by-emp-id.service';
import { emp } from "../classes/employee";
import { EducationClass } from "../classes/education";
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-upload-cv',
  templateUrl: './upload-cv.component.html',
  styleUrls: ['./upload-cv.component.css']
})
export class UploadCvComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
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
  emp_desc:string;
  // emp_exp:number;

  fk_emp_id:string;
  emp_qual:string;
  emp_pass_year:number;
  emp_uni:string;
  emp_exp:number;
  emp_skill1:string;
  emp_skill2:string;

  visible_button:boolean=false;

  emp_arr:emp[]=[];
  edu_arr:EducationClass[]=[];

  selectedFile:File=null;
  emp_cv:string;
  // fk_emp_id:string;
  constructor(
    private _addCv:AddCvService,
    private _route:Router,
    private _getEdu:GetAllEducationByEmpIdService,
    private _getEmp:GetEmpByIdService
  ) { }

  ngOnInit() {
    this.fk_emp_id=localStorage.getItem('emp_id');
    this.emp_id=localStorage.getItem('emp_id');
    this._getEdu.getAllEduByEmpId(this.emp_id).subscribe(
      (data:any)=>{
          this.edu_arr=data;
          this.emp_qual=data[0].emp_qual;
          this.emp_pass_year=data[0].emp_pass_year;
          this.emp_uni=data[0].emp_uni;
          this.emp_exp=data[0].emp_exp;
          this.emp_skill1=data[0].emp_skill1;
          this.emp_skill2=data[0].emp_skill2;
          console.log(data);
          console.log(this.edu_arr);
                this._getEmp.getEmpDetailsById(this.emp_id).subscribe(
                (data1:any)=>{
                    this.emp_arr=data1;
                    this.first_name=data1[0].first_name;
                    this.last_name=data1[0].last_name;
                    this.Gender=data1[0].Gender;
                    this.country=data1[0].country;
                    this.city=data1[0].city;
                    this.state=data1[0].state;
                    this.emp_field=data1[0].emp_field;
                    this.emp_photo=data1[0].emp_photo;
                    this.emp_desc=data1[0].emp_desc;
                    console.log(data1);
                    console.log(this.emp_arr);


                });
    });
  }

  onChange(value){
    // console.log(value);
    this.selectedFile=<File>value.target.files[0];
  }

  onUpload()
  {
    const fd=new FormData();
        // alert("Hii");
        fd.append('fk_emp_id',this.fk_emp_id);

        fd.append('cv',this.selectedFile,this.selectedFile.name);

        console.log(fd);
        this._addCv.addCv(fd).subscribe(
          (data:any)=>{
                  console.log(data);
                  console.log(fd);
                  alert("added sucessfully");
                  this._route.navigate(['/employee-profile/12']);
                }
        );
  }
  onDownloadPDF()
  {
    // if(this.emp_exp<=0)
    // {
        // this.visible_button=true;
        const doc = new jsPDF();
        const specialElementHandlers = {
          '#editor': function(element, renderer) {
            return true;
          }
        };
        const content = this.content.nativeElement;
        doc.fromHTML(content.innerHTML, 15, 15, {
          'width': 190,
          'elementHandlers': specialElementHandlers
        });
        doc.save(this.first_name+' '+this.last_name+' '+'Resume.pdf');
    // }
    // else
    // {
    //   alert("This fasility is only for Un-Experienced Employees")
    // }

  }
}
