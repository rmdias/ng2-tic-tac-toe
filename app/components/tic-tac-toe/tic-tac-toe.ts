import {Component} from '@angular/core';

import {tcBattlefield} from '../tc-battlefield/tc-battlefield'

@Component({
  selector: 'tic-tac-toe',
  template: `<tc-battlefield></tc-battlefield>`,
  directives: [tcBattlefield]
})

export class TicTacToe{
  
}
