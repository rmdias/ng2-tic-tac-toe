import {Directive, ElementRef, Input, OnChanges, SimpleChange} from '@angular/core';

@Directive({
   selector : '[tc-set-value]',
   inputs:['value', 'endGame'],
   host: {
    '(click)': 'writeMove()'
   }
})

export class tcSetValue{
  constructor(public _elementRef: ElementRef) {
  }
 
 
  value:string;
  endGame:boolean;

  writeMove(){
    if (this._elementRef.nativeElement.innerHTML.length < 1)
      this._elementRef.nativeElement.innerHTML = this.value;
  }
  
  cleanBattlefield(){
     this.endGame = false;
     setTimeout(() => this._elementRef.nativeElement.innerHTML = '', 2000);
  }
  
  ngOnChanges(changes:{[propName:string]: SimpleChange}){
    let isEndGame:any = changes['endGame'];
    if (isEndGame !== undefined && isEndGame.currentValue !== undefined && isEndGame.currentValue)
      this.cleanBattlefield();
   }
}


