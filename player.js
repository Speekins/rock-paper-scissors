//In main js script write code so that the new game instance is created when the lets play button is clicked
class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.fighters;
    this.choice;
    this.icon;
    this.computerIcons = ['./assets/wall-e.webp', './assets/robot.png', './assets/c3po.png'];
    if (this.name === 'computer') {
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