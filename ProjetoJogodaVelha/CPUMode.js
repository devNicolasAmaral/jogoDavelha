game = [];
board = [];
whoPlay = 0;
var verify;
playing = true;
level = 1;
CPUplay = 1;
whoStart = 1;


function CPUTime(){
    if(playing){
        r, c;
        if(level == 1){
            do{
                r = Math.round(Math.random()*2);
                c = Math.round(Math.random()*2);
            }while(game[r][c] != "");
            game[r][c] = "O";
        } else if ( level == 2){

        }

        verify = VerifyWin();

        if (verify != ""){
            alert(verify + " Venceu!");
            playing = false;
        }
        
        UpdateBoard();
        whoPlay = 0;
    }
}

function VerifyWin(){
    r, c;

    for(r = 0; r < 3; r++){
        if((game[r][0] == game[r][1]) && (game[r][1] == game[r][2])){
            return game[r][0];
        }
    }

    for(c = 0; c < 3; c++){
        if((game[0][c] == game[1][c]) && (game[1][c] == game[2][c])){
            return game[0][c];
        }
    }

    if((game[0][0] == game[1][1]) && (game[1][1] == game[2][2])){
        return game[0][0];
    }

    if((game[0][2] == game[1][1]) && (game[1][1] == game[2][0])){
        return game[0][2];
    }
    return "";
}

function Play(position){
    if ((playing) && (whoPlay == 0)){
        switch(position){
            case 1:
                if (game[0][0] == ""){ game[0][0] = "X"; whoPlay = 1; } break;
            case 2:
                if (game[0][1] == ""){ game[0][1] = "X"; whoPlay = 1; } break;
            case 3:
                if (game[0][2] == ""){ game[0][2] = "X"; whoPlay = 1; } break;
            case 4:
                if (game[1][0] == ""){ game[1][0] = "X"; whoPlay = 1; } break;
            case 5:
                if (game[1][1] == ""){ game[1][1] = "X"; whoPlay = 1; } break;
            case 6:
                if (game[1][2] == ""){ game[1][2] = "X"; whoPlay = 1; } break;
            case 7:
                if (game[2][0] == ""){ game[2][0] = "X"; whoPlay = 1; } break;
            case 8:
                if (game[2][1] == ""){ game[2][1] = "X"; whoPlay = 1; } break;
            default:
                if (game[2][2] == ""){ game[2][2] = "X"; whoPlay = 1; } break;    
        }
    if (whoPlay == 1){
        UpdateBoard();
        verify = VerifyWin();
        if (verify != ""){
            if (verify == "X"){
                player1Score.innerHTML = 1; 
            }
            if (verify == "O"){
                player2Score.innerHTML = 1;
            }
            alert(verify + " Venceu!");
            playing = false;
            StartArray();
        }
        CPUTime();
    }
    }
}

function UpdateBoard(){
    for (r = 0; r < 3; r++){
        for (c = 0; c < 3; c++){
            if (game[r][c] == "X"){
                board[r][c].innerHTML = "X";
                board[r][c].style.cursor = "default";
            } else if (game[r][c] == "O") {
                board[r][c].innerHTML = "O";
                board[r][c].style.cursor = "default";
            } else{
                board[r][c].innerHTML = "";
                board[r][c].style.cursor = "pointer";
            }
        }
    }
}

function StartArray(){
    playing = true;
    CPUplay = 1;
    game = [
        ["", "", ""], 
        ["", "", ""],
        ["", "", ""]
    ];
    board = [
        [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
        [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
        [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
    ];
    UpdateBoard();
    if (whoStart == 1){
        whoStart = 0;
        whoPlay = whoStart;
        CPUplay();
    }
}

window.addEventListener("load", StartArray);