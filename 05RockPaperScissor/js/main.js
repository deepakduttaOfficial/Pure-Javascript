const userSpan = document.createElement("span");
const computerSpan = document.createElement("span");

// User score vlue
const userScoreVal = document.querySelector("#userScoreVal");
const compScoreVal = document.querySelector("#compScoreVal");

// Running game
const user = document.getElementById("result-user-stat");
const computer = document.getElementById("result-comp-stat");
const winner = document.getElementById("result-final-stat");

// Button choose
const buttons = document.querySelectorAll(".choice");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let userChoosenValue = e.currentTarget.id;
    let computerChoosenValue = computerVal();

    userSpan.innerHTML = getName(userChoosenValue);
    computerSpan.innerHTML = getName(computerChoosenValue);

    user.appendChild(userSpan);
    computer.appendChild(computerSpan);

    const winnerName = gameBrain(userChoosenValue, computerChoosenValue);
    winner.innerHTML = `Winner: ${winnerName}`;
    // Update score
    scoreboard(winnerName);
  });
});

function scoreboard(name) {
  if (name === "Computer") {
    compScoreVal.innerHTML++;
  } else if (name === "User") {
    userScoreVal.innerHTML++;
  }
}
// Main game brain
const gameBrain = (user, computer) => {
  let winner;
  if (user === "r" && computer === "p") {
    winner = "Computer";
  } else if (user === "p" && computer === "r") {
    winner = "User";
  } else if (user === "p" && computer === "s") {
    winner = "Computer";
  } else if (user === "s" && computer === "p") {
    winner = "User";
  } else if (user === "s" && computer === "r") {
    winner = "Computer";
  } else if (user === "r" && computer === "s") {
    winner = "User";
  } else {
    winner = "Draw";
  }
  return winner;
};

// Computer random value
function computerVal() {
  let computer = "rps";
  let computerVal = computer[Math.floor(Math.random() * computer.length)];
  return computerVal;
}

// Get name means ({r:Rock , p:Paper, s:scissors})
function getName(value) {
  let rValue;
  if (value === "r") {
    rValue = " ROCK";
  } else if (value === "p") {
    rValue = " PAPER";
  } else if (value === "s") {
    rValue = " SCISSORS";
  }
  return rValue;
}
