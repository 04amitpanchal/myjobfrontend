import { Component, OnInit } from '@angular/core';
import { AddrecService } from '../services/addrec.service';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { EmailClass } from '../classes/emailclass';
import { recNotification } from '../classes/recNotificationClass';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup-rec',
  templateUrl: './signup-rec.component.html',
  styleUrls: ['./signup-rec.component.css']
})



export class SignupRecComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();


  rec_id:string;
   password:string;
   company_name:string;
   company_web:string;
   adderess:string;
   rec_photo:string;
   company_type:string;

  selectedFile:File=null;
  constructor(private addrec:AddrecService,private _route:Router) { }

  ngOnInit() {
  }

  onChange(value){
    // console.log(value);
    this.selectedFile=<File>value.target.files[0];
  }

  onsignuprec()
      {
        if(this.rec_id==null || this.password==null ||this.company_type==null || this.company_web==null || this.rec_photo==null)
        {
          alert("form can not be null");

        if(this.rec_id==null)
        {

        }
        if(this.password==null)
        {
          alert("password can not be null");
        }
        if(this.company_web==null)
        {
          alert("company_web can not be null");
        }
        if(this.company_name==null)
        {
          alert("company_name can not be null");
        }
        if(this.company_type==null)
        {
          alert("company_type can not be null");
        }
        if(this.rec_photo==null)
        {
          alert("rec_photo can not be null");
        }
      }
        // if(this.rec_photo==null){
        //   alert('choose image first');
        // }
        // else{
        else
        {
        const fd=new FormData();
        // this.id=this._aroute.snapshot.params['id'];
        // alert(this.id);

        fd.append('company_name',this.company_name);
        fd.append('password',this.password);
        fd.append('company_web',this.company_web);
        fd.append('rec_id',this.rec_id);


        fd.append('adderess',this.adderess);
        fd.append('company_type',this.company_type);
        fd.append('image',this.selectedFile,this.selectedFile.name);
        console.log(fd);
        this.addrec.addrec(fd).subscribe(
          (data:any)=>{
                  console.log(data);
                  alert("added sucessfully");
                  this._route.navigate(['']);
                }
        );

      // }
              }
      }

}
