import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  _Constructor='';
  _ngOnInIt='';
  constructor() {
    this._Constructor = 'Child Constructor has Called';
   }

  ngOnInit(): void {
    this._ngOnInIt = 'Parent ngOnInIt life Cycle Hooks is called Remember ngOnInIt() and Constructor once called During Initilization'
  }

}
