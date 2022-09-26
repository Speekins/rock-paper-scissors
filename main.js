//Global Variables
var currentGame = new Game();

//Start Screen Query Selectors
var startScreen = document.getElementById('start-screen');
var iconChoices = document.getElementById('icon-choices');
var enterName = document.getElementById('enter-name');
var letsPlayButton = document.getElementById('lets-play');
var nameWarning = document.getElementById('name-warning');
var chooseYourIcon = document.getElementById('choose-your-icon');
//Game Types Query Selectors
var gameTypeSection = document.getElementById('game-type-section');
//Main Game Area Query Selectors
var gameArea = document.getElementById('game-area');
var fighterSection = document.getElementById('fighter-section');
var enhancedFighters = document.getElementById('enhanced-fighters');
var choicesSection = document.getElementById('show-choices-section');
var fightersList = document.getElementsByClassName('fighter');
var gameMessage = document.getElementById('game-message');
var changeGameButton = document.getElementById('change-game-button');
//Player & Computer Query Selectors
var computerScoreboard = document.querySelector('.computer-scoreboard');
var computerScore = document.getElementById('computer-score');
var computerIcon = document.getElementById('computer-icon');
var playerScoreboard = document.querySelector('.player-scoreboard');
var playerScore = document.getElementById('player-score');
var playerIcon = document.getElementById('player-icon');
var playerName = document.getElementById('player-name');

//Event Listeners
window.addEventListener('load', function() {
  populateIconChoices();
})

iconChoices.addEventListener('click', function(event) {
  if (!!enterName.value) {
  letsPlayButton.disabled = false;
  letsPlayButton.classList.remove('disabled');
  hide(nameWarning, chooseYourIcon);
  currentGame.players[0].updatePlayerInfo(enterName.value, event.target.src);
  iconChoices.innerHTML = '';
  appendImage('icon', iconChoices, currentGame.players[0].icon);
  } else {
    show(nameWarning);
  }
})

letsPlayButton.addEventListener('click', function() {
  playerName.innerText = currentGame.players[0].name;
  playerIcon.src = currentGame.players[0].icon;
  computerIcon.src = currentGame.players[1].icon;
  hide(startScreen);
  show(gameTypeSection);
})

gameTypeSection.addEventListener('click', function(event) {
  if (event.target.closest('div').id === 'classic-game') {
    currentGame.changeGameMode('classic');
    hide(enhancedFighters, gameTypeSection, changeGameButton);
    show(gameArea, computerScoreboard, playerScoreboard);
  } else if (event.target.closest('div').id === 'enhanced-game') {
    currentGame.changeGameMode('enhanced');
    hide(gameTypeSection, changeGameButton);
    show(gameArea, computerScoreboard, playerScoreboard, enhancedFighters);
  }
})

fighterSection.addEventListener('click', function(event) {
  currentGame.updateChoices(event.target.id);
  gameMessage.innerText = currentGame.determineWinner();
  updateScore();
  displayWin();
  show(changeGameButton);
  setTimeout(resetGameDisplay, 2000);
})

changeGameButton.addEventListener('click', showStartSection);

//Main Script
function hide(...elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('hidden');
  }
}

function show(...elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('hidden');
  }
}

function populateIconChoices() {
  for (var i = 0; i < currentGame.playerIcons.length; i++) {
    appendImage('icon-choice', iconChoices, currentGame.playerIcons[i])
  }
}

function appendImage(className, parent, src) {
  var img = document.createElement('img');
  img.src = src;
  img.classList.add(className);
  parent.appendChild(img);
  if (parent === choicesSection) {
    img.classList.add('choice');
  }
}

function showStartSection() {
  hide(gameArea, computerScoreboard, playerScoreboard);
  show(gameTypeSection);
}

function displayWin() {
  hide(fighterSection);
  show(choicesSection);
  choicesSection.innerHTML = '';
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < fightersList.length; j++) {
      if (currentGame.players[i].choice === fightersList[j].id) {
        highlightWinner(choicesSection, fightersList[j].src, i);
      }
    }
  }
}

function highlightWinner(parent, src, index) {
  if (currentGame.winner === 'human' && index === 0) {
    appendImage('winner', parent, src);
  } else if (currentGame.winner === 'computer' && index === 1) {
    appendImage('winner', parent, src);
  } else if (currentGame.winner === '') {
    appendImage(null, parent, src);
  } else { appendImage('loser', parent, src); }
}

function updateScore() {
  playerScore.innerText = currentGame.players[0].score;
  computerScore.innerText = currentGame.players[1].score;
}

function resetGameDisplay() {
  show(fighterSection);
  hide(choicesSection);
  gameMessage.innerText = 'Choose your fighter!';
}