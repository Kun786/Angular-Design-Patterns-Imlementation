import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  _Constructor='';
  _ngOnInIt='';
  _ShowChild=0;
  constructor() { 
    this._Constructor = 'Parent Constructor has Called';
  }

  ngOnInit(): void {
    this._ngOnInIt = 'Parent ngOnInIt life Cycle Hooks is called Remember ngOnInIt() and Constructor once called During Initilization'
  }

  ShowChild(){
    this._ShowChild = 1;
  }
}
