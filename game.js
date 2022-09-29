class Game {
  constructor() {
    this.players = [new Player(), new Player('computer')];
    this.winner;
    this.gameModes = {
      classic: ['rock', 'paper', 'scissors'],
      enhanced: ['alien', 'rock', 'paper', 'scissors', 'lizard']
    };
    this.playerIcons = ['./assets/beyonce.png', './assets/rambo.png', './assets/django.png', './assets/katniss.png', './assets/leonidas.png', './assets/blackpanther.png', './assets/brucelee.png', './assets/wonderwoman.png'];
    this.winOutcomes = {
      rock: ['scissors', 'lizard'],
      paper: ['rock', 'alien'],
      scissors: ['paper', 'lizard'],
      alien: ['scissors', 'rock'],
      lizard: ['paper', 'alien']
    }
  }

  determineWinner() {
    var human = this.players[0];
    var computer = this.players[1];

    for (var key in this.winOutcomes) {
      if (key === human.choice && this.winOutcomes[key].includes(computer.choice)) {
        human.score += 1;
        this.winner = 'human';
        return 'You won!'
      }
    }

    if (human.choice === computer.choice) {
      this.winner = '';
      return 'It\'s a tie!';
    } else {
      computer.score += 1;
      this.winner = 'computer';
      return 'Computer won!'
    }
  }

  changeGameMode(gameType) {
    for (var i = 0; i < this.players.length; i++) {
      this.players[i].fighters = this.gameModes[gameType];
    }
  }

  updateChoices(humanChoice) {
    for (var i = 0; i < this.players.length; i++) {
      this.players[i].updateChoice(humanChoice);
    }
  }
}