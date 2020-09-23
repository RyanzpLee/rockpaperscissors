const moves = ['Rock', 'Paper', 'Scissors'];
const roundNumber = document.getElementById('roundNumber');
const roundTotal = document.getElementById('roundTotal');
const para = document.createElement('p');
let gameButtons = document.getElementById('gameplay-buttons');
let playAgain = document.getElementById('play-again');
let results = document.getElementById('results');
let round = 0;
let playerScore = 0;
let computerScore = 0;

roundNumber.textContent = `Round ${round}`;

const r = document.querySelector('.rock');
r.onclick = () => {
  playerSelection = moves[0];
  document.getElementById('player-choice').innerHTML = `Your choice: ${playerSelection}`;
  playRound(playerSelection, computerPlay());
};

const p = document.querySelector('.paper');
p.onclick = () => {
  playerSelection = moves[1];
  document.getElementById('player-choice').innerHTML = `Your choice: ${playerSelection}`;
  playRound(playerSelection, computerPlay());
};
const s = document.querySelector('.scissors');
s.onclick = () => {
  playerSelection = moves[2];
  document.getElementById('player-choice').innerHTML = `Your choice: ${playerSelection}`;
  playRound(playerSelection, computerPlay());
};

playAgain.addEventListener('click', () => {
  window.location.reload();
});

function computerPlay() {
  let computerChoice = document.getElementById('computer-choice');
  let index = Math.floor(Math.random() * 3);
  let computerMove = moves[index];
  computerChoice.innerHTML = `Computer's choice: ${computerMove}`;
  return computerMove;
}

// create a function that takes two command line arguments playerSeleciton and computerSelection
function playRound(playerSelection, computerSelection) {
  // output the message "You lose/ You win! X beats Y" depending on the move comparison
  let result;
  round++;
  roundNumber.innerHTML = `Round ${round}`;

  // Compares the two variables
  // it's a tie
  if (playerSelection === computerSelection) {
    results.innerHTML = "It's a draw, try again.";
    result = 'tie';
  }

  // rock beats scissors but loses to paper
  else if (playerSelection === moves[0]) {
    if (computerSelection === moves[2]) {
      playerScore += 1;
      results.innerHTML = 'You win this round!';
      roundTotal.innerHTML = `${playerScore} - ${computerScore}`;
      result = 'win';
    } else if (computerSelection === moves[1]) {
      computerScore += 1;
      results.innerHTML = 'You lose this round.';
      roundTotal.innerHTML = `${playerScore} - ${computerScore}`;
      result = 'lose';
    }
  }

  // paper beats rock, but loses to scissors
  else if (playerSelection === moves[1]) {
    if (computerSelection === moves[0]) {
      playerScore += 1;
      results.innerHTML = 'You win this round!';
      roundTotal.innerHTML = `${playerScore} - ${computerScore}`;
      result = 'win';
    } else if (computerSelection === moves[2]) {
      computerScore += 1;
      results.innerHTML = 'You lose this round.';
      roundTotal.innerHTML = `${playerScore} - ${computerScore}`;
      result = 'lose';
    }
  }

  //  scissors beats paper, but loses to rock
  else if (playerSelection === moves[2]) {
    if (computerSelection === moves[1]) {
      playerScore += 1;
      results.innerHTML = 'You win this round!';
      roundTotal.innerHTML = `${playerScore} - ${computerScore}`;
      result = 'win';
    } else if (computerSelection === moves[0]) {
      computerScore += 1;
      results.innerHTML = 'You lose this round.';
      roundTotal.innerHTML = `${playerScore} - ${computerScore}`;
      result = 'lose';
    }
  }
  isMatchOver();
  return result;
}

function isMatchOver() {
  if (computerScore > 4 || playerScore > 4) {
    gameButtons.style.display = 'none';
    setTimeout(function () {
      playAgain.style.display = 'block';
    }, 200);
    if (computerScore === 5) {
      results.innerHTML = 'Sorry, you lost the game.';
    } else if (playerScore === 5) {
      results.innerHTML = 'Congratulations, you win the game';
    } else {
      return;
    }
  }
  return;
}
