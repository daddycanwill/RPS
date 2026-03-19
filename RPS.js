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
		console.log(`Its a draw! ${humanChoice} vs ${computerChoice}`);
	}

	else if (((humanChoice === "Rock") && (computerChoice === "Scissors")) || 
			((humanChoice === "Scissors") && (computerChoice === "Paper")) ||
			((humanChoice === "Paper") && (computerChoice === "Rock"))) {
		console.log(`You win! ${humanChoice} beats ${computerChoice}`);
		humanScore++;
	}

	else {
		console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
		computerScore++;
	}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

playRound(humanSelection, computerSelection);

console.log(`human: ${humanScore}`);
console.log(`computer: ${computerScore}`);






