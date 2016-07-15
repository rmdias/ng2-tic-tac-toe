import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
   selector : '[tc-set-value]',
   inputs:['value'],
   host: {
    '(click)': 'writeMove()'
   }
})

export class tcSetValue{
  constructor(public _elementRef: ElementRef) {
 
  }
 
  value:string;

  writeMove(){
    if (this._elementRef.nativeElement.innerHTML.length < 1)
      this._elementRef.nativeElement.innerHTML = this.value;
  }
}