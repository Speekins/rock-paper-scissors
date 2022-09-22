//Global Variables
var currentGame = new Game();

//Query Selectors
var fighterSection = document.getElementById('fighter-section');
var choicesSection = document.getElementById('show-choices-section');
var fightersList = document.getElementsByClassName('fighter');
var gameMessage = document.getElementById('game-message');

//Event Listeners
fighterSection.addEventListener('click', function(event) {
  currentGame.updateChoices(event.target.id);
  gameMessage.innerText = currentGame.determineWinner();
  displayWin();
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