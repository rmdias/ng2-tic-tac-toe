import {Component} from '@angular/core';

@Component({
  selector: 'tc-restart-game',
  template: '<button (click)="restartGame()">PLAY AGAIN</button>'
})

export class tcRestartGame{
  constructor(){
    this.restartGame()
  }
  
 restartGame(){
   let battleField:any = document.querySelectorAll('.square');

   for (let index:any = 0; index < battleField.length; index++)
    battleField[index].innerHTML = '';
  }
}