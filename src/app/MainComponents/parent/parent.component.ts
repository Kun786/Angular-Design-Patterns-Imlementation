import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, DoCheck, OnChanges{
  _Constructor='';
  _ngOnInIt='';
  _ShowChild=false;
  _ParentData='';
  constructor() { 
    console.log('Parent Constructor() is Provoked');
    this._Constructor = 'Parent Constructor has Called';
  }

  ngOnInit(): void {
    console.log('Parent ngOnInIt() is Provoked');
    this._ngOnInIt = 'Parent ngOnInIt life Cycle Hooks is called Remember ngOnInIt() and Constructor once called During Initilization'
  }

  ShowChild(){
    this._ShowChild = !this._ShowChild;
  }

  ngDoCheck(): void {
      console.log('Parent DoCheck() is Provoked');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Parent OnChanges() is Provoked');
  }
}
