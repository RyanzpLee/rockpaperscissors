// Create a global array called moves, which stores the 3 moves of rock paper scissors
const moves = ['Rock', 'Paper', 'Scissors'];
const wrapper = document.querySelector('.wrapper');
const r = document.querySelector('.rock');
const p = document.querySelector('.paper');
const s = document.querySelector('.scissors');
const text = document.querySelector('.result');
const roundNumber = document.getElementById('roundNumber');
const roundTotal = document.getElementById('roundTotal');
const para = document.createElement('p');
let round = 0;
let playerScore = 0;
let computerScore = 0;

wrapper.addEventListener('click', game());
roundNumber.textContent = `Round ${round}`;

function game() {
  r.addEventListener('click', updateRound(moves[0]));
  p.addEventListener('click', updateRound(moves[1]));
  s.addEventListener('click', updateRound(moves[2]));
}

function updateRound(move) {
  round += 1;
  result = playRound(move, computerPlay());
  score = updateScore(result);
  roundTotal.textContent = `${score[0]} - ${score[1]}`;
  para.textContent = result;
  text.appendChild(para);
}

function computerPlay() {
  // create a random number between 0 - 2 and pick rock paper or scissors
  let index = Math.floor(Math.random() * 3);

  // store this index in the variable computerMove
  let computerMove = moves[index];

  //  Return the computer's random move
  return computerMove;
}

// create a function that takes two command line arguments playerSeleciton and computerSelection
function playRound(playerSelection, computerSelection) {
  // output the message "You lose/ You win! X beats Y" depending on the move comparison
  const win = `You Win! ${playerSelection} beats ${computerSelection}`;
  const lose = `You Lose! ${playerSelection} loses to ${computerSelection}`;
  const tie = `You Tie! ${playerSelection} ties with ${computerSelection}`;
  let result;

  // Compares the two variables
  // it's a tie
  if (playerSelection === computerSelection) {
    result = 'tie';
  }

  // rock beats scissors but loses to paper
  else if (playerSelection === moves[0]) {
    if (computerSelection === moves[2]) {
      result = 'win';
    } else if (computerSelection === moves[1]) {
      result = 'lose';
    }
  }

  // paper beats rock, but loses to scissors
  else if (playerSelection === moves[1]) {
    if (computerSelection === moves[0]) {
      result = 'win';
    } else if (computerSelection === moves[2]) {
      result = 'lose';
    }
  }

  //  scissors beats paper, but loses to rock
  else if (playerSelection === moves[2]) {
    if (computerSelection === moves[1]) {
      result = 'win';
    } else if (computerSelection === moves[0]) {
      result = 'lose';
    }
  }

  return result;
}

function updateScore(result) {
  switch (result) {
    case 'win':
      playerScore += 1;
      return [playerScore, computerScore];

    case 'lose':
      computerScore += 1;
      return [playerScore, computerScore];

    case 'tie':
      return [playerScore, computerScore];
  }
}
