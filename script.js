function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() *3)
    switch (computerChoice) {
        case 0:
        return "rock"
        break;
        case 1: 
        return "paper"
        break;
        case 2: 
        return "scissors"
        break;
    }
}

let cpuChoice = getComputerChoice()
let playerChoice = prompt("Choose your move!")

function playRound(playerChoice, cpuChoice) {
    playerChoice.toLowerCase
    if (playerChoice == cpuChoice) {
        console.log("it's a draw!")
    }
}