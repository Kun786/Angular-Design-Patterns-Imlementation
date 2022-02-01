import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {
  _Constructor='';
  _ngOnInIt='';
  _Interval:any;
  constructor() {
    this._Constructor = 'Child Constructor has Called';
   }

  ngOnInit(): void {
    this._ngOnInIt = 'Parent ngOnInIt life Cycle Hooks is called Remember ngOnInIt() and Constructor once called During Initilization';
    this._Interval = setInterval(()=>{
      let counter=0;
      counter=counter+1;
      console.log(`${counter}`,'\n');
    },1000)
  }


  ngOnDestroy(): void {
      clearInterval(this._Interval); //Here i am Clearing the Data and You can also unsubscribe() the obversable
      console.log('Child Component is Destroyed');
  }
}
