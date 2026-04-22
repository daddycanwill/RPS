const prompt = require("prompt-sync")();

function getComputerChoice() {
	const computerNumber = Math.floor(Math.random() * 3) + 1;
	if (computerNumber === 1) {
		return "Rock";
	}
	else if (computerNumber === 2) {
		return "Paper";
	}
	else {
		return "Scissors";
	}
}

function getHumanChoice() {
	const humanNumber = Number(prompt("Enter a number between 1 and 3. 1: Rock, 2: Paper and 3: Scissors : "));
	if (humanNumber === 1) {
		return "Rock";
	}
	else if (humanNumber === 2) {
		return "Paper";
	}
	else if (humanNumber === 3) {
		return "Scissors";
	}
	else {
		return "Invalid choice";
	}
}

function playRound(humanChoice, computerChoice) {

	if (humanChoice === computerChoice) {
		return "draw";
	}

	else if (((humanChoice === "Rock") && (computerChoice === "Scissors")) || 
			((humanChoice === "Scissors") && (computerChoice === "Paper")) ||
			((humanChoice === "Paper") && (computerChoice === "Rock"))) {
		return "human";
		
	}

	else {
		return "computer";
	}
}

function playGame() {
	
	let humanScore = 0;
	let computerScore = 0;

	for (let i = 1; i <= 5; i++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
		let roundWinner = playRound(humanSelection, computerSelection);
		
		if (roundWinner === "human") {
			console.log(`You Win! ${humanSelection} beats ${computerSelection}`);
			humanScore++;
		}
		else if (roundWinner === "computer") {
			console.log(`You Lose! ${computerSelection} beats ${humanSelection}`)
			computerScore++;
		}
		else {
			console.log(`It's a Draw! ${computerSelection} vs ${humanSelection}`);
		}
	}

	if (humanScore > computerScore) {
		console.log(`Final Result: Congratulations! You won!`);
		console.log(`You: ${humanScore} Vs ${computerScore} :Computer`);
	}
	else if (humanScore < computerScore) {
		console.log(`Final Result: You Lost!`);
		console.log(`You: ${humanScore} Vs ${computerScore} :Computer`);
	}
	else {
		console.log(`Final Result: Its a draw!`);
		console.log(`You: ${humanScore} Vs ${computerScore} :Computer`);
	}
}

playGame();