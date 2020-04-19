
let cards = [
		{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
		},
		{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
		},
		{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
		},
		{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-diamonds.png"
		},
	];
let cardsInPlay = [];
let playerScore = 0;

function resetBoard () {
	//I would have removed .game-board but the page jumped around. So I removed images instead.
	let cardsNodeList = document.querySelectorAll('img');
	for (j = 0; j < cards.length; j++) {
		let cardToRemove = cardsNodeList[j]
		cardToRemove.remove()
		cardsInPlay = [];
	};
	createBoard();
}

function createBoard() {
	for (i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
	//Load reset button
	let resetButton = document.getElementById('reset-button');
	resetButton.addEventListener('click', resetBoard);
};

function flipCard() {
	let cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage); 
	cardsInPlay.push(cards[cardId].rank);
 	checkForMatch();
};

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			playerScore += 1;	
		} else {
			playerScore = 0;
		};
	updateScore();	
	};

};

function updateScore() {
	let scoreBoard = document.getElementById('score');
	if (playerScore > 1) {
		scoreBoard.innerHTML = `You got ${playerScore} in a row!`
	} else if (playerScore === 1) {
		scoreBoard.innerHTML = `Oooh you got ${playerScore} right!`
	} else {
		scoreBoard.innerHTML = `Not so smart...`
	};
};

createBoard();