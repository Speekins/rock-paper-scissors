class Player {
  constructor(name, icon) {
    this.name = name || 'player';
    this.score = 0;
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

  changeFighters(gameType) {
    if (gameType === 'classic'){
    this.fighters = ['rock', 'paper', 'scissors'];
    } else if (gameType === 'enhanced') {
      this.fighters = ['alien', 'rock', 'paper', 'scissors', 'lizard'];
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