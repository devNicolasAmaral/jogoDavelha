playButton = document.getElementById("play-button");
playMode1 = document.getElementById("play-mode1");
playMode2 = document.getElementById("play-mode2");
menu = document.getElementById("menu");
player1Input = document.getElementById("player1-input");
player2Input = document.getElementById("player2-input");
signInBox = document.getElementById("form");
signInButton = document.getElementById("sign-in-players"); 
player1Name = document.getElementById("player1-name");
player2Name = document.getElementById("player2-name");
namesSection = document.getElementById("names");
PlayerLabel2 = document.getElementById("player-label2");
player1Score = document.getElementById("player1-score");
player2Score = document.getElementById("player2-score");
isCPU = false;


function ChoseMode(){
    playButton.style.display = "none";
    playMode1.style.display = "flex";
    playMode2.style.display = "flex";
}

function ShowSignInPlayersMode1(){
    isCPU = false;
    playMode1.style.display = "none"; 
    playMode2.style.display = "none";
    signInBox.style.display = "flex";
    menu.style.justifyContent = "space-evenly";
    player2Input.style.marginBottom = "1.5rem";
}

function ShowSignInPlayersMode2(){
    isCPU = true;
    playMode1.style.display = "none"; 
    playMode2.style.display = "none";
    signInBox.style.display = "flex";
    menu.style.justifyContent = "space-evenly";
    player2Input.style.display = "none";
    PlayerLabel2.style.display = "none";
    player1Input.style.marginBottom = "3rem";
    
}

function SignInPlayers(){
    player1Input.value = player1Input.value.trim();
    player2Input.value = player2Input.value.trim();
        
    if(isCPU){
        player2Input.value = "CPU";
    }
          
    if(player1Input.value.length >= 1 && player2Input.value.length >= 1){
        player1NameValue = player1Input.value;
        player2NameValue = player2Input.value;

        player1Name.innerHTML = player1NameValue;
        player2Name.innerHTML = player2NameValue;

        namesSection.style.display = "flex";
        menu.style.display = "none";
    } else {
        alert("O nome do jogador deve conter no minimo 1 caracter!");
    }   
}

