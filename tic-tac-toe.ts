var hash:string[] = ['o','o','x','o','x','o','x','o','x'];

const checkGame = (hash:any) => {
  let hashLength:Number = hash.length;
    if (hashLength >= 5){
      for (var i = 0; i < hash.length; i++) {
        if ((i === 1 || i === 4 || i === 7) && (hash[i] === hash[i-1]) && (hash[i] === hash[i+1])){
          // horizontal comparation

          break;
        }else if((i === 0 || i === 1 || i === 2) && (hash[i] === hash[i+3]) && (hash[i] === hash[i+6])){
          // vertical comparation

          break;
        }else if((i === 0 || i === 2) && (hash[i] === hash[i+4]) && (hash[i] === hash[i+8] || hash[i] === hash[i+2])){
          // diagonal comparation

          break;
        }else{

        }
      }
  };
};