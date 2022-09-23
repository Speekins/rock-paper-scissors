//Global Variables
var currentGame = new Game();
var winnerMessage;

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
  winnerMessage = currentGame.determineWinner();
  gameMessage.innerText = winnerMessage;
  updateScore();
  displayWin();
  show(changeGameButton);
  setTimeout(resetGameDisplay, 3000);
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
  console.log(currentGame.players[0].score)
}

function resetGameDisplay() {
  show(fighterSection);
  hide(choicesSection);
  choicesSection.innerHTML = '';
  gameMessage.innerText = 'Choose your fighter!';
}