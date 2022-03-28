// return random sign
function computerPlay() {
    let sign = ["rock", "paper","scissor"];

    let randomSign = Math.floor(Math.random()*sign.length);

    return sign[randomSign];
}




// return the winner of the round B/W player and computer
function palyRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        console.log(`Draw! ${playerSelection} = ${computerSelection}`);
    }
    else if((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "scissor" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "scissor")) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    else if((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "scissor" && computerSelection === "paper")) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
    else {
        console.log(`You entred wrong sign{${playerSelection}}`);
    }
}



function game() {
    let totalRounds = prompt("How many rounds you want to play? [3,5,7,10,...]");
    let totalWinsByPlayer = 0;
    let totalWinsByComputer = 0;
    for(let round = 0; round < totalRounds; round++) {
        let playerSelection = prompt("Choose one B/W [Rock, Paper, Scissor]");
        playerSelection = playerSelection.toLowerCase()
        let computerSelection = computerPlay();
        palyRound(playerSelection, computerSelection);
    }

  
}

game();
