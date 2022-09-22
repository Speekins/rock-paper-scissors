class Player {
  constructor(name, icon) {
    this.name = name || 'player';
    this.gamesWon = 0;
    this.fighters = ['rock', 'paper', 'scissors'];
    this.choice;
    this.icon = icon || '😀';
    if (this.name === 'computer'.toLowerCase()) {
      this.icon = '💻';
    };
  }

  randomChoice() {
    var randomIndex = Math.floor(Math.random() * this.fighters.length);
    this.choice = this.fighters[randomIndex];
  }

  changeFighters() {
    if (this.fighters.length === 3){
    this.fighters = ['spock', 'rock', 'paper', 'scissors', 'lizard'];
    } else {
      this.fighters = ['rock', 'paper', 'scissors'];
    }
  }

  updateChoice(choice) {
    if (this.name !== 'computer') {
      this.choice = choice;
    } else {
      this.randomChoice();
    }
  }
}

// module.exports = Player;