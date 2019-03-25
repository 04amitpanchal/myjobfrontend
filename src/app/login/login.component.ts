import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';
import { log } from './loginclass';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email_id:string;
  password:string;
  image:string;
  selectedfiles:File=null;
  arr:log[]=[];
  ngOnInit(){
  }
  constructor(private _route:Router,private login:LoginserviceService) { }
  onlogin()
  {
    const fd=new FormData();
    fd.append('email_id',this.email_id);
    fd.append('password',this.password);
    fd.append('image',this.selectedfiles,this.selectedfiles.name);
    this.login.addall(fd).subscribe(
      (data:any)=>{
        this.arr.push(new log(this.email_id,this.password,this.image))
      }
    );
    this._route.navigate(['viewprofile']);
  }

  onChange(value)
  {
    this.selectedfiles=<File>value.target.files[0];

  }

  // onlogin(){
  //   this.login.loginget(new log(this.email_id,this.password)).subscribe(
  //     (data:log[])=>{
  //       if (data.length==1) {
  //         this._route.navigate(['/viewprofile']);
  //       }
  //     }
  //   );
  // }

}
