var Player = require('./player.js');

class Game {
  constructor() {
    this.players = [];
  }

  populatePlayers() {
    var human = new Player();
    var computer = new Player('computer');
    this.players.push(human, computer);
  }

  determineWinner() {
    var human = this.players[0];
    var computer = this.players[1];
    if (human.choice === 'rock' && computer.choice === 'scissors') {
        human.gamesWon += 1;
    } else if (human.choice === 'paper' && computer.choice === 'rock') {
        human.gamesWon += 1;
    } else if (human.choice === 'scissors' && computer.choice === 'paper') {
        human.gamesWon += 1;
    } else if (human.choice === computer.choice) {
      console.log('It\'s a tie!')
      return 
    } else { computer.gamesWon += 1 };
    }

    changeHumanName(name) {
      this.players[0].name = name;
    }

    changeHumanIcon(icon) {
      this.players[0].icon = icon;
    }
}

// Tests
// var newGame = new Game;

// newGame.populatePlayers();
// newGame.changeHumanName('spencer');
// newGame.changeHumanIcon('🎩');
// newGame.players[0].updateChoice('scissors');

// console.log(newGame);

// newGame.determineWinner();

// console.log('Human: ', newGame.players[0]);
// console.log('Computer: ', newGame.players[1]);