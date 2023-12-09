let playerX_Name = document.getElementById("playerX_Name");
let playerO_Name = document.getElementById("playerO_Name");
let playerX_Btn = document.getElementById("playerX_Btn");
let playerX_Label = document.getElementById("playerX_Label");
let playerO_Label = document.getElementById("playerO_Label");

function cadName(player){
    playerX_Name.value = playerX_Name.value.trim();
    playerO_Name.value = playerO_Name.value.trim();

    if(player == "X"){
        if(playerX_Name.value.length >= 1){
            playerX_Label.innerText = playerX_Name.value;
            playerX_Btn.disabled = true;
            playerX_Name.disabled = true;
            
        } else {
            alert("O nome deve conter no minimo 1 caracter");
        }   
    } else if(playerO_Name.value.length >= 1){
        playerO_Label.innerText = playerO_Name.value;
        playerO_Btn.disabled = true;
            playerO_Name.disabled = true;
        
    } else {
        alert("O nome deve conter no minimo 1 caracter");
    }

}
