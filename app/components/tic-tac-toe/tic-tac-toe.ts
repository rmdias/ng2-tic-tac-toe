import {Component} from '@angular/core';
import {tcBattlefield} from '../tc-battlefield/tc-battlefield'
import {tcAbout} from '../tc-about/tc-about'

@Component({
  selector: 'tic-tac-toe',
  template: `<tc-battlefield></tc-battlefield><tc-about></tc-about>`,
  directives: [tcBattlefield, tcAbout]
})

export class TicTacToe{
  
}