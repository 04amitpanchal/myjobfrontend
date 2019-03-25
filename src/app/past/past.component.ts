import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styles: []
})
export class PastComponent implements OnInit {
  displayedColumns: string[] = ['amount','date'];

  constructor() { }

  ngOnInit() {
  }

}
