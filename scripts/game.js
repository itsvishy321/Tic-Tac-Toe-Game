function resetGame(){
    // reset all the vaiables
    activePlayer = 0;
    editedPlayer = 0;
    currentRound = 1;
    isGameOver = false;
    
    // change the winner data back to default 
    gameOverElement.firstElementChild.innerHTML = 'You Won! <span id="winner-name">PLAYER NAME</span>';

    // make the gameover pop up hidden
    gameOverElement.style.display = 'none';

    // reset the matrix values and game board back to default
    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3 ; j++) {
            gameData[i][j] = 0;
            gameFieldElement.children[gameBoardIndex].textContent = '';
            gameFieldElement.children[gameBoardIndex].classList.remove('clicked');
            gameBoardIndex++;
        }
    }
}

function startNewGame() {

    if(players[0].name === '' || players[1].name === ''){
        alert('Please set custom player names for both players')
        return;
    }

    resetGame();
    gameAreaElement.style.display = 'block';
    activeplayerNameElement.textContent = players[activePlayer].name;
}

function switchPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    }
    else{
        activePlayer = 0;
    }
}

function selectGameField(event){

    const selectedField = event.target;

    if(selectedField.tagName !== 'LI' || isGameOver){
        return;
    }
    const selectedRow = selectedField.dataset.row - 1;
    const selectedCol = selectedField.dataset.col - 1;

    
    if(gameData[selectedRow][selectedCol] !== 0){
        alert('Please select an empty field!');
        return;
    }
    
    selectedField.textContent = players[activePlayer].symbol; 
    selectedField.classList.add('clicked');
    
    gameData[selectedRow][selectedCol] = activePlayer + 1;
    // console.log(gameData);

    const winnerId  = checkForWinner();

    if(winnerId !== 0){
        endGame(winnerId);
    }
    console.log(winnerId);

    // increment the round
    currentRound++;
    
    switchPlayer();
    activeplayerNameElement.textContent = players[activePlayer].name;
}

function checkForWinner() {
    // check for row equality
    for (let i = 0; i < 3 ; i++) {
        if(gameData[i][0] > 0 && 
            gameData[i][0] == gameData[i][1] && 
            gameData[i][1] == gameData[i][2]){
                return gameData[i][0];
            }
    }
    
    // check for column equality
    for (let i = 0; i < 3 ; i++) {
        if(gameData[0][i] > 0 && 
            gameData[0][i] == gameData[1][i] && 
            gameData[1][i] == gameData[2][i]){
                return gameData[0][i];
            }
    }

    // check for 1st diagonal equality
    if(gameData[0][0] > 0 &&
        gameData[0][0] == gameData[1][1] &&
        gameData[1][1] == gameData[2][2]){
            return gameData[0][0];
        }
    
    // check for 2nd diagonal equality
    if(gameData[0][2] > 0 &&
        gameData[0][2] == gameData[1][1] &&
        gameData[1][1] == gameData[2][0]){
            return gameData[0][2];
        }
    
    // check for the case of draw
    if(currentRound == 9){
        return -1;
    }

    return 0;
}

function endGame(winnerId) {
    gameOverElement.style.display = 'block';
    isGameOver = true;

    if(winnerId > 0){
        const winnerName = players[winnerId - 1].name;
        
        gameOverElement.firstElementChild.firstElementChild.textContent =  winnerName;
    }
    else{
        gameOverElement.firstElementChild.textContent = "It's a draw!";
    }
}