const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const ROUNDS = 5;


function getComputerChoice() {
    const choices = [ROCK, PAPER, SCISSORS];
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();

    switch (player) {
        case "ROCK":
            if (computer === "PAPER") {
                return "Computer win"; //0 = computer wins
            } else if (computer === "SCISSORS") {
                return "Player win"; // 1 = player wins
            } else {
                return "No winner"; //2 = tie
            }
            break;
        case "PAPER":
            if (computer === "PAPER") {
                return "No winner";
            } else if (computer === "SCISSORS") {
                return "Computer win";
            } else {
                return "Player win";
            }
            break;
        case "SCISSORS":
            if (computer === "PAPER") {
                return "Player win";
            } else if (computer === "SCISSORS") {
                return "No winner";
            } else {
                return "Computer win";
            }
            break;
        default:
            console.log("There is an error.")
            return "No winner";
    }
}

function game() {
    let userPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < ROUNDS; i++) {
        let resultRound=playRoundGame(i);
        let update=updatePoints(resultRound,userPoints,computerPoints);
        userPoints=update.userPoints;
        computerPoints=update.computerPoints;
    }
    sayWinner(userPoints,computerPoints);
}

function playRoundGame(numberRound){
    alert("We are in " + (numberRound + 1) + " round");
    let playerSelection = prompt("Choose: Rock, Paper or Scissors");
    let computerSelection = getComputerChoice();
    alert("The computer chooses "+computerSelection);
    let round = playRound(playerSelection, computerSelection);
    alert("In this round " + round);
    return round;
}

function updatePoints(resultRound,userPoints,computerPoints){
    if (resultRound === "Computer win") {
        computerPoints++;
    } else if (resultRound === "Player win") {
        userPoints++;
    }
    alert("After this round the points are like that: You: " + userPoints + " Computer: " + computerPoints);
    return{userPoints,computerPoints};
}

function sayWinner(userPoints,computerPoints){
    if (userPoints > computerPoints) {
        alert("You win the game!");
    } else if (computerPoints > userPoints) {
        alert("The computer win the game");
    } else {
        alert("It's a tie");
    }
}

game();
