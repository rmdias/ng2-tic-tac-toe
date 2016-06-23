import {Directive} from '@angular/core';

@Directive({
  selector: '[tc-restart-game]',
  host: {
    '(click)': 'restartGame()'
   }
})

export class tcRestartGame{
  constructor(){
  }
  
 restartGame(){
   let battleField:any = document.querySelectorAll('.square');

   for (let index:number = 0; index < battleField.length; index++)
    battleField[index].innerHTML = '';
  }
}