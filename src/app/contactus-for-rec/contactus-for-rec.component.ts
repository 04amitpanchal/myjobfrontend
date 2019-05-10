import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus-for-rec',
  templateUrl: './contactus-for-rec.component.html',
  styleUrls: ['./contactus-for-rec.component.css']
})
export class ContactusForRecComponent implements OnInit {
  rec_photo:string;


  constructor() { }

  ngOnInit() {

  }

  onlogout()
  {
    localStorage.clear();
  }

}
