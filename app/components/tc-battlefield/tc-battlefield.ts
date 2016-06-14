import {Component} from '@angular/core';
import{tcService} from '../tc-service/tc-service';
import{tcSetValue} from '../tc-set-value/tc-set-value';


@Component({
  selector: 'tc-battlefield',
  templateUrl: 'app/components/tc-battlefield/tpl/tc-battlefield.html',
  providers: [tcService],
  directives : [tcSetValue]
})

export class tcBattlefield{
  constructor(private _tcService: tcService){
    this.startGame();
  }
  
  battlefield:any;
  winner:any;
  draw:any;
  currentPlayer:boolean = true; //true = x | false = o 
  currentPlayerLabel:any;
  
  startGame(){
    this.battlefield = [];
    this.winner = this.draw = false;
    this.currentPlayerLabel = this.returnCurrentPlayer(this.currentPlayer);
    
    while(this.battlefield.length < 9){
      let randomNumber:number = Math.ceil(Math.random()*100);
      let found:boolean = false;
      
      for(let i = 0; i < this.battlefield.length; i++){
        if(this.battlefield[i] == randomNumber){
          found = true;
          break;
        }
      }
      
      if(!found)
        this.battlefield[this.battlefield.length] = randomNumber;
    }
  }
   
  play(index:number, currentPlayer:boolean){
    if(typeof(this.battlefield[index]) !== "string"){
      if(currentPlayer)
        this.battlefield[index] = 'X';
      else
        this.battlefield[index] = 'O';
      
      this.checkGame(this.battlefield);
      this.currentPlayer = !this.currentPlayer;
      this.currentPlayerLabel = this.returnCurrentPlayer(this.currentPlayer);
    }
  }

  checkGame(battlefield:any){
    let gameStatus:any = this._tcService.checkGame(this.battlefield);
    
    if(gameStatus !== undefined && gameStatus.endGame){
      this.winner = gameStatus;
      setTimeout(() => this.startGame(), 2000);
    }else if(gameStatus !== undefined && gameStatus.draw){
      this.draw = gameStatus.draw;
      setTimeout(() => this.startGame(), 2000);      
    }
  }
  
  returnCurrentPlayer(currentPlayer:any){
    if(currentPlayer)
      return '<img src="app/images/ic_X.svg" alt="X">';
    else
      return '<img src="app/images/ic_O.svg" alt="O">';
  }
  
  endGame(){
    if(this.winner.endGame || this.draw)
      return true;
  }
}