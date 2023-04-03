function openPlayerconfig(event){
    editedPlayer = +event.target.dataset.playerid;


    configOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerconfig(){
    configOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';

    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerconfig(event){
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();
    
    // for empty spaces enteres by player as input
    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add('error')
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;
    }

    const updatedplayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedplayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerconfig();
}