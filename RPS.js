const prompt = require("prompt-sync")();


function getComputerChoice() {
	const computerNumber = Math.floor(Math.random() * 3) + 1;
	if (computerNumber === 1) {
		return "Rock";
	}
	if (computerNumber === 2) {
		return "Paper";
	}
	if (computerNumber === 3){
		return "Scissors";
	}
}

function getHumanChoice() {
	const humanNumber = prompt("Enter a number between 1 and 3. 1: Rock, 2: Paper and 3: Scissors : ");
	if (humanNumber === 1) {
		return "Rock";
	}
	if (humanNumber === 2) {
		return "Paper";
	}
	if (humanNumber === 3){
		return "Scissors";
	}
}

function playRound(humanChoice, computerChoice) {

	if ((humanChoice === "Rock") && (computerChoice === "Paper")) {
		console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
		computerScore++;
	}

	if ((humanChoice === "Rock") && (computerChoice === "Scissors")) {
		console.log(`You win! ${humanChoice} beats ${computerChoice}`);
		humanScore++;
	}

	if ((humanChoice === "Rock") && (computerChoice === "Rock")) {
		console.log(`It's a draw! ${humanChoice} cannot crush ${computerChoice}`);
	}

	if ((humanChoice === "Paper") && (computerChoice === "Scissors")) {
		console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
		computerScore++;
	}

	if ((humanChoice === "Paper") && (computerChoice === "Rock")) { 
		console.log(`You win! ${humanChoice} beats ${computerChoice}`);
		humanScore++;
	}

	if ((humanChoice === "Paper") && (computerChoice === "Paper")) { 
		console.log(`It's a draw! ${humanChoice} cannot wrap ${computerChoice}`);
	}

	if ((humanChoice === "Scissors") && (computerChoice === "Rock")) {
		console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
		computerScore++;
	}

	if ((humanChoice === "Scissors") && (computerChoice === "Paper")) {
		console.log(`You win! ${humanChoice} beats ${computerChoice}`);
		humanScore++;
	}

	if ((humanChoice === "Scissors") && (computerChoice === "Scissors")) {
		console.log(`It's a draw! ${humanChoice} cannot cut ${computerChoice}`);
	}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
