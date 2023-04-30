
const Totalscore = { Playerscore: 0, Computerscore: 0 };
function getComputerChoice() {
  let rpschoice = ["Rock", "Paper", "Scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpschoice[randomNumber];
}
function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice == computerChoice) {
    score = 0;
  }
  else if (playerChoice == "Rock" && computerChoice == "Scissor") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissor" && computerChoice == "Paper") {
    score = 1;
  } else {
    score = -1;
  }

  return score;
}
function showResult(score, playerChoice, computerChoice) {
  let resultdiv = document.getElementById("result");
  let handdiv = document.getElementById("hands");
  let playerscore = document.getElementById("player-score");
  if (score == -1) {
    resultdiv.innerText = "You Lose!";
  } else if (score == 0) {
    resultdiv.innerText = "It's a Tie";
  } else {
    resultdiv.innerText = "You Won!";
  }
  handdiv.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
  playerscore.innerText = `Your Score: ${Totalscore.Playerscore}`;
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  Totalscore.Playerscore += score;
  showResult(score, playerChoice, computerChoice);
 
}

function playGame() {
  const rpsbuttons = document.querySelectorAll(".rpsButton");
  rpsbuttons.forEach((rpsbutton) => {
    rpsbutton.onclick = () => onClickRPS(rpsbutton.value);
  });
  let endbutton = document.getElementById("endGameButton");
  endbutton.onclick = () => endGame(Totalscore);
}

function endGame(Totalscore) {
  Totalscore.Playerscore = 0;
  Totalscore.Computerscore = 0;
  let resultdiv = document.getElementById("result");
  let handdiv = document.getElementById("hands");
  let playerscore = document.getElementById("player-score");

  resultdiv.innerText=""
  handdiv.innerText=""
  playerscore.innerText=""
}

playGame();
