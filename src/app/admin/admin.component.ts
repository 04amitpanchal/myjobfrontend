import { Component, OnInit } from '@angular/core';
// import { CusionsComponent } from '../cusions/cusions.component';
import { CusionsService } from '../cusions/cusions.service';
import { AdminserviceService } from './adminservice.service';
import { dish } from '../cusions/dishclass';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _ad:AdminserviceService) { }
  arr:dish[]=[];
  ngOnInit() {

    this._ad.getalldishgetalldish().subscribe(
      (data:dish[])=>
      {
        console.log('asd');
        this.arr=data;
      }
    );
  }
}
