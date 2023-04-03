const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let isGameOver = false;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
]

const configOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activeplayerNameElement = document.getElementById('active-player-name');
const winnerSpanElement = document.getElementById('winner-name');

const editPlayer1Element = document.getElementById('edit-player-1');
const editPlayer2Element = document.getElementById('edit-player-2');
const cancelConfigElement = document.getElementById('cancel-config');
const startGameElement = document.getElementById('start-game-btn');
// const gameFieldElements = document.querySelectorAll('#game-board');
const gameFieldElement = document.getElementById('game-board');
const gameOverElement = document.getElementById('game-over');


editPlayer1Element.addEventListener('click',openPlayerconfig);
editPlayer2Element.addEventListener('click',openPlayerconfig);
cancelConfigElement.addEventListener('click',closePlayerconfig);
backdropElement.addEventListener('click',closePlayerconfig);

formElement.addEventListener('submit',savePlayerconfig);
startGameElement.addEventListener('click',startNewGame)

// for(const gameField of gameFieldElements){
//     gameField.addEventListener('click',selectGameField);
// }

gameAreaElement.addEventListener('click',selectGameField);
