// Global variables
var humanScore = 0;
var computerScore = 0;
var humanChoice = "";

// Make functions globally accessible
window.getComputerChoice = function () {
  let choice = Math.floor(Math.random() * 3);
  let answer = choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
  return answer;
};

window.getRock = function () {
  humanChoice = "rock";
  return playRound(humanChoice, getComputerChoice());
};

window.getPaper = function () {
  humanChoice = "paper";
  return playRound(humanChoice, getComputerChoice());
};

window.getScissors = function () {
  humanChoice = "scissors";
  return playRound(humanChoice, getComputerChoice());
};

// Function to determine the winner and update the score
window.playRound = function (humanChoice, computerChoice) {
  let winner = "";
  const spanHumanScore = document.getElementById("score-player");
  const spanComputerScore = document.getElementById("score-computer");

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

  spanComputerScore.textContent = computerScore;
  spanHumanScore.textContent = humanScore;

  const div = document.querySelector(".message");
  div.innerHTML = `
  <p>You chose <span id="myChoice">${humanChoice}</span> and the computer chose <span id="cpuChoice">${computerChoice}</span>. 
  <br/>
  <br/>
  <span id="winnerText">${winner}</span>
  </p>
  `;
};

window.restart = function () {
  location.reload();
};

// Function called at the start of the game to play 5 rounds
window.playGame = function () {
  document.querySelector("button").remove();
  const divElement = document.querySelector("div");
  divElement.innerHTML = `
    <div class="scoreboard">
        <label for="score-player" class="score">Player: <span id="score-player">0</span></label>
        <label for="score-computer" class="score" >Computer: <span id="score-computer">0</span></label>
    </div>
    <div class="message pb-5"></div>
      <div class="d-flex justify-content-center gap-3"> 
        <div class="row">
          <div class="col-sm pb-3">
            <button type="button " class="btn-game" onclick="getRock()">🗻</button>
          </div>
          <div class="col-sm pb-3">
            <button type="button" class="btn-game" onclick="getPaper()">🧻</button>
          </div>
          <div class="col-sm">
            <button type="button" class="btn-game" onclick="getScissors()">✂️</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button type="button" class="btn-restart" onclick="restart()">Play Again</button>
    </div>
  `;
};
