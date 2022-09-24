//Global Variables
var currentGame = new Game();
var winnerMessage;

//Query Selectors
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
var computerIcon = document.getElementById('computer-icon');
var gameTypeSection = document.getElementById('game-type-section');
var changeGameButton = document.getElementById('change-game-button');


//Event Listeners
window.addEventListener('load', function() {
  computerIcon.src = currentGame.players[1].icon;
})

fighterSection.addEventListener('click', function(event) {
  currentGame.updateChoices(event.target.id);
  winnerMessage = currentGame.determineWinner();
  gameMessage.innerText = winnerMessage;
  updateScore();
  displayWin();
  show(changeGameButton);
  setTimeout(resetGameDisplay, 3000);
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
    element.classList.add('winner');
  } else if (winnerMessage.includes('Computer') && index === 1) {
    element.classList.add('winner');
  } else if (winnerMessage.includes('tie')){
    return;
  } else { element.classList.add('loser') }
}

function updateScore() {
  playerScore.innerText = currentGame.players[0].score;
  computerScore.innerText = currentGame.players[1].score;
}

function resetGameDisplay() {
  show(fighterSection);
  hide(choicesSection);
  choicesSection.innerHTML = '';
  gameMessage.innerText = 'Choose your fighter!';
}

function showStartSection() {
  hide(gameArea, computerScoreboard, playerScoreboard);
  show(gameTypeSection);
}