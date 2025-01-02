/**
 * Game concept
 * - the game will be only made in the console *for now*
 * - start the game by calling the function (startGame)
 * - the game will have 5 rounds (playRound)
 * - the user will input a value from ["rock", "paper", "scissors"] (getUserChoice)
 * - the computer will generate a random value from ["rock", "paper", "scissors"] (getComputerChoice)
 * - the program will compare the values and determine the winner (playRound)
 * - the program will keep track of the score (humanScore) and (computerScore)
 * - the program will display the winner (showWinner)
 */

// Global variables
var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  let answer = choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";

  return answer;
}

function getHumanChoice() {
  let flag = false;
  let answer = "";

  while (!flag) {
    let choice = prompt("Choose rock, paper, or scissors: ").toLowerCase();

    answer =
      choice === "rock"
        ? "rock"
        : choice === "paper"
        ? "paper"
        : choice === "scissors"
        ? "scissors"
        : false;

    flag = answer != false ? true : false;
  }

  return answer;
}

// Function to determine the winner and update the score
function playRound(humanChoice, computerChoice) {
  let winner = "";
  if (humanChoice === computerChoice) {
    winner = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "You win!";
    humanScore++;
  } else {
    winner = "You lose!";
    computerScore++;
  }
  alert(
    `You chose ${humanChoice} and the computer chose ${computerChoice}\n${winner}`
  );
}

// Function called at the start of the game to play 5 rounds
function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
  alert(
    `The final score is: \nYou: ${humanScore} \nComputer: ${computerScore}`
  );
  humanScore = 0;
  computerScore = 0;
}
