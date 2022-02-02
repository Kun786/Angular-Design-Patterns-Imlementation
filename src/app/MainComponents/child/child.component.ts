import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  @Input() IncomingValueForChild:any;
  @ContentChild('child') _Child:any;
  _OnChanges='';
  _Constructor='';
  _ngOnInIt='';
  _Interval:any;
  constructor() {
    this._Constructor = 'Child Constructor has Called';
    console.log('Child Constructor called');
   }

  ngOnInit(): void {
    console.log('Child ngOnInIt() called');
    this._ngOnInIt = 'Parent ngOnInIt life Cycle Hooks is called Remember ngOnInIt() and Constructor once called During Initilization';
    this._Interval = setInterval(()=>{
      let counter=0;
      counter=counter+1;
      console.log(`${counter}`,'\n');
    },1000)
    console.log('COntent intiliazed',this._Child);
  }


  ngOnDestroy(): void {
      clearInterval(this._Interval); //Here i am Clearing the Data and You can also unsubscribe() the obversable
      console.log('Child Component is Destroyed');
      console.clear();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('change() called');
      this._OnChanges = "ngOnChanges() called";
      console.log('COntent intiliazed',this._Child);
  }

  ngDoCheck(): void {
      console.log('Child DoCheck() is Provked')
  }
  ngAfterContentInit(): void {
      console.log('COntent intiliazed',this._Child);
  }

  ngAfterContentChecked(): void {
      console.log('ContentChecked Called');
  }
}
