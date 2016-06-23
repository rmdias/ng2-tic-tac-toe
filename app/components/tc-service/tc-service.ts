import {Injectable} from '@angular/core';


@Injectable()
export class tcService{
  
  checkGame(hash:Array<any>): any{
    const factor = hash.length;
    const checkForColMatch = (hash, x) => (hash[x][0] === hash[x][1]) && (hash[x][1] === hash[x][2]) && hash[x][2];
    const checkForRowMatch = (hash, x) => (hash[0][x] === hash[1][x]) && (hash[1][x] === hash[2][x]) && hash[2][x];
    
    const checkForXMatch = (hash) => {
      const center = hash[1][1];

      if (!center)
        return false;

      return hash[0][0] === hash[2][2] && hash[2][2] === center || hash[0][2] === hash[2][0] && hash[2][0] === center;
    };

    for (let i = 0; i < factor; i += 1) {
      if (checkForColMatch(hash, i) || checkForRowMatch(hash, i)){
        return {endGame: true};        
      }
    }

    if (checkForXMatch(hash))
      return {endGame: true};

    if(hash.every(elm => elm.reduce((a, b) => !a ? a : b) !== null))
      return {draw: true};
  }
  
} 