import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {
  _Constructor='';
  _ngOnInIt='';
  constructor() {
    this._Constructor = 'Child Constructor has Called';
   }

  ngOnInit(): void {
    this._ngOnInIt = 'Parent ngOnInIt life Cycle Hooks is called Remember ngOnInIt() and Constructor once called During Initilization'
  }

  ngOnDestroy(): void {
      console.log('Child Component is Destroyed');
  }
}
