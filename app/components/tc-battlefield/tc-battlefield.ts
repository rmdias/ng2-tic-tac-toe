import {Component} from '@angular/core';
import{tcService} from '../tc-service/tc-service';
import{tcSetValue} from '../tc-set-value/tc-set-value';
import{tcRestartGame} from '../tc-restart-game/tc-restart-game';

@Component({
  selector: 'tc-battlefield',
  templateUrl: 'app/components/tc-battlefield/tpl/tc-battlefield.html',
  providers: [tcService],
  directives : [tcSetValue, tcRestartGame]
})

export class tcBattlefield{
  constructor(private _tcService: tcService){
    this.startGame();
  }
  
  battlefield:Array<any>;
  winner:any;
  draw:any;
  currentPlayer:boolean = true; //true = x | false = o 
  currentPlayerLabel:any;
  
  startGame(){
    // hard code
    this.battlefield = [
      // y: 0  y: 1  y: 2
      [null, null, null], // x: 0
      [null, null, null], // x: 1
      [null, null, null]  // x: 2
    ];

    this.winner = this.draw = false;
    this.currentPlayerLabel = this.returnCurrentPlayer(this.currentPlayer);
  }
   
  play(x:number, y:number, currentPlayer:boolean){
    if(typeof(this.battlefield[x][y]) !== "string"){
      if(currentPlayer)
        this.battlefield[x][y] = 'X';
      else
        this.battlefield[x][y] = 'O';
      
      this.checkGame(this.battlefield);
      this.currentPlayer = !this.currentPlayer;
      this.currentPlayerLabel = this.returnCurrentPlayer(this.currentPlayer);
    }
  }

  checkGame(battlefield:any){
    let gameStatus:any = this._tcService.checkGame(battlefield) || false;
    
    if(gameStatus && gameStatus.endGame){
      gameStatus.winner = this.returnCurrentPlayer(this.currentPlayer);
      this.winner = gameStatus;
    }else if(gameStatus && gameStatus.draw){
      this.draw = gameStatus.draw;
    }
  }
  
  returnCurrentPlayer(currentPlayer:any){
    if((currentPlayer && typeof(currentPlayer) === 'boolean')|| (currentPlayer && typeof(currentPlayer) === 'string') && currentPlayer === 'X')
      return '<img src="app/images/ic_X.svg" alt="X">';
    else
      return '<img src="app/images/ic_O.svg" alt="O">';
  }
}