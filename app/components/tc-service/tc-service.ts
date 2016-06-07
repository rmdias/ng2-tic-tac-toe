import {Injectable} from '@angular/core';
import {Winner} from '../tc-winner/tc-winner'

@Injectable()
export class tcService{
  
  checkGame(hash:any){
    let hashLength:Number = hash.length;
    
    for (var i = 0; i < hash.length; i++) {
      if ((i === 1 || i === 4 || i === 7) && (hash[i] === hash[i-1]) && (hash[i] === hash[i+1])){
        console.log(hash[i], i)
        // horizontal comparison
        return this.winner(hash[i], i);
      }else if((i === 0 || i === 1 || i === 2) && (hash[i] === hash[i+3]) && (hash[i] === hash[i+6])){
        console.log(hash[i], i)
        // vertical comparison
        return this.winner(hash[i], i);
      }else if((i === 0 || i === 2) && (hash[i] === hash[i+4]) && (hash[i] === hash[i+8] || hash[i] === hash[i+6])){
        // diagonal comparison
        return this.winner(hash[i], i);
      }
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