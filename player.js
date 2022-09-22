class Player {
  constructor(name) {
    this.name = name;
    this.gamesWon = 0;
    this.fighters = ['rock', 'paper', 'scissors'];
    this.choice;
    this.icon;
    if (this.name === 'computer'.toLowerCase()) {
      this.randomChoice();
    };
  }

  randomChoice() {
    var randomIndex = Math.floor(Math.random() * this.fighters.length);
    this.choice = this.fighters[randomIndex];
    this.icon = '💻';
  }

  changeDifficulty() {
    if (this.fighters.length === 3){
    this.fighters = ['spock', 'rock', 'paper', 'scissors', 'lizard'];
    } else {
      this.fighters = ['rock', 'paper', 'scissors'];
    }
  }
}