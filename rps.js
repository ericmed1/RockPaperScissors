let computerwins = 0;
let humanwins = 0;
let countOfRounds = 0;

function playround(humanselection, computerselection){
    countOfRounds++;
    let result ="";
    if(humanselection == "rock"){
        if(computerselection == "paper"){
            computerwins++;
            result = "you lost :(";
        }
        if(computerselection == "scissors"){
            humanwins++;
            result = "you won !!";
        }
        else if(computerselection == humanselection){
            result = "its a draw";
        }
        
    }
    if(humanselection == "paper"){
        if(computerselection == "scissors"){
            computerwins++;
            result = "you lost :(";
        }
        else if(computerselection == "rock"){
            humanwins++;
            result ="you won !!";
        }
        else if(computerselection == humanselection){
            result = "its a draw";
        }
        
    }
    if(humanselection == "scissors"){
        if(computerselection == "rock"){
            computerwins++;
            result = "you lost :(";
        }
        else if(computerselection == "paper"){
            humanwins++;
            result = "you won !!";
        }
        else if(computerselection == humanselection){
            result = "its a draw";
        }
    }
    document.getElementById("result").innerText = result + ", you chose " + humanselection + ", computer chose " + computerselection;
    updateScore();
}

function getcomputerselection(number){

    if(number == 1){
        return "rock";
    }
    if(number == 2){
        return "scissors";
    }
    else{
        return "paper";
    }
}

function gethumanselection(){
    let responce = prompt("enter rock, paper, or scissors to play game!!").toLowerCase();
    return responce;
}

function updateScore(){
    document.getElementById("humanWins").innerText = humanwins;
    document.getElementById("computerWins").innerText = computerwins;
    document.getElementById("roundsPlayed").innerText = countOfRounds;
}
function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }  

function playGame(){
    if(countOfRounds < 5){
        playround(gethumanselection(),getcomputerselection(getRandomNumber()));
    }
    else if(countOfRounds >=5){
        alert("Game Over!")
    }
}



