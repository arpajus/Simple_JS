document.addEventListener("DOMContentLoaded", function () {
    const options = ["rock", "paper", "scissors"];
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

    const buttons = document.querySelectorAll("#options button");
    const resultDiv = document.getElementById("result");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const playerChoice = this.id;
            const computerChoice = options[Math.floor(Math.random() * 3)];
            const winner = determineWinner(playerChoice, computerChoice);

            displayResult(playerChoice, computerChoice, winner);
            updateScore(winner);
            displayScore();

            round++;

            if (round === 5) {
                endGame();
            }
        });
    });

    function determineWinner(player, computer) {
        if (player === computer) {
            return "draw";
        } else if (
            (player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")
        ) {
            return "player";
        } else {
            return "computer";
        }
    }

    function displayResult(player, computer, winner) {
        resultDiv.innerHTML = `Your choose: ${player}<br>Computer chooses: ${computer}<br>The winner of the round is: ${winner}`;
    }

    function updateScore(winner) {
        if (winner === "player") {
            playerScore++;
        } else if (winner === "computer") {
            computerScore++;
        }
    }

    function displayScore(){
        resultDiv.innerHTML += `<br><br>Results right now - Player: ${playerScore}, Computer: ${computerScore}`;
    }

    function endGame() {
        if (playerScore > computerScore) {
            resultDiv.innerHTML += "<br><br>You win the game!";
        } else if (playerScore < computerScore) {
            resultDiv.innerHTML += "<br><br>Computer wins!";
        } else {
            resultDiv.innerHTML += "<br><br>It's a tie!";
        }

        buttons.forEach(button => {
            button.disabled = true;
        });
    }
});