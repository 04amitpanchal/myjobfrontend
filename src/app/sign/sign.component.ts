import { Component, OnInit } from '@angular/core';
import { ifError } from 'assert';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private _route:Router) { }
  email:string;
  fname:string;
  ngOnInit() {
  }

  addForm(item)
  {
     console.log(item);
    //  this._route.navigate(['/admin']);

}
ons()
{
  //this._route.navigate(['/admin']);

}
onadd()
{
  console.log('anj');
  this._route.navigate(['/admin']);
}
}
