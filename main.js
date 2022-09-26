//Global Variables
var currentGame = new Game();
var winnerMessage;

//Query Selectors
var startScreen = document.getElementById('start-screen');
var gameArea = document.getElementById('game-area');
var fighterSection = document.getElementById('fighter-section');
var allFighters = document.getElementsByClassName('all-fighters');
var enhancedFighters = document.getElementById('enhanced-fighters');
var choicesSection = document.getElementById('show-choices-section');
var computerScoreboard = document.querySelector('.computer-scoreboard');
var playerScoreboard = document.querySelector('.player-scoreboard');
var fightersList = document.getElementsByClassName('fighter');
var gameMessage = document.getElementById('game-message');
var computerScore = document.getElementById('computer-score');
var playerScore = document.getElementById('player-score');
var playerIcon = document.getElementById('player-icon');
var playerName = document.getElementById('player-name');
var computerIcon = document.getElementById('computer-icon');
var gameTypeSection = document.getElementById('game-type-section');
var changeGameButton = document.getElementById('change-game-button');
var iconChoices = document.getElementById('icon-choices');
var enterName = document.getElementById('enter-name');
var letsPlayButton = document.getElementById('lets-play');
var nameWarning = document.getElementById('name-warning');
var chooseYourIcon = document.getElementById('choose-your-icon');


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
  show(playerScoreboard, gameArea, computerScoreboard);
})

fighterSection.addEventListener('click', function(event) {
  currentGame.updateChoices(event.target.id);
  winnerMessage = currentGame.determineWinner();
  gameMessage.innerText = winnerMessage;
  updateScore();
  displayWin();
  show(changeGameButton);
  setTimeout(resetGameDisplay, 2000);
})

changeGameButton.addEventListener('click', showStartSection);

gameTypeSection.addEventListener('click', function(event) {
  if (event.target.closest('div').id === 'classic-game') {
    currentGame.changeGameMode('classic');
    hide(enhancedFighters, gameTypeSection);
    show(gameArea, computerScoreboard, playerScoreboard);
  } else if (event.target.closest('div').id === 'enhanced-game') {
    currentGame.changeGameMode('enhanced');
    hide(gameTypeSection);
    show(gameArea, computerScoreboard, playerScoreboard, enhancedFighters);
  }
})

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

function displayWin() {
  hide(fighterSection);
  show(choicesSection);
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < fightersList.length; j++) {
      if (currentGame.players[i].choice === fightersList[j].id) {
        var img = document.createElement('img');
        img.src = fightersList[j].src;
        highlightWinner(img, i);
        choicesSection.appendChild(img);
      }
    }
  }
}

function highlightWinner(element, index) {
  if (winnerMessage.includes('You') && index === 0) {
    element.classList.add('winner', 'choice');
  } else if (winnerMessage.includes('Computer') && index === 1) {
    element.classList.add('winner', 'choice');
  } else if (winnerMessage.includes('tie')){
    element.classList.add('choice');
    return;
  } else { element.classList.add('loser', 'choice') }
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

function showStartSection() {
  hide(gameArea, computerScoreboard, playerScoreboard);
  show(gameTypeSection);
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
}