// Rock, Paper, Scissors Game

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Function to play the game
function playGame() {
    // Ask the player for their choice
    let playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();

    // Validate input
    if (!["rock", "paper", "scissors"].includes(playerChoice)) {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return;
    }

    const computerChoice = getComputerChoice();
    alert(`Computer chose: ${computerChoice}`);

    const result = determineWinner(playerChoice, computerChoice);
    alert(result);
}

// Run the game
playGame();