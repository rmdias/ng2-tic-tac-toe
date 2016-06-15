import {Injectable} from '@angular/core';
import {Winner} from '../tc-winner/tc-winner';

@Injectable()
export class tcService{
  
  checkGame(hash:any){
    let hashLength:Number = hash.length;

    for (var i = 0; i < hash.length; i++) {
      if ((i === 1 || i === 4 || i === 7) && (hash[i] === hash[i-1]) && (hash[i] === hash[i+1]))
        return this.winner(hash[i], i);
      else if((i === 0 || i === 1 || i === 2) && (hash[i] === hash[i+3]) && (hash[i] === hash[i+6]))
        return this.winner(hash[i], i);
      else if((i === 0 || i === 2) && (hash[i] === hash[4]) && (hash[i] === hash[8] || hash[i] === hash[6]))
        return this.winner(hash[i], i);
    };
    if(hash.every(elem => typeof(elem) == 'string'))
      return this.draw();
  }
  
  winner(winner:string, position:number){
   let winnerObject:Winner = {
     winner: winner,
     position: position,
     endGame: true
   };
   
   return winnerObject;
  }
  
  draw(){
    let drawObject:Object = {
      draw : true
    };
    
    return drawObject;
  } 
} 