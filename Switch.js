//Switch Case

let player = "rock";
let comp= "scissors";

switch (player){
    case comp:
        console.log("tie!");
        break;
    case "rock":
        if(comp === "scissors"){
            console.log("Player Wins");
        }
        else{
            console.log("Computer Wins");
        }
        break;
    case "paper":
        if(comp === "rock"){
            console.log("Player Wins");
        }
        else{
            console.log("Computer Wins");
        }
        break;
    default:
        if(comp === "paper"){
            console.log("Player Wins");
        }
        else{
            console.log("Computer Wins");
        }
        break;
}