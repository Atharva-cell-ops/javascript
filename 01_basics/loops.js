const prompt = require("prompt-sync")();
prompt("What's your name:- ");
prompt("What's their name:- ")

let lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;

if(lovescore > 100){
    prompt("Your love score is:- "+ lovescore+ "%");
}
else{
    prompt("Your lovescore is " + lovescore + "%");
}