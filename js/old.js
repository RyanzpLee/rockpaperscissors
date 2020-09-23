// Create a global array called moves, which stores the 3 moves of rock paper scissors
const moves = ["rock", "paper", "scissors"];

function game() {
  // Loop 5 rounds
  for (i = 0; i < 6; i++) {
    // prompt player for their move, and store in variable inside playerMove
    let playerMove = prompt("Choose rock, paper, or scissors: ").toLowerCase();

    // Store result of playRound() into variable result
    result = playRound(playerMove, computerPlay());

    // output the result
    console.log(result);
  }
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

  // Compares the two variables
  // it's a tie
  if (playerSelection === computerSelection) {
    return tie;
  }

  // rock beats scissors but loses to paper
  else if (playerSelection === moves[0]) {
    if (computerSelection === moves[2]) {
      return win;
    } else if (computerSelection === moves[1]) {
      return lose;
    }
  }

  // paper beats rock, but loses to scissors
  else if (playerSelection === moves[1]) {
    if (computerSelection === moves[0]) {
      return win;
    } else if (computerSelection === moves[2]) {
      return lose;
    }
  }

  //  scissors beats paper, but loses to rock
  else if (playerSelection === moves[2]) {
    if (computerSelection === moves[1]) {
      return win;
    } else if (computerSelection === moves[0]) {
      return lose;
    }
  }
}
