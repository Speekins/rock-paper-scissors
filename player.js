class Player {
  constructor() {
    this.name;
    this.score = 0;
    this.fighters;
    this.choice;
    this.icon;
    this.computerIcons = ['./assets/wall-e.webp', './assets/robot.png', './assets/c3po.png'];
    if (this.name === 'computer'.toLowerCase()) {
      this.icon = this.assignRandomIcon();
    };
  }

  randomChoice() {
    var randomIndex = Math.floor(Math.random() * this.fighters.length);
    this.choice = this.fighters[randomIndex];
  }

  assignRandomIcon() {
    var randomIndex = Math.floor(Math.random() * this.computerIcons.length);
    return this.computerIcons[randomIndex]; 
  }

  updatePlayerInfo(name, src) {
    this.name = name;
    this.icon = src;
  }

  updateChoice(choice) {
    if (this.name !== 'computer') {
      this.choice = choice;
    } else {
      this.randomChoice();
    }
  }
}