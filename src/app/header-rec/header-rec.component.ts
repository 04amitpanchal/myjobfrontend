import { Component, OnInit } from '@angular/core';
import { UpdaterecService } from '../services/updaterec.service';
import { Adminclass } from '../classes/adminclass';

@Component({
  selector: 'app-header-rec',
  templateUrl: './header-rec.component.html',
  styleUrls: ['./header-rec.component.css']
})
export class HeaderRecComponent implements OnInit {

  rec_id:string;
  rec_photo:string;
  constructor(private updaterec:UpdaterecService) { }

  ngOnInit() {

    this.rec_photo=localStorage.getItem('rec_photo');
    // alert(this.rec_photo);
  }
  onlogout()
  {
    localStorage.clear();
  }

}
