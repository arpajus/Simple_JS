function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        choice = "Rock";
    } else if (choice === 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

function playRound(playerSelection,computerSelection){
    let player=playerSelection.toUpperCase();
    let computer=computerSelection.toUpperCase();
    switch (player) {
        case "ROCK":
            if (computer==="PAPER") {
                return 0; //0 = computer wins
            } else  if(computerSelection==="SCISSORS"){
                return 1; // 1 = player wins
            } else{
                let playerWin=2; //2 = tie
            }
            break;
        case "PAPER":
            if (computerSelection==="PAPER") {
                let playerWin=2;
            } else  if(computerSelection==="SCISSORS"){
                let playerWin=0;
            } else{
                let playerWin=1;
            }
            break;
        case "SCISSORS":
            if (computerSelection==="PAPER") {
                let playerWin=1;
            } else  if(computerSelection==="SCISSORS"){
                let playerWin=2;
            } else{
                let playerWin=0;
            }
            break;
        default:
            console.log("There is an error.")
            let playerWin=2;
            break;
    }
}

let choice=getComputerChoice();
let round=playRound("paper",choice);
console.log(round);
