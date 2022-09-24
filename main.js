//Global Variables
var currentGame = new Game();

//Query Selectors
var fighterSection = document.getElementById('fighter-section');
var choicesSection = document.getElementById('show-choices-section');
var fightersList = document.getElementsByClassName('fighter');
var gameMessage = document.getElementById('game-message');
var computerScore = document.getElementById('computer-score');
var playerScore = document.getElementById('player-score');
var playerIcon = document.getElementById('player-icon');
var changeGameButton = document.getElementById('change-game-button');

//Event Listeners
fighterSection.addEventListener('click', function(event) {
  currentGame.updateChoices(event.target.id);
  gameMessage.innerText = currentGame.determineWinner();
  playerIcon.innerText = currentGame.players[0].icon;
  displayWin();
  updateScore();
  show(changeGameButton);
})

//Main Script
function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}

function displayWin() {
  hide(fighterSection);
  show(choicesSection);
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < fightersList.length; j++) {
      if (currentGame.players[i].choice === fightersList[j].id){
        var img = document.createElement('img');
        img.src = fightersList[j].src;
        choicesSection.appendChild(img);
      }
    }
  }
}

function updateScore() {
  playerScore.innerText = currentGame.players[0].score;
  computerScore.innerText = currentGame.players[1].score;
}