import { Component, OnInit } from '@angular/core';
import { UpdaterecService } from '../services/updaterec.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Adminclass } from '../classes/adminclass';
import { Company_Type } from '../classes/companyType';

@Component({
  selector: 'app-edit-profile-rec',
  templateUrl: './edit-profile-rec.component.html',
  styleUrls: ['./edit-profile-rec.component.css']
})
export class EditProfileRecComponent implements OnInit {

  rec_id:string;
  password:string;
  company_name:string;
  company_web:string;
  adderess:string;
  rec_photo:string;
  company_type:string;
 selectedFile:File=null;
 id:string;
//  ,private updateEmpDetailsObj:UpdateEmpDetailsService
   constructor(private updaterec:UpdaterecService,private _route:Router,private _aroute:ActivatedRoute) { }

     ngOnInit() {
      // this.id=this._aroute.snapshot.params['id'];
      this.rec_id=localStorage.getItem('rec_id');
      this.updaterec.getrecById(this.rec_id).subscribe(
        (data:Adminclass[])=>{
          // console.log(data);
          this.rec_id=data[0].rec_id;
          this.password=data[0].password;
          this.company_name=data[0].company_name;
          this.company_web=data[0].company_web;
          this.rec_photo=data[0].rec_photo;
          this.company_type=data[0].company_type;
          this.adderess=data[0].adderess;
        }
      );
     }

    onChange(value){
       this.selectedFile=<File>value.target.files[0];
     }


     updaterecDetails()
     {
       if(this.rec_id==null || this.password==null || this.company_name==null || this.company_type==null || this.adderess==null )
       {
       if(this.rec_photo==null){
         alert('choose image first');
       }
       else
       {
         alert('all fields are mendatory,any field can not be left blank.');
       }
      }
       else{
       const fd=new FormData();
      //  this.id=this._aroute.snapshot.params['id'];
       // alert(this.id);
      //  this.rec_id=localStorage.getItem('rec_id');
       fd.append('rec_id',this.rec_id);
       fd.append('password',this.password);
       fd.append('company_name',this.company_name);
       fd.append('company_web',this.company_web);
       fd.append('adderess',this.adderess);
       fd.append('company_type',this.company_type);
       fd.append('image',this.selectedFile,this.selectedFile.name);
       console.log(fd);
       this.updaterec.updaterec(fd).subscribe(
         (data:any)=>{
                 console.log(data);
                 alert(" added sucessfully sucessfully");
                 this._route.navigate(['recruiterprofile',1]);
                }
       );

     }
     }

}
