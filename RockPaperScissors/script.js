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

function game(){
    let i;
    let userPoints=0;
    let computerPoints=0;
    for(i=0;i<5;i++){
        alert("We are in "+i+" round");
        let playerSelection=prompt("Choose: Rock, Paper or Scissors");
        let computerSelection=getComputerChoice();
        let round=playRound(playerSelection,computerSelection);
        alert("In this round "+ round);
        if(round==="Computer win"){
            computerPoints++;
        } else{
            userPoints++;
        }
        alert("After this round the points are like that: You: "+userPoints+" Computer: "+computerPoints);
    }

}
